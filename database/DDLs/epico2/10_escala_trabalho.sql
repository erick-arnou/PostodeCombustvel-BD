CREATE TABLE escala_trabalho (
    id_escala INT NOT NULL,
    id_func INT NOT NULL,
    id_turno INT NOT NULL,
    data DATE NOT NULL,
    CONSTRAINT pk_escala_trabalho  PRIMARY KEY (id_escala),
    CONSTRAINT fk_escala_func FOREIGN KEY (id_func) REFERENCES funcionario (id_func),
    CONSTRAINT fk_escala_turno FOREIGN KEY (id_turno) REFERENCES turno (id_turno)
);
