CREATE TABLE tanque (
    id BIGSERIAL PRIMARY KEY,

    tipo_combustivel_id BIGINT NOT NULL,

    capacidade_litros NUMERIC(10,2) NOT NULL,

    volume_atual_litros NUMERIC(10,2) NOT NULL,
);