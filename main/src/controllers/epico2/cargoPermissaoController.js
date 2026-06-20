const cargoPermissaoService = require('../../services/epico2/cargoPermissaoService');

class CargoPermissaoController {
  async listar(req, res) {
    try { return res.status(200).json(await cargoPermissaoService.listarVinculos()); } 
    catch (e) { return res.status(500).json({ erro: e.message }); }
  }
  async criar(req, res) {
    try { return res.status(201).json(await cargoPermissaoService.vincularPermissao(req.body)); } 
    catch (e) { return res.status(400).json({ erro: e.message }); }
  }
}
module.exports = new CargoPermissaoController();