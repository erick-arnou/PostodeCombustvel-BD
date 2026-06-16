CREATE TABLE fornecedor_produto (
    fornecedor_id BIGINT NOT NULL,

    produto_id BIGINT NOT NULL,

    codigo_produto_fornecedor VARCHAR(100),

    preco_ultima_compra NUMERIC(10,2),

    PRIMARY KEY (fornecedor_id, produto_id),

    CONSTRAINT fk_fornecedor_produto_fornecedor
        FOREIGN KEY (fornecedor_id)

    CONSTRAINT fk_fornecedor_produto_produto
        FOREIGN KEY (produto_id)
);