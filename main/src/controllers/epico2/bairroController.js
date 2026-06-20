const bairroService = require('../../services/epico2/bairroService');

class BairroController {
  async listar(req, res) {
    try { return res.status(200).json(await bairroService.listarBairros()); } 
    catch (e) { return res.status(500).json({ erro: e.message }); }
  }
  async criar(req, res) {
    try { return res.status(201).json(await bairroService.criarBairro(req.body)); } 
    catch (e) { return res.status(400).json({ erro: e.message }); }
  }
}
module.exports = new BairroController();