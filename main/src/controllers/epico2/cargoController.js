// Lembrando de voltar duas pastas para achar a raiz de services
const cargoService = require('../../services/epico2/cargoService');

class CargoController {
  async listar(req, res) {
    try {
      const cargos = await cargoService.listarCargos();
      return res.status(200).json(cargos);
    } catch (erro) {
      return res.status(500).json({ erro: 'Erro ao listar cargos', detalhes: erro.message });
    }
  }

  async criar(req, res) {
    try {
      const novoCargo = await cargoService.criarCargo(req.body);
      return res.status(201).json(novoCargo);
    } catch (erro) {
      return res.status(400).json({ erro: erro.message });
    }
  }
}

module.exports = new CargoController();