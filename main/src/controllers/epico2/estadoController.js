const estadoService = require('../../services/epico2/estadoService');

class EstadoController {
  async listar(req, res) {
    try { return res.status(200).json(await estadoService.listarEstados()); } 
    catch (e) { return res.status(500).json({ erro: e.message }); }
  }
  async criar(req, res) {
    try { return res.status(201).json(await estadoService.criarEstado(req.body)); } 
    catch (e) { return res.status(400).json({ erro: e.message }); }
  }
}
module.exports = new EstadoController();