CREATE TABLE veiculo (
    id SERIAL PRIMARY KEY,
    modelo_veiculo_id INT NOT NULL REFERENCES modelo_veiculo(id),
    placa VARCHAR(10) UNIQUE NOT NULL,
    ano INT
);