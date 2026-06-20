const bicoRepository = require('../../repositories/epico1/bicoRepository');

class BicoService {
  async listarBicos() {
    return await bicoRepository.listarTodos();
  }

  async criarBico(dados) {
    if (!dados.id_bomba || !dados.id_tanque) {
      throw new Error("O ID da bomba e o ID do tanque são obrigatórios para registar um bico.");
    }

    if (dados.odometro_atual_litros !== undefined && Number(dados.odometro_atual_litros) < 0) {
      throw new Error("O odómetro inicial do bico não pode ser negativo.");
    }

    return await bicoRepository.criar(dados);
  }
}

module.exports = new BicoService();