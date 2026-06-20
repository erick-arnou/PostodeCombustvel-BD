const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

class TurnoRepository {
  async listarTodos() {
    return await prisma.turno.findMany();
  }

  async criar(dados) {
    return await prisma.turno.create({
      data: {
        descricao: dados.descricao,
        // O Prisma lida com campos TIME mapeando strings ou objetos Date
        hora_inicio: dados.hora_inicio, 
        hora_fim: dados.hora_fim
      }
    });
  }
}

module.exports = new TurnoRepository();