CREATE TABLE modelo_veiculo (
    id SERIAL PRIMARY KEY,
    marca_veiculo_id INT NOT NULL REFERENCES marca_veiculo(id),
    nome VARCHAR(100) NOT NULL
);