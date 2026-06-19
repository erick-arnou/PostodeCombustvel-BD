CREATE TABLE historico_preco_combustivel (
    id BIGSERIAL PRIMARY KEY,

    preco NUMERIC(10,2) NOT NULL,

    data_inicio_preco DATE NOT NULL,

    data_fim_preco DATE,

    tipo_combustivel_id BIGINT NOT NULL,

    CONSTRAINT fk_historico_tipo_combustivel
        FOREIGN KEY (tipo_combustivel_id)
);