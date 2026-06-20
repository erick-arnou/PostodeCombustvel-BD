// Lembrando de voltar duas pastas para achar a raiz de repositories
const cargoRepository = require('../../repositories/epico2/cargoRepository');

class CargoService {
  async listarCargos() {
    return await cargoRepository.listarTodos();
  }

  async criarCargo(dados) {
    if (!dados.nome || dados.nome.trim() === '') {
      throw new Error("O nome do cargo é obrigatório.");
    }
    if (!dados.salario_base || Number(dados.salario_base) <= 0) {
      throw new Error("O salário base deve ser um valor maior que zero.");
    }
    return await cargoRepository.criar(dados);
  }
}

module.exports = new CargoService();