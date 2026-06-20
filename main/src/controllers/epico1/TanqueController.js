const TanqueService = require('../../services/epico1/TanqueService');

class TanqueController {
  async listar(req, res) {
    try {
      const tanques = await TanqueService.listarTanques();
      return res.status(200).json(tanques);
    } catch (erro) {
      return res.status(500).json({ erro: erro.message });
    }
  }

  async criar(req, res) {
    try {
      const novoTanque = await TanqueService.criarTanque(req.body);
      return res.status(201).json(novoTanque);
    } catch (erro) {
      return res.status(400).json({ erro: erro.message });
    }
  }
}

module.exports = new TanqueController();