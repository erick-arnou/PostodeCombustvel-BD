CREATE TABLE fornecedor (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,

    nome VARCHAR(150) NOT NULL,

    cnpj VARCHAR(14) UNIQUE,

    telefone VARCHAR(20),

    email VARCHAR(150),

    endereco TEXT
);