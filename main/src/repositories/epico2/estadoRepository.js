const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

class EstadoRepository {
  async listarTodos() { return await prisma.estado.findMany(); }
  async criar(dados) {
    return await prisma.estado.create({
      data: { nome: dados.nome }
    });
  }
}
module.exports = new EstadoRepository();