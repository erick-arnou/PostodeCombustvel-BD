const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

class TipoCombustivelRepository {
  // Busca todos os tipos de combustíveis cadastrados
  async listarTodos() {
    return await prisma.tipoCombustivel.findMany();
  }

  // Busca um tipo específico pelo ID (útil para validações futuras)
  async buscarPorId(id) {
    return await prisma.tipoCombustivel.findUnique({
      where: { id: BigInt(id) }
    });
  }

  // Salva um novo tipo de combustível no banco de dados
  async criar(dados) {
    return await prisma.tipoCombustivel.create({
      data: dados
    });
  }
}

module.exports = new TipoCombustivelRepository();