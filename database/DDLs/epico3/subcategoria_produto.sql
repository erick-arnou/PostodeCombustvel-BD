CREATE TABLE subcategoria_produto (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,

    categoria_produto_id BIGINT NOT NULL,

    nome VARCHAR(100) NOT NULL,

    descricao TEXT,

    CONSTRAINT fk_subcategoria_categoria
        FOREIGN KEY (categoria_produto_id)
);