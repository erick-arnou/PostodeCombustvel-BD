CREATE TABLE bico (
    id BIGSERIAL PRIMARY KEY,

    bomba_id BIGINT NOT NULL,

    tanque_id BIGINT NOT NULL,

    odometro_abastecimento NUMERIC(12,3) NOT NULL,
);