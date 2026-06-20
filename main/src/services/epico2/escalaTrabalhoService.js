const escalaTrabalhoRepository = require('../../repositories/epico2/escalaTrabalhoRepository');

class EscalaTrabalhoService {
  async listarEscalas() {
    return await escalaTrabalhoRepository.listarTodas();
  }

  async criarEscala(dados) {
    if (!dados.id_func || !dados.id_turno) {
      throw new Error("O ID do funcionário e o ID do turno são obrigatórios para definir uma escala.");
    }
    return await escalaTrabalhoRepository.criar(dados);
  }
}

module.exports = new EscalaTrabalhoService();