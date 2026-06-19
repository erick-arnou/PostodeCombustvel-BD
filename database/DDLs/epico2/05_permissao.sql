CREATE TABLE permissao (
    id_perm INT NOT NULL,
    nome CHAR(200) NOT NULL,
    descricao CHAR(400) NOT NULL,
    CONSTRAINT pk_permissao PRIMARY KEY (id_perm)
);
