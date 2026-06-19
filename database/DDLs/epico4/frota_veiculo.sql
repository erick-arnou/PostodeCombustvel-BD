CREATE TABLE frota_cliente (
    cliente_id INT NOT NULL REFERENCES cliente(id),
    veiculo_id INT NOT NULL REFERENCES veiculo(id),
    PRIMARY KEY (cliente_id, veiculo_id)
);