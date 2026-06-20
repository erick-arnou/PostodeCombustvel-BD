const cidadeService = require('../../services/epico2/cidadeService');

class CidadeController {
  async listar(req, res) {
    try { return res.status(200).json(await cidadeService.listarCidades()); } 
    catch (e) { return res.status(500).json({ erro: e.message }); }
  }
  async criar(req, res) {
    try { return res.status(201).json(await cidadeService.criarCidade(req.body)); } 
    catch (e) { return res.status(400).json({ erro: e.message }); }
  }
}
module.exports = new CidadeController();