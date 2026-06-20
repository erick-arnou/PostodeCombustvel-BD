const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

class FuncionarioRepository {
  async listarTodos() {
    return await prisma.funcionario.findMany({
      include: {
        cargos: true, // Traz os dados do cargo do funcionário
        logradouro: {
          include: { bairro: true, cidade: true, estado: true } // Traz o endereço completo traduzido
        }
      }
    });
  }

  async criar(dados) {
    return await prisma.funcionario.create({
      data: {
        nome: dados.nome,
        id_cargo: BigInt(dados.id_cargo),
        id_end: BigInt(dados.id_end)
      }
    });
  }
}

module.exports = new FuncionarioRepository();