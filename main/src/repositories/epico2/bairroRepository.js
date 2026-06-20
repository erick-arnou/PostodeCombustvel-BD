const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

class BairroRepository {
  async listarTodos() { 
    return await prisma.bairro.findMany({ include: { cidade: true } }); 
  }
  async criar(dados) {
    return await prisma.bairro.create({
      data: {
        nome: dados.nome,
        cep: dados.cep,
        id_cid: BigInt(dados.id_cid)
      }
    });
  }
}
module.exports = new BairroRepository();