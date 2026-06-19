CREATE TABLE cliente_pessoa_fisica (
    cliente_id INT PRIMARY KEY REFERENCES cliente(id) ON DELETE CASCADE,
    cpf VARCHAR(14) UNIQUE NOT NULL
);