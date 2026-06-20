const relatorioRepository = require('../../repositories/relatorios/relatorioRepository');

class RelatorioService {

  async vendasPorTurno() {
    return await relatorioRepository.vendasPorTurno();
  }

  async estoqueCritico() {
    const produtos = await relatorioRepository.estoqueCritico();

    return produtos.map((p) => ({
      id: p.id,
      codigo: p.codigo,
      nome: p.nome,
      categoria: p.subcategoria.categoria.nome,
      subcategoria: p.subcategoria.nome,
      estoque_atual: Number(p.estoque_atual),
      estoque_minimo: Number(p.estoque_minimo),
      deficit: (Number(p.estoque_minimo) - Number(p.estoque_atual)).toFixed(2),
      e_oleo_lubrificante: !!p.oleo_lubrificante,
      oleo: p.oleo_lubrificante
        ? {
            viscosidade: p.oleo_lubrificante.viscosidade,
            base: p.oleo_lubrificante.base,
            aplicacao: p.oleo_lubrificante.aplicacao,
          }
        : null,
    }));
  }

  async extratoFrota(mes, ano) {
    // Validação dos parâmetros
    const mesNum = mes ? parseInt(mes) : new Date().getMonth() + 1;
    const anoNum = ano ? parseInt(ano) : new Date().getFullYear();

    if (mesNum < 1 || mesNum > 12) {
      throw new Error('Mês inválido. Informe um valor entre 1 e 12.');
    }

    return await relatorioRepository.extratoFrota({ mes: mesNum, ano: anoNum });
  }
}

module.exports = new RelatorioService();
