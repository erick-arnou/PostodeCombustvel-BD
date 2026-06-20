const turnoService = require('../../services/epico2/turnoService');

class TurnoController {
  async listar(req, res) {
    try {
      const turnos = await turnoService.listarTurnos();
      return res.status(200).json(turnos);
    } catch (erro) {
      return res.status(500).json({ erro: 'Erro ao listar turnos', detalhes: erro.message });
    }
  }

  async criar(req, res) {
    try {
      const novoTurno = await turnoService.criarTurno(req.body);
      return res.status(201).json(novoTurno);
    } catch (erro) {
      return res.status(400).json({ erro: erro.message });
    }
  }
}

module.exports = new TurnoController();