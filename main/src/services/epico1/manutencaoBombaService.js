const manutencaoBombaRepository = require('../../repositories/epico1/manutencaoBombaRepository');

class ManutencaoBombaService {
  async listarManutencoes() {
    return await manutencaoBombaRepository.listarTodas();
  }

  async registarManutencao(dados) {
    if (!dados.id_bomba || !dados.descricao || dados.descricao.trim() === '') {
      throw new Error("O ID da bomba e a descrição da manutenção são obrigatórios.");
    }
    return await manutencaoBombaRepository.create(dados);
  }
}

module.exports = new ManutencaoBombaService();