const estadoRepository = require('../../repositories/epico2/estadoRepository');

class EstadoService {
  async listarEstados() { return await estadoRepository.listarTodos(); }
  async criarEstado(dados) {
    if (!dados.nome || dados.nome.trim() === '') throw new Error("O nome do estado é obrigatório.");
    return await estadoRepository.criar(dados);
  }
}
module.exports = new EstadoService();