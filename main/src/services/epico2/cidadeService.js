const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

class CidadeRepository {
  async listarTodas() {
    return await prisma.cidade.findMany({ include: { estado: true } });
  }
  async criar(dados) {
    return await prisma.cidade.create({
      data: {
        nome: dados.nome,
        id_est: BigInt(dados.id_est)
      }
    });
  }
}
module.exports = new CidadeRepository();