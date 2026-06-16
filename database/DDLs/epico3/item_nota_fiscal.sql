CREATE TABLE item_nota_fiscal (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,

    nota_fiscal_entrada_id BIGINT NOT NULL,

    produto_id BIGINT NOT NULL,

    quantidade NUMERIC(10,3) NOT NULL,

    valor_unitario NUMERIC(10,2) NOT NULL,

    valor_total NUMERIC(10,2) NOT NULL,

    CONSTRAINT fk_item_nota
        FOREIGN KEY (nota_fiscal_entrada_id)

    CONSTRAINT fk_item_produto
        FOREIGN KEY (produto_id)
);