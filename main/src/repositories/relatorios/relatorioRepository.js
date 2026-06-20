const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

class RelatorioRepository {

  // -------------------------------------------------------
  // ENDPOINT 1: /relatorios/vendas-turno
  // Total financeiro e volume de litros vendidos por turno
  // -------------------------------------------------------
  async vendasPorTurno() {
    const escalas = await prisma.escalaTrabalho.findMany({
      include: {
        turno: true,
        funcionario: true,
        vendas: {
          include: {
            itens_combustivel: true,
          },
        },
      },
    });

    return escalas.map((escala) => {
      const totalFinanceiro = escala.vendas.reduce(
        (acc, venda) => acc + Number(venda.valor_total),
        0
      );

      const totalLitros = escala.vendas.reduce((acc, venda) => {
        const litrosDaVenda = venda.itens_combustivel.reduce(
          (s, item) => s + Number(item.litros),
          0
        );
        return acc + litrosDaVenda;
      }, 0);

      return {
        turno: escala.turno.descricao,
        hora_inicio: escala.turno.hora_inicio,
        hora_fim: escala.turno.hora_fim,
        data: escala.data,
        funcionario: escala.funcionario.nome,
        total_vendas: escala.vendas.length,
        total_financeiro: totalFinanceiro.toFixed(2),
        total_litros: totalLitros.toFixed(3),
      };
    });
  }

  // -------------------------------------------------------
  // ENDPOINT 2: /relatorios/estoque-critico
  // Produtos e óleos abaixo do estoque mínimo
  // -------------------------------------------------------
  async estoqueCritico() {
    const produtos = await prisma.produto.findMany({
      where: {
        ativo: true,
      },
      include: {
        subcategoria: {
          include: { categoria: true },
        },
        oleo_lubrificante: true,
      },
    });

    // Filtra em JS os que estão abaixo do mínimo
    return produtos.filter(
      (p) => Number(p.estoque_atual) < Number(p.estoque_minimo)
    );
  }

  // -------------------------------------------------------
  // ENDPOINT 3: /relatorios/extrato-frota
  // Consumo mensal por cliente frotista agrupado por placa
  // -------------------------------------------------------
  async extratoFrota({ mes, ano } = {}) {
    const dataInicio = new Date(ano || new Date().getFullYear(), (mes || new Date().getMonth() + 1) - 1, 1);
    const dataFim = new Date(dataInicio.getFullYear(), dataInicio.getMonth() + 1, 0, 23, 59, 59);

    const vendas = await prisma.venda.findMany({
      where: {
        data_hora: { gte: dataInicio, lte: dataFim },
        id_cliente: { not: null },
        id_veiculo: { not: null },
      },
      include: {
        cliente: true,
        veiculo: true,
        itens_combustivel: true,
      },
    });

    // Agrupa por cliente -> placa
    const mapa = {};
    for (const venda of vendas) {
      const clienteKey = venda.id_cliente;
      const placaKey = venda.veiculo.placa;

      if (!mapa[clienteKey]) {
        mapa[clienteKey] = {
          cliente_id: venda.id_cliente,
          cliente_nome: venda.cliente.nome,
          veiculos: {},
        };
      }

      if (!mapa[clienteKey].veiculos[placaKey]) {
        mapa[clienteKey].veiculos[placaKey] = {
          placa: placaKey,
          modelo: venda.veiculo.modelo,
          marca: venda.veiculo.marca,
          total_abastecimentos: 0,
          total_litros: 0,
          total_gasto: 0,
        };
      }

      const v = mapa[clienteKey].veiculos[placaKey];
      v.total_abastecimentos += 1;
      v.total_gasto += Number(venda.valor_total);
      v.total_litros += venda.itens_combustivel.reduce(
        (acc, item) => acc + Number(item.litros), 0
      );
    }

    return Object.values(mapa).map((c) => ({
      ...c,
      veiculos: Object.values(c.veiculos).map((v) => ({
        ...v,
        total_litros: v.total_litros.toFixed(3),
        total_gasto: v.total_gasto.toFixed(2),
      })),
    }));
  }
}

module.exports = new RelatorioRepository();
