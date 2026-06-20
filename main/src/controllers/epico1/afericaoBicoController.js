const afericaoBicoService = require('../../services/epico1/afericaoBicoService');

class AfericaoBicoController {
  async listar(req, res) {
    try {
      const afericoes = await afericaoBicoService.listarAfericoes();
      return res.status(200).json(afericoes);
    } catch (erro) {
      return res.status(500).json({ erro: 'Erro ao listar aferições', detalhes: erro.message });
    }
  }

  async criar(req, res) {
    try {
      const novaAfericao = await afericaoBicoService.registarAfericao(req.body);
      return res.status(201).json(novaAfericao);
    } catch (erro) {
      return res.status(400).json({ erro: erro.message });
    }
  }
}

module.exports = new AfericaoBicoController();