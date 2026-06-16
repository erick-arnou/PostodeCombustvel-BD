-- esse script vai rodar no docker-compose pra criar automaticamente todas as DDLs, por épico. revisar.

-- run epico 1
\i /ddl/epico1/tipo_combustivel_id.sql
\i /ddl/epico1/tanque.sql
\i /ddl/epico1/bomba.sql
\i /ddl/epico1/bico.sql
\i /ddl/epico1/afericao_bico.sql
\i /ddl/epico1/abastecimento.sql
\i /ddl/epico1/manutencao_bomba.sql
\i /ddl/epico1/historico_preco_combustivel.sql

-- run epico 2

-- run epico 3
\i /ddl/epico3/categoria_produto.sql
\i /ddl/epico3/subcategoria_produto.sql
\i /ddl/epico3/fornecedor.sql
\i /ddl/epico3/produto.sql
\i /ddl/epico3/fornecedor_produto.sql
\i /ddl/epico3/historico_preco_produto.sql
\i /ddl/epico3/oleo_lubrificante.sql
\i /ddl/epico3/nota_fiscal_entrada.sql
\i /ddl/epico3/item_nota_fiscal.sql

-- run epico 4

-- run epico 5