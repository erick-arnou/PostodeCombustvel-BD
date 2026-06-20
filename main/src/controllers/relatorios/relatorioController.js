const relatorioService = require('../../services/relatorios/relatorioService');

class RelatorioController {

  async vendasPorTurno(req, res) {
    try {
      const resultado = await relatorioService.vendasPorTurno();
      return res.status(200).json(resultado);
    } catch (erro) {
      return res.status(500).json({ erro: 'Erro ao gerar relatório de vendas por turno', detalhes: erro.message });
    }
  }

  async estoqueCritico(req, res) {
    try {
      const resultado = await relatorioService.estoqueCritico();
      return res.status(200).json(resultado);
    } catch (erro) {
      return res.status(500).json({ erro: 'Erro ao gerar relatório de estoque crítico', detalhes: erro.message });
    }
  }

  async extratoFrota(req, res) {
    try {
      // Aceita ?mes=6&ano=2026 como query params, senão usa o mês atual
      const { mes, ano } = req.query;
      const resultado = await relatorioService.extratoFrota(mes, ano);
      return res.status(200).json(resultado);
    } catch (erro) {
      return res.status(400).json({ erro: erro.message });
    }
  }
}

module.exports = new RelatorioController();
