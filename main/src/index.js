const express = require('express');

// === IMPORTS DO ÉPICO 1 (Como o index.js está dentro de src, basta ./controllers) ===
const TipoCombustivelController = require('./controllers/epico1/TipoCombustivelController');
const HistoricoPrecoController = require('./controllers/epico1/historicoPrecoCombustivelController');
const TanqueController = require('./controllers/epico1/tanqueController');
const bombaController = require('./controllers/epico1/bombaController');
const manutencaoBombaController = require('./controllers/epico1/manutencaoBombaController');
const bicoController = require('./controllers/epico1/bicoController');
const afericaoBicoController = require('./controllers/epico1/afericaoBicoController');

// === IMPORTS DO ÉPICO 2 ===
const cargoController = require('./controllers/epico2/cargoController');
const turnoController = require('./controllers/epico2/turnoController');
const estadoController = require('./controllers/epico2/estadoController');
const cidadeController = require('./controllers/epico2/cidadeController');
const bairroController = require('./controllers/epico2/bairroController');
const logradouroController = require('./controllers/epico2/logradouroController');
const funcionarioController = require('./controllers/epico2/funcionarioController');
const escalaTrabalhoController = require('./controllers/epico2/escalaTrabalhoController'); 
const permissaoController = require('./controllers/epico2/permissaoController');
const cargoPermissaoController = require('./controllers/epico2/cargoPermissaoController');

// === IMPORTS DO RELATÓRIOS (os que vem daquelas 3 endpoints la do final do documento) ===

const relatorioController = require('./controllers/relatorios/relatorioController');

const app = express();

BigInt.prototype.toJSON = function () {
  return this.toString();
};

app.use(express.json());

// === ROTAS: tipo_combustivel ===
app.get('/combustiveis', TipoCombustivelController.listar);
app.post('/combustiveis', TipoCombustivelController.criar);

// === ROTAS: historico_preco_combustivel ===
app.get('/precos', HistoricoPrecoController.listar);
app.post('/precos', HistoricoPrecoController.criar);

// === ROTAS: tanque ===
app.get('/tanques', TanqueController.listar);
app.post('/tanques', TanqueController.criar);

// === ROTAS: bomba ===
app.get('/bombas', bombaController.listar);
app.post('/bombas', bombaController.criar);

// === ROTAS: manutencao_bomba ===
app.get('/manutencoes', manutencaoBombaController.listar);
app.post('/manutencoes', manutencaoBombaController.criar);

// === ROTAS: bico ===
app.get('/bicos', bicoController.listar);
app.post('/bicos', bicoController.criar);

// === ROTAS: afericao_bico ===
app.get('/afericoes', afericaoBicoController.listar);
app.post('/afericoes', afericaoBicoController.criar);

// === ROTAS ÉPICO 2: cargo ===
app.get('/cargos', cargoController.listar);
app.post('/cargos', cargoController.criar);

// === ROTAS ÉPICO 2: turno ===
app.get('/turnos', turnoController.listar);
app.post('/turnos', turnoController.criar);

// === ROTAS ÉPICO 2: estado ===
app.get('/estados', estadoController.listar);
app.post('/estados', estadoController.criar);

// === ROTAS ÉPICO 2: cidade ===
app.get('/cidades', cidadeController.listar);
app.post('/cidades', cidadeController.criar);

// === ROTAS ÉPICO 2: bairro ===
app.get('/bairros', bairroController.listar);
app.post('/bairros', bairroController.criar);

// === ROTAS ÉPICO 2: logradouro ===
app.get('/logradouros', logradouroController.listar);
app.post('/logradouros', logradouroController.criar);

// === ROTAS ÉPICO 2: funcionario ===
app.get('/funcionarios', funcionarioController.listar);
app.post('/funcionarios', funcionarioController.criar);

// === ROTAS ÉPICO 2: escala_trabalho ===
app.get('/escalas', escalaTrabalhoController.listar);
app.post('/escalas', escalaTrabalhoController.criar);

// === ROTAS ÉPICO 2: permissao ===
app.get('/permissoes', permissaoController.listar);
app.post('/permissoes', permissaoController.criar);

// === ROTAS ÉPICO 2: cargo_permissao ===
app.get('/cargos-permissoes', cargoPermissaoController.listar);
app.post('/cargos-permissoes', cargoPermissaoController.criar);


// === ROTAS RELATÓRIO:  ===
app.get('/relatorios/vendas-turno', relatorioController.vendasPorTurno);
app.get('/relatorios/estoque-critico', relatorioController.estoqueCritico);
app.get('/relatorios/extrato-frota', relatorioController.extratoFrota);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`=============================================================`);
  console.log(`🚀 SERVIDOR RODANDO: Teste em rodar apenas o relátorio em si`);
  console.log(`=============================================================`); 
});
