const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

class BicoRepository {
  async listarTodos() {
    return await prisma.bico.findMany({
      include: {
        bomba: true,
        tanque: {
          include: { tipo_combustivel: true } // Traz também o tipo de combustível que corre nesse bico
        }
      }
    });
  }

  async criar(dados) {
    return await prisma.bico.create({
      data: {
        id_bomba: BigInt(dados.id_bomba),
        id_tanque: BigInt(dados.id_tanque),
        odometro_atual_litros: parseFloat(dados.odometro_atual_litros || 0)
      }
    });
  }
}

module.exports = new BicoRepository();