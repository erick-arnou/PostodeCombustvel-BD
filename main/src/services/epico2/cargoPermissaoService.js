const cargoPermissaoRepository = require('../../repositories/epico2/cargoPermissaoRepository');

class CargoPermissaoService {
  async listarVinculos() { return await cargoPermissaoRepository.listarTodas(); }
  async vincularPermissao(dados) {
    if (!dados.id_cargo || !dados.id_perm) {
      throw new Error("O ID do cargo e o ID da permissão são obrigatórios.");
    }
    return await cargoPermissaoRepository.criar(dados);
  }
}
module.exports = new CargoPermissaoService();