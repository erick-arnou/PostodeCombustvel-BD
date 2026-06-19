CREATE TABLE cliente (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    tipo_cliente VARCHAR(2) NOT NULL CHECK (tipo_cliente IN ('PF', 'PJ')),
    limite_credito DECIMAL(10, 2),
    dia_vencimento INT
);