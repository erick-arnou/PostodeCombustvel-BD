CREATE TABLE bairro (
    id_bair INT NOT NULL,
    nome VARCHAR(200) NOT NULL,
    cep CHAR(9) NOT NULL,
    id_cid INT NOT NULL,
    CONSTRAINT pk_bairro PRIMARY KEY (id_bair),
    CONSTRAINT fk_bairro_cidade FOREIGN KEY (id_cid) REFERENCES cidade (id_cid)
);
