CREATE TABLE manutencao_bomba (
    id BIGSERIAL PRIMARY KEY,

    bomba_id BIGINT NOT NULL,

    data_ultima_manutencao DATE NOT NULL,

    data_prox_manutencao DATE,

    descricao TEXT,
);