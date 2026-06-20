const bombaRepository = require('../../repositories/epico1/bombaRepository');

class BombaService {
  async listarBombas() {
    return await bombaRepository.listarTodas();
  }

  async criarBomba(dados) {
    // Como a bomba não tem campos obrigatórios complexos nesta etapa, 
    // apenas garantimos que o valor de 'ativa' seja um booleano válido se enviado.
    if (dados.ativa !== undefined && typeof dados.ativa !== 'boolean') {
      throw new Error("O campo 'ativa' deve ser um valor booleano (true ou false).");
    }
    return await bombaRepository.criar(dados);
  }
}

module.exports = new BombaService();