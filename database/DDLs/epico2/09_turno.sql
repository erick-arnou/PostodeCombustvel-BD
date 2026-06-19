CREATE TABLE turno (
    id_turno INT NOT NULL,
    descricao VARCHAR(200) NOT NULL,
    hora_inicio TIME NOT NULL,
    hora_fim TIME NOT NULL,
    CONSTRAINT pk_turno PRIMARY KEY (id_turno)
);
