const bairroRepository = require('../../repositories/epico2/bairroRepository');

class BairroService {
  async listarBairros() { return await bairroRepository.listarTodos(); }
  async criarBairro(dados) {
    if (!dados.nome || !dados.id_cid) {
      throw new Error("Nome do bairro e ID da cidade são obrigatórios.");
    }
    return await bairroRepository.criar(dados);
  }
}
module.exports = new BairroService();