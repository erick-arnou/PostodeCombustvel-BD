CREATE TABLE cliente (
    id_cliente INT NOT NULL,
    nome VARCHAR(200) NOT NULL,
    cpf_cnpj VARCHAR(18) NOT NULL,
    telefone VARCHAR(20) NULL,
    email VARCHAR(150) NULL,
    id_end INT NOT NULL,
    CONSTRAINT pk_cliente PRIMARY KEY (id_cliente),
    CONSTRAINT uq_cliente_doc UNIQUE (cpf_cnpj),
    CONSTRAINT fk_cliente_end FOREIGN KEY (id_end) REFERENCES logradouro (id_end)
);
