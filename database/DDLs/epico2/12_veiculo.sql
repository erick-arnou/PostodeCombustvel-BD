CREATE TABLE veiculo (
    id_veiculo INT NOT NULL,
    placa VARCHAR(10) NOT NULL,
    modelo VARCHAR(100) NOT NULL,
    marca VARCHAR(100) NOT NULL,
    ano INT NOT NULL,
    tipo_combustivel VARCHAR(50) NOT NULL,
    id_cliente INT NOT NULL,
    CONSTRAINT pk_veiculo PRIMARY KEY (id_veiculo),
    CONSTRAINT uq_veiculo_placa UNIQUE (placa),
    CONSTRAINT fk_veiculo_cliente FOREIGN KEY (id_cliente) REFERENCES cliente (id_cliente)
);
