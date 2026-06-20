const cidadeRepository = require('../../repositories/epico2/cidadeRepository');

class CidadeService {
  async listarCidades() { return await cidadeRepository.listarTodas(); }
  async criarCidade(dados) {
    if (!dados.nome || !dados.id_est) throw new Error("Nome da cidade e ID do estado são obrigatórios.");
    return await cidadeRepository.criar(dados);
  }
}
module.exports = new CidadeService();