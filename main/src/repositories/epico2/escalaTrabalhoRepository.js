const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

class EscalaTrabalhoRepository {
  async listarTodas() {
    return await prisma.escala_trabalho.findMany({
      include: {
        funcionario: true, // Traz os dados do funcionário escalado
        turno: true        // Traz os dados do turno (horários)
      }
    });
  }

  async criar(dados) {
    return await prisma.escala_trabalho.create({
      data: {
        id_func: BigInt(dados.id_func),
        id_turno: BigInt(dados.id_turno),
        data: dados.data ? new Date(dados.data) : new Date()
      }
    });
  }
}

module.exports = new EscalaTrabalhoRepository();