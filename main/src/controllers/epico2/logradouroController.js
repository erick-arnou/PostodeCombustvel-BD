const logradouroService = require('../../services/epico2/logradouroService');

class LogradouroController {
  async listar(req, res) {
    try { return res.status(200).json(await logradouroService.listarLogradouros()); } 
    catch (e) { return res.status(500).json({ erro: e.message }); }
  }
  async criar(req, res) {
    try { return res.status(201).json(await logradouroService.criarLogradouro(req.body)); } 
    catch (e) { return res.status(400).json({ erro: e.message }); }
  }
}
module.exports = new LogradouroController();