const HistoricoPrecoService = require('../../services/epico1/historicoPrecoCombustivelService');

class HistoricoPrecoController {
  async listar(req, res) {
    try {
      const precos = await HistoricoPrecoService.listarPrecos();
      return res.status(200).json(precos);
    } catch (erro) {
      return res.status(500).json({ erro: 'Erro ao listar histórico de preços', detalhes: erro.message });
    }
  }

  async criar(req, res) {
    try {
      const novoPreco = await HistoricoPrecoService.registarPreco(req.body);
      return res.status(201).json(novoPreco);
    } catch (erro) {
      return res.status(400).json({ erro: erro.message });
    }
  }
}

module.exports = new HistoricoPrecoController();