const funcionarioRepository = require('../../repositories/epico2/funcionarioRepository');

class FuncionarioService {
  async listarFuncionarios() {
    return await funcionarioRepository.listarTodos();
  }

  async criarFuncionario(dados) {
    if (!dados.nome || dados.nome.trim() === '') {
      throw new Error("O nome do funcionário é obrigatório.");
    }
    if (!dados.id_cargo || !dados.id_end) {
      throw new Error("O ID do cargo e o ID do logradouro (endereço) são obrigatórios.");
    }
    return await funcionarioRepository.criar(dados);
  }
}

module.exports = new FuncionarioService();