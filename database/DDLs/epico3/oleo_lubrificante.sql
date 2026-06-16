CREATE TABLE oleo_lubrificante (
    produto_id BIGINT PRIMARY KEY,

    viscosidade VARCHAR(50) NOT NULL,

    base VARCHAR(50),

    aplicacao VARCHAR(200),

    CONSTRAINT fk_oleo_produto
        FOREIGN KEY (produto_id)
);