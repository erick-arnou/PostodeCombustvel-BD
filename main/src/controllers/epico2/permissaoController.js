const permissaoService = require('../../services/epico2/permissaoService');

class PermissaoController {
  async listar(req, res) {
    try { return res.status(200).json(await permissaoService.listarPermissoes()); } 
    catch (e) { return res.status(500).json({ erro: e.message }); }
  }
  async criar(req, res) {
    try { return res.status(201).json(await permissaoService.criarPermissao(req.body)); } 
    catch (e) { return res.status(400).json({ erro: e.message }); }
  }
}
module.exports = new PermissaoController();