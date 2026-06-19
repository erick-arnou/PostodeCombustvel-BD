CREATE TABLE caixa_turno (
    id_caixa INT NOT NULL,
    id_escala INT NOT NULL,
    saldo_inicial DECIMAL(10, 2) NOT NULL,
    saldo_final DECIMAL(10, 2) NULL,
    abertura TIMESTAMP NOT NULL,
    fechamento TIMESTAMP NULL,
    quebra DECIMAL(10, 2) NULL,
    CONSTRAINT pk_caixa_turno PRIMARY KEY (id_caixa),
    CONSTRAINT fk_caixa_escala FOREIGN KEY (id_escala) REFERENCES escala_trabalho (id_escala)
);
