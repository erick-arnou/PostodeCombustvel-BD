const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

class CargoPermissaoRepository {
  async listarTodas() {
    return await prisma.cargo_permisao.findMany({
      include: { cargos: true, permissao: true }
    });
  }
  async criar(dados) {
    return await prisma.cargo_permisao.create({
      data: {
        id_cargo: BigInt(dados.id_cargo),
        id_perm: BigInt(dados.id_perm)
      }
    });
  }
}
module.exports = new CargoPermissaoRepository();