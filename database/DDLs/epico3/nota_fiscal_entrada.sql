CREATE TABLE nota_fiscal_entrada (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,

    fornecedor_id BIGINT NOT NULL,

    numero BIGINT NOT NULL,

    serie VARCHAR(20),

    data_emissao DATE NOT NULL,

    data_entrada DATE NOT NULL,

    valor_total NUMERIC(10,2) NOT NULL,

    CONSTRAINT fk_nota_fiscal_fornecedor
        FOREIGN KEY (fornecedor_id)
);