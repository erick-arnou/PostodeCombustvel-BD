CREATE TABLE historico_preco_produto (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,

    produto_id BIGINT NOT NULL,

    preco_venda NUMERIC(10,2) NOT NULL,

    data_inicio DATE NOT NULL,

    data_fim DATE,

    CONSTRAINT fk_historico_preco_produto
        FOREIGN KEY (produto_id)
);