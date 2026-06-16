CREATE TABLE produto (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,

    subcategoria_produto_id BIGINT NOT NULL,

    nome VARCHAR(150) NOT NULL,

    codigo VARCHAR(50) UNIQUE,

    descricao TEXT,

    estoque_atual NUMERIC(10,3) NOT NULL DEFAULT 0,

    estoque_minimo NUMERIC(10,3) NOT NULL DEFAULT 0,

    ativo BOOLEAN NOT NULL DEFAULT TRUE,

    unidade_medida VARCHAR(20) NOT NULL,

    CONSTRAINT fk_produto_subcategoria
        FOREIGN KEY (subcategoria_produto_id)
);