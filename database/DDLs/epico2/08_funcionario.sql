CREATE TABLE funcionario (
    id_func INT NOT NULL,
    nome CHAR(200) NOT NULL,
    id_cargo INT NOT NULL,
    id_end INT NOT NULL,
    CONSTRAINT pk_funcionario PRIMARY KEY (id_func),
    CONSTRAINT fk_func_cargo FOREIGN KEY (id_cargo) REFERENCES cargos (id_cargo),
    CONSTRAINT fk_func_logradouro FOREIGN KEY (id_end) REFERENCES logradouro (id_end)
);
