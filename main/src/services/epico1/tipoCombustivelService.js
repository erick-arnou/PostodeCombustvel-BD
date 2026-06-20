const TipoCombustivelRepository = require('../../repositories/epico1/TipoCombustivelRepository');

class TipoCombustivelService {
  async listarCombustiveis() {
    return await TipoCombustivelRepository.listarTodos();
  }

  async criarCombustivel(dados) {
    // Regra de Negócio: O nome do combustível é obrigatório e não pode ser apenas espaços em branco
    if (!dados.nome || dados.nome.trim() === '') {
      throw new Error("O nome do tipo de combustível é obrigatório.");
    }

    // Normaliza o texto para caixa alta (opcional, bom para padronização)
    dados.nome = dados.nome.trim().toUpperCase();

    return await TipoCombustivelRepository.criar(dados);
  }
}

module.exports = new TipoCombustivelService();