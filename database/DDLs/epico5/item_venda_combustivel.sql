CREATE TABLE item_venda_combustivel (
    id SERIAL PRIMARY KEY,
    venda_id INT NOT NULL REFERENCES venda(id) ON DELETE CASCADE,
    bico_id INT NOT NULL REFERENCES bico(id), 
    quantidade_litros DECIMAL(12, 3) NOT NULL,
    valor_unitario DECIMAL(10, 2) NOT NULL, 
    valor_total DECIMAL(10, 2) NOT NULL
);