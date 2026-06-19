CREATE TABLE cidade (
    id_cid  INT NOT NULL,
    nome VARCHAR(100) NOT NULL,
    id_est  INT NOT NULL,
    CONSTRAINT pk_cidade PRIMARY KEY (id_cid),
    CONSTRAINT fk_cidade_estado FOREIGN KEY (id_est) REFERENCES estado (id_est)
);