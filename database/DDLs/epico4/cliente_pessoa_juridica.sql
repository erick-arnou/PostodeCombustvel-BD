CREATE TABLE cliente_pessoa_juridica (
    cliente_id INT PRIMARY KEY REFERENCES cliente(id) ON DELETE CASCADE,
    cnpj VARCHAR(18) UNIQUE NOT NULL,
    razao_social VARCHAR(255) NOT NULL
);