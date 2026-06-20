const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

class LogradouroRepository {
  async listarTodos() { 
    return await prisma.logradouro.findMany({
      include: { bairro: true, cidade: true, estado: true }
    }); 
  }
  async criar(dados) {
    return await prisma.logradouro.create({
      data: {
        n_rua: dados.n_rua,
        n_casa: parseInt(dados.n_casa),
        id_bair: BigInt(dados.id_bair),
        id_cid: BigInt(dados.id_cid),
        id_est: BigInt(dados.id_est)
      }
    });
  }
}
module.exports = new LogradouroRepository();