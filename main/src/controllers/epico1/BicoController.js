const bicoService = require('../../services/epico1/bicoService');

class BicoController {
  async listar(req, res) {
    try {
      const bicos = await bicoService.listarBicos();
      return res.status(200).json(bicos);
    } catch (erro) {
      return res.status(500).json({ erro: 'Erro ao listar bicos', detalhes: erro.message });
    }
  }

  async criar(req, res) {
    try {
      const novoBico = await bicoService.criarBico(req.body);
      return res.status(201).json(novoBico);
    } catch (erro) {
      return res.status(400).json({ erro: erro.message });
    }
  }
}

module.exports = new BicoController();