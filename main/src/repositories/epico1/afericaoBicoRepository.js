const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

class AfericaoBicoRepository {
  async listarTodas() {
    return await prisma.afericaoBico.findMany({
      include: { bico: true }
    });
  }

  async criar(dados) {
    return await prisma.afericaoBico.create({
      data: {
        id_bico: BigInt(dados.id_bico),
        data_afericao: dados.data_afericao ? new Date(dados.data_afericao) : new Date(),
        quantidade_litros: parseFloat(dados.quantidade_litros),
        resultado_ok: dados.resultado_ok !== undefined ? dados.resultado_ok : true
      }
    });
  }
}

module.exports = new AfericaoBicoRepository();