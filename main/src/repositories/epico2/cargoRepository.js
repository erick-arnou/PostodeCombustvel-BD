const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

class CargoRepository {
  async listarTodos() {
    return await prisma.cargo.findMany();
  }

  async criar(dados) {
    return await prisma.cargo.create({
      data: {
        nome: dados.nome,
        salario_base: parseFloat(dados.salario_base)
      }
    });
  }
}

module.exports = new CargoRepository();