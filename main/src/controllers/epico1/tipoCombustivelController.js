const TipoCombustivelService = require('../../services/epico1/tipoCombustivelService');

class TipoCombustivelController {
  async listar(req, res) {
    try {
      const combustiveis = await TipoCombustivelService.listarCombustiveis();
      return res.status(200).json(combustiveis);
    } catch (erro) {
      return res.status(500).json({ erro: 'Erro ao listar combustíveis.', detalhes: erro.message });
    }
  }

  async criar(req, res) {
    try {
      const novoCombustivel = await TipoCombustivelService.criarCombustivel(req.body);
      return res.status(201).json(novoCombustivel);
    } catch (erro) {
      // Retorna erro 400 (Bad Request) caso falte o nome ou aconteça violação de UNIQUE no banco
      return res.status(400).json({ erro: erro.message });
    }
  }
}

module.exports = new TipoCombustivelController();