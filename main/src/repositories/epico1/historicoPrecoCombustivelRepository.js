const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

class HistoricoPrecoRepository {
  async listarTodos() {
    return await prisma.historicoPrecoCombustivel.findMany({
      include: { tipo_combustivel: true } // Traz os dados do combustível junto
    });
  }

  async criar(dados) {
    return await prisma.historicoPrecoCombustivel.create({
      data: {
        id_tipo_combustivel: BigInt(dados.id_tipo_combustivel),
        preco_venda: dados.preco_venda,
        data_inicio: dados.data_inicio ? new Date(dados.data_inicio) : new Date()
      }
    });
  }
}

module.exports = new HistoricoPrecoRepository();