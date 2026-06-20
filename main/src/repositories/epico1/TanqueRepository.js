const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

class TanqueRepository {
  async listarTodos() {
    return await prisma.tanque.findMany({
      include: { tipo_combustivel: true }
    });
  }

  async criar(dados) {
    return await prisma.tanque.create({ data: dados });
  }
}

module.exports = new TanqueRepository();