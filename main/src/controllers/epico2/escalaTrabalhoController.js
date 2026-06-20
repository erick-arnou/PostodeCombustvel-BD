const escalaTrabalhoService = require('../../services/epico2/escalaTrabalhoService');

class EscalaTrabalhoController {
  async listar(req, res) {
    try {
      const escalas = await escalaTrabalhoService.listarEscalas();
      return res.status(200).json(escalas);
    } catch (erro) {
      return res.status(500).json({ erro: 'Erro ao listar escalas de trabalho', detalhes: erro.message });
    }
  }

  async criar(req, res) {
    try {
      const novaEscala = await escalaTrabalhoService.criarEscala(req.body);
      return res.status(201).json(novaEscala);
    } catch (erro) {
      return res.status(400).json({ erro: erro.message });
    }
  }
}

module.exports = new EscalaTrabalhoController();