const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

class PermissaoRepository {
  async listarTodas() { return await prisma.permissao.findMany(); }
  async criar(dados) {
    return await prisma.permissao.create({
      data: {
        nome: dados.nome,
        descricao: dados.descricao
      }
    });
  }
}
module.exports = new PermissaoRepository();