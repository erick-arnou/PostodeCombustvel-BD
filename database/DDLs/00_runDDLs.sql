-- esse script vai rodar no docker-compose pra criar automaticamente todas as DDLs, por épico. revisar.

-- run epico 1
\i /docker-entrypoint-initdb.d/epico1/01_tipo_combustivel.sql
\i /docker-entrypoint-initdb.d/epico1/02_historico_preco_combustivel.sql
\i /docker-entrypoint-initdb.d/epico1/03_tanque.sql
\i /docker-entrypoint-initdb.d/epico1/04_bomba.sql
\i /docker-entrypoint-initdb.d/epico1/05_manutencao_bomba.sql
\i /docker-entrypoint-initdb.d/epico1/06_bico.sql
\i /docker-entrypoint-initdb.d/epico1/07_afericao_bico.sql
\i /docker-entrypoint-initdb.d/epico1/08_abastecimento.sql

-- run epico 2

-- run epico 3
\i /docker-entrypoint-initdb.d/epico3/01_categoria_produto.sql
\i /docker-entrypoint-initdb.d/epico3/02_subcategoria_produto.sql
\i /docker-entrypoint-initdb.d/epico3/03_fornecedor.sql
\i /docker-entrypoint-initdb.d/epico3/04_produto.sql
\i /docker-entrypoint-initdb.d/epico3/05_fornecedor_produto.sql
\i /docker-entrypoint-initdb.d/epico3/06_historico_preco_produto.sql
\i /docker-entrypoint-initdb.d/epico3/07_oleo_lubrificante.sql
\i /docker-entrypoint-initdb.d/epico3/08_nota_fiscal_entrada.sql
\i /docker-entrypoint-initdb.d/epico3/09_item_nota_fiscal.sql

-- run epico 4

-- run epico 5