const logradouroRepository = require('../../repositories/epico2/logradouroRepository');

class LogradouroService {
  async listarLogradouros() { return await logradouroRepository.listarTodos(); }
  async criarLogradouro(dados) {
    if (!dados.n_rua || !dados.n_casa || !dados.id_bair || !dados.id_cid || !dados.id_est) {
      throw new Error("Rua, número da casa, ID do bairro, ID da cidade e ID do estado são obrigatórios.");
    }
    return await logradouroRepository.criar(dados);
  }
}
module.exports = new LogradouroService();