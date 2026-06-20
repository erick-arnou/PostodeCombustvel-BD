const funcionarioService = require('../../services/epico2/funcionarioService');

class FuncionarioController {
  async listar(req, res) {
    try {
      const funcionarios = await funcionarioService.listarFuncionarios();
      return res.status(200).json(funcionarios);
    } catch (erro) {
      return res.status(500).json({ erro: 'Erro ao listar funcionários', detalhes: erro.message });
    }
  }

  async criar(req, res) {
    try {
      const novoFuncionario = await funcionarioService.criarFuncionario(req.body);
      return res.status(201).json(novoFuncionario);
    } catch (erro) {
      return res.status(400).json({ erro: erro.message });
    }
  }
}

module.exports = new FuncionarioController();