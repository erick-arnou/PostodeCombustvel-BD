const afericaoBicoRepository = require('../../repositories/epico1/afericaoBicoRepository');

class AfericaoBicoService {
  async listarAfericoes() {
    return await afericaoBicoRepository.listarTodas();
  }

  async registarAfericao(dados) {
    if (!dados.id_bico || !dados.quantidade_litros) {
      throw new Error("O ID do bico e a quantidade de litros testada são obrigatórios.");
    }

    if (Number(dados.quantidade_litros) <= 0) {
      throw new Error("A quantidade de litros na aferição deve ser maior que zero.");
    }

    return await afericaoBicoRepository.criar(dados);
  }
}

module.exports = new AfericaoBicoService();