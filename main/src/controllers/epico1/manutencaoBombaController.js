const manutencaoBombaService = require('../../services/epico1/manutencaoBombaService');

class ManutencaoBombaController {
  async listar(req, res) {
    try {
      const manutencoes = await manutencaoBombaService.listarManutencoes();
      return res.status(200).json(manutencoes);
    } catch (erro) {
      return res.status(500).json({ erro: 'Erro ao listar manutenções', detalhes: erro.message });
    }
  }

  async criar(req, res) {
    try {
      const novaManutencao = await manutencaoBombaService.registarManutencao(req.body);
      return res.status(201).json(novaManutencao);
    } catch (erro) {
      return res.status(400).json({ erro: erro.message });
    }
  }
}

module.exports = new ManutencaoBombaController();