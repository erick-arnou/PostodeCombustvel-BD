const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

class ManutencaoBombaRepository {
  async listarTodas() {
    return await prisma.manutencaoBomba.findMany({
      include: { bomba: true } // Mostra os dados da bomba reparada
    });
  }

  async criar(dados) {
    return await prisma.manutencaoBomba.create({
      data: {
        id_bomba: BigInt(dados.id_bomba),
        data_manutencao: dados.data_manutencao ? new Date(dados.data_manutencao) : new Date(),
        descricao: dados.descricao
      }
    });
  }
}

module.exports = new ManutencaoBombaRepository();