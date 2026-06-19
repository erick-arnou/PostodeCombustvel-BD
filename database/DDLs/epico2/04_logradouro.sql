CREATE TABLE logradouro (
    id_end INT NOT NULL,
    n_rua VARCHAR(200) NOT NULL,
    n_casa VARCHAR(4) NOT NULL,
    id_bair INT NOT NULL,
    id_cid INT NOT NULL,
    id_est INT NOT NULL,
    CONSTRAINT pk_logradouro PRIMARY KEY (id_end),
    CONSTRAINT fk_logradouro_bairro FOREIGN KEY (id_bair) REFERENCES bairro (id_bair),
    CONSTRAINT fk_logradouro_cidade FOREIGN KEY (id_cid) REFERENCES cidade (id_cid),
    CONSTRAINT fk_logradouro_estado FOREIGN KEY (id_est) REFERENCES estado (id_est)
);