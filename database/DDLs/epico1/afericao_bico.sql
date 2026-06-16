CREATE TABLE afericao_bico (
    id BIGSERIAL PRIMARY KEY,

    bico_id BIGINT NOT NULL,

    data_ultima_afericao DATE NOT NULL,

    data_prox_afericao DATE,

    descricao TEXT,
);