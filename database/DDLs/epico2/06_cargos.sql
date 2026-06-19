CREATE TABLE cargos (
    id_cargo INT NOT NULL,
    nome CHAR(200) NOT NULL,
    descricao CHAR(400) NOT NULL,
    CONSTRAINT pk_cargos PRIMARY KEY (id_cargo)
);
