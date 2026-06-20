const HistoricoPrecoRepository = require('../../repositories/epico1/historicoPrecoCombustivelRepository');

class HistoricoPrecoService {
  async listarPrecos() {
    return await HistoricoPrecoRepository.listarTodos();
  }

  async registarPreco(dados) {
    if (!dados.id_tipo_combustivel || !dados.preco_venda) {
      throw new Error("O ID do combustível e o preço de venda são obrigatórios.");
    }
    if (Number(dados.preco_venda) <= 0) {
      throw new Error("O preço de venda deve ser maior que zero.");
    }
    return await HistoricoPrecoRepository.criar(dados);
  }
}

module.exports = new HistoricoPrecoService();