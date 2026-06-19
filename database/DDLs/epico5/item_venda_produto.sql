CREATE TABLE item_venda_produto (
    id SERIAL PRIMARY KEY,
    venda_id INT NOT NULL REFERENCES venda(id) ON DELETE CASCADE,
    produto_id INT NOT NULL, 
    quantidade DECIMAL(10, 3) NOT NULL,
    valor_unitario DECIMAL(10, 2) NOT NULL,
    valor_total DECIMAL(10, 2) NOT NULL
);