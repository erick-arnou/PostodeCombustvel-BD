const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

class BombaRepository {
  async listarTodas() {
    return await prisma.bomba.findMany();
  }

  async criar(dados) {
    return await prisma.bomba.create({
      data: {
        ativa: dados.ativa !== undefined ? dados.ativa : true
      }
    });
  }
}

module.exports = new BombaRepository();