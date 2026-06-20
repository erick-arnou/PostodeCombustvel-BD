const bombaService = require('../../services/epico1/bombaService');

class BombaController {
  async listar(req, res) {
    try {
      const bombas = await bombaService.listarBombas();
      return res.status(200).json(bombas);
    } catch (erro) {
      return res.status(500).json({ erro: 'Erro ao listar bombas', detalhes: erro.message });
    }
  }

  async criar(req, res) {
    try {
      const novaBomba = await bombaService.criarBomba(req.body);
      return res.status(201).json(novaBomba);
    } catch (erro) {
      return res.status(400).json({ erro: erro.message });
    }
  }
}

module.exports = new BombaController();