const permissaoRepository = require('../../repositories/epico2/permissaoRepository');

class PermissaoService {
  async listarPermissoes() { return await permissaoRepository.listarTodas(); }
  async criarPermissao(dados) {
    if (!dados.nome) throw new Error("O nome da permissão é obrigatório.");
    return await permissaoRepository.criar(dados);
  }
}
module.exports = new PermissaoService();