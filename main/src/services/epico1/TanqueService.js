const TanqueRepository = require('../../repositories/epico1/tanqueRepository');

class TanqueService {
  async listarTanques() {
    return await TanqueRepository.listarTodos();
  }

  async criarTanque(dados) {
    // Regra de negócio do Épico 1: O tanque tem de ter um tipo de combustível
    if (!dados.tipo_combustivel_id || !dados.capacidade_litros) {
      throw new Error("O tipo de combustível e a capacidade são obrigatórios.");
    }
    
    // O volume atual começa a zero se não for informado
    dados.volume_atual_litros = dados.volume_atual_litros || 0;
    
    return await TanqueRepository.criar(dados);
  }
}

module.exports = new TanqueService();