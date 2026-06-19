CREATE TABLE veiculo_combustivel_permitido (
    veiculo_id INT NOT NULL REFERENCES veiculo(id),
    tipo_combustivel_id INT NOT NULL REFERENCES tipo_combustivel(id),
    PRIMARY KEY (veiculo_id, tipo_combustivel_id)
);