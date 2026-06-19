# Dicionário de Dados

## Épico 1: Infraestrutura e Operação

### Tipo_Combustivel
Tabela responsável por armazenar os tipos de combustíveis cadastrados no sistema, como gasolina comum, gasolina aditivada, etanol e diesel. Serve como referência para os tanques e para o histórico de preços.

### Historico_Preco_Combustivel
Tabela responsável por registrar o histórico temporal dos preços de cada tipo de combustível. Armazena o valor do preço, a data de início da vigência e a data de fim da vigência, permitindo rastrear alterações de preço ao longo do tempo.

### Tanque
Tabela responsável por armazenar os dados dos tanques subterrâneos do posto. Cada tanque possui capacidade, volume atual e está vinculado a apenas um tipo de combustível.

### Bomba
Tabela responsável por identificar as bombas de abastecimento existentes no posto. Cada bomba pode possuir vários bicos associados.

### Bico
Tabela responsável por representar os bicos de abastecimento ligados às bombas. Cada bico pertence a uma bomba, está conectado a um único tanque e possui um odômetro/encerrante para controle dos litros dispensados.

### Manutencao_Bomba
Tabela responsável por registrar as manutenções realizadas em cada bomba. Armazena a data da manutenção, a próxima data prevista e a descrição do serviço executado.

### Afericao_Bico
Tabela responsável por registrar as aferições técnicas realizadas em cada bico. Armazena a data da última aferição, a próxima data prevista e a descrição do procedimento realizado.

### Abastecimento
Tabela responsável por registrar cada abastecimento realizado no posto. Armazena o bico utilizado, a quantidade de litros, a data e hora do abastecimento e os valores envolvidos na operação.

---

## Épico 2: Recursos Humanos e Controle de Turnos

### Funcionario
Tabela responsável por armazenar os dados dos funcionários do posto, como nome, cargo, CPF, telefone, status e data de admissão.

### Turno
Tabela responsável por registrar os turnos de trabalho disponíveis no posto, como manhã, tarde, noite ou madrugada, com horário de início e fim.

### Escala_Funcionario
Tabela responsável por vincular funcionários aos seus respectivos turnos de trabalho, registrando data, horário e situação da escala.

### Cliente
Tabela responsável por armazenar os dados dos clientes cadastrados, como nome, CPF/CNPJ, telefone, e-mail e endereço.

### Veiculo
Tabela responsável por registrar os veículos vinculados aos clientes, incluindo placa, modelo, marca, ano e tipo de combustível.

### Pagamento
Tabela responsável por registrar os pagamentos realizados nas operações do posto, indicando forma de pagamento, valor, data e status.

---

## Épico 3: Suprimentos, Produtos e Estoque Seco

### Categoria_Produto
Tabela responsável por registrar as categorias principais dos produtos comercializados no posto, armazenando nome e descrição da categoria.

### Subcategoria_Produto
Tabela responsável por registrar as subcategorias vinculadas a uma categoria de produto, permitindo organizar melhor o catálogo.

### Produto
Tabela responsável por armazenar as informações gerais dos produtos vendidos ou controlados em estoque, incluindo nome, descrição, unidade de medida, quantidade em estoque, estoque mínimo e status de ativação.

### Oleo_Lubrificante
Tabela de especialização de produto, responsável por registrar atributos específicos de óleos lubrificantes, como viscosidade, base e aplicação.

### Historico_Preco_Produto
Tabela responsável por registrar o histórico de preços de venda dos produtos, armazenando o valor do preço e as datas de início e fim de vigência.

### Fornecedor
Tabela responsável por armazenar as informações cadastrais dos fornecedores, incluindo dados de identificação e formas de contato.

### Fornecedor_Produto
Tabela associativa responsável por registrar a relação entre fornecedores e produtos, permitindo que um fornecedor forneça vários produtos e que um produto seja fornecido por vários fornecedores. Também pode armazenar o código do produto no fornecedor e o preço da última compra.

### Nota_Fiscal_Entrada
Tabela responsável por registrar o cabeçalho das notas fiscais de entrada, contendo informações como fornecedor, número da nota, série, data de emissão, data de entrada e valor total.

### Item_Nota_Fiscal
Tabela responsável por registrar os itens de cada nota fiscal de entrada, incluindo o produto comprado, quantidade, valor unitário e valor total do item.

---

## Épico 4: Clientes Corporativos e Frotas

### Cliente
Tabela responsável por registrar os clientes do posto, sejam pessoas físicas ou jurídicas, armazenando informações gerais, limite de crédito e dia de vencimento para faturamento.

### Cliente_Pessoa_Fisica
Tabela responsável por armazenar os dados específicos dos clientes pessoa física, como CPF, RG e demais informações pessoais.

### Cliente_Pessoa_Juridica
Tabela responsável por armazenar os dados específicos dos clientes pessoa jurídica, como CNPJ, razão social, nome fantasia e inscrição estadual.

### Frota_Cliente
Tabela responsável por relacionar clientes aos seus veículos, permitindo o gerenciamento de frotas. Também registra a situação, indicando se a frota está ativa ou inativa.

### Veiculo
Tabela responsável por armazenar as informações dos veículos cadastrados, como placa, ano, cor e demais características relevantes.

### Marca_Veiculo
Tabela responsável por registrar as marcas dos veículos cadastrados no sistema.

### Modelo_Veiculo
Tabela responsável por registrar os modelos de veículos e associá-los às respectivas marcas.

### Veiculo_Combustivel_Permitido
Tabela associativa responsável por relacionar veículos aos tipos de combustível que podem ser utilizados por eles, permitindo que um veículo seja compatível com um ou mais combustíveis.

---

## Épico 5: Vendas e Pagamentos

### Venda
Tabela responsável por registrar cada venda realizada no posto, armazenando informações como funcionário responsável, cliente, veículo associado, data da venda e valor total da transação.

### Item_Venda_Combustivel
Tabela responsável por registrar os combustíveis vendidos em uma venda. Armazena a venda associada, o bico utilizado, o tanque de origem, o tipo de combustível, a quantidade abastecida, o valor unitário e o valor total do abastecimento.

### Item_Venda_Produto
Tabela responsável por registrar os produtos vendidos em uma venda. Armazena o produto comercializado, a quantidade vendida, o valor unitário e o valor total do item.

### Pagamento_Venda
Tabela responsável por registrar os pagamentos realizados para uma venda. Permite que uma mesma venda seja paga utilizando uma ou mais formas de pagamento, armazenando o valor pago em cada uma delas.

### Forma_Pagamento
Tabela responsável por registrar as formas de pagamento aceitas pelo posto, como dinheiro, cartão de crédito, cartão de débito e PIX, além de indicar se a forma de pagamento está ativa para utilização.