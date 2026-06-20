const turnoRepository = require('../../repositories/epico2/turnoRepository');

class TurnoService {
  async listarTurnos() {
    return await turnoRepository.listarTodos();
  }

  async criarTurno(dados) {
    if (!dados.descricao || !dados.hora_inicio || !dados.hora_fim) {
      throw new Error("Descrição, hora de início e hora de fim são obrigatórios para o turno.");
    }
    return await turnoRepository.criar(dados);
  }
}

module.exports = new TurnoService();