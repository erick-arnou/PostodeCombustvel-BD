-- CreateTable
CREATE TABLE "tipo_combustivel" (
    "id" BIGSERIAL NOT NULL,
    "nome" VARCHAR(100) NOT NULL,

    CONSTRAINT "tipo_combustivel_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "historico_preco_combustivel" (
    "id" BIGSERIAL NOT NULL,
    "preco" DECIMAL(10,2) NOT NULL,
    "data_inicio_preco" DATE NOT NULL,
    "data_fim_preco" DATE,
    "tipo_combustivel_id" BIGINT NOT NULL,

    CONSTRAINT "historico_preco_combustivel_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tanque" (
    "id" BIGSERIAL NOT NULL,
    "tipo_combustivel_id" BIGINT NOT NULL,
    "capacidade_litros" DECIMAL(10,2) NOT NULL,
    "volume_atual_litros" DECIMAL(10,2) NOT NULL,

    CONSTRAINT "tanque_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "bomba" (
    "id" BIGSERIAL NOT NULL,
    "ativa" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "bomba_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "manutencao_bomba" (
    "id" BIGSERIAL NOT NULL,
    "bomba_id" BIGINT NOT NULL,
    "data_ultima_manutencao" DATE NOT NULL,
    "data_prox_manutencao" DATE,
    "descricao" TEXT,

    CONSTRAINT "manutencao_bomba_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "bico" (
    "id" BIGSERIAL NOT NULL,
    "bomba_id" BIGINT NOT NULL,
    "tanque_id" BIGINT NOT NULL,
    "odometro_abastecimento" DECIMAL(12,3) NOT NULL,

    CONSTRAINT "bico_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "afericao_bico" (
    "id" BIGSERIAL NOT NULL,
    "bico_id" BIGINT NOT NULL,
    "data_ultima_afericao" DATE NOT NULL,
    "data_prox_afericao" DATE,
    "descricao" TEXT,

    CONSTRAINT "afericao_bico_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "estado" (
    "id_est" SERIAL NOT NULL,
    "nome" VARCHAR(100) NOT NULL,

    CONSTRAINT "estado_pkey" PRIMARY KEY ("id_est")
);

-- CreateTable
CREATE TABLE "cidade" (
    "id_cid" SERIAL NOT NULL,
    "nome" VARCHAR(100) NOT NULL,
    "id_est" INTEGER NOT NULL,

    CONSTRAINT "cidade_pkey" PRIMARY KEY ("id_cid")
);

-- CreateTable
CREATE TABLE "bairro" (
    "id_bair" SERIAL NOT NULL,
    "nome" VARCHAR(200) NOT NULL,
    "cep" CHAR(9) NOT NULL,
    "id_cid" INTEGER NOT NULL,

    CONSTRAINT "bairro_pkey" PRIMARY KEY ("id_bair")
);

-- CreateTable
CREATE TABLE "logradouro" (
    "id_end" SERIAL NOT NULL,
    "n_rua" VARCHAR(200) NOT NULL,
    "n_casa" VARCHAR(4) NOT NULL,
    "id_bair" INTEGER NOT NULL,
    "id_cid" INTEGER NOT NULL,
    "id_est" INTEGER NOT NULL,

    CONSTRAINT "logradouro_pkey" PRIMARY KEY ("id_end")
);

-- CreateTable
CREATE TABLE "permissao" (
    "id_perm" SERIAL NOT NULL,
    "nome" CHAR(200) NOT NULL,
    "descricao" CHAR(400) NOT NULL,

    CONSTRAINT "permissao_pkey" PRIMARY KEY ("id_perm")
);

-- CreateTable
CREATE TABLE "cargos" (
    "id_cargo" SERIAL NOT NULL,
    "nome" CHAR(200) NOT NULL,
    "descricao" CHAR(400) NOT NULL,

    CONSTRAINT "cargos_pkey" PRIMARY KEY ("id_cargo")
);

-- CreateTable
CREATE TABLE "cargo_permissao" (
    "id_c_perm" SERIAL NOT NULL,
    "id_cargo" INTEGER NOT NULL,
    "id_perm" INTEGER NOT NULL,

    CONSTRAINT "cargo_permissao_pkey" PRIMARY KEY ("id_c_perm")
);

-- CreateTable
CREATE TABLE "funcionario" (
    "id_func" SERIAL NOT NULL,
    "nome" CHAR(200) NOT NULL,
    "id_cargo" INTEGER NOT NULL,
    "id_end" INTEGER NOT NULL,

    CONSTRAINT "funcionario_pkey" PRIMARY KEY ("id_func")
);

-- CreateTable
CREATE TABLE "turno" (
    "id_turno" SERIAL NOT NULL,
    "descricao" VARCHAR(200) NOT NULL,
    "hora_inicio" TIME NOT NULL,
    "hora_fim" TIME NOT NULL,

    CONSTRAINT "turno_pkey" PRIMARY KEY ("id_turno")
);

-- CreateTable
CREATE TABLE "escala_trabalho" (
    "id_escala" SERIAL NOT NULL,
    "id_func" INTEGER NOT NULL,
    "id_turno" INTEGER NOT NULL,
    "data" DATE NOT NULL,

    CONSTRAINT "escala_trabalho_pkey" PRIMARY KEY ("id_escala")
);

-- CreateTable
CREATE TABLE "caixa_turno" (
    "id_caixa" SERIAL NOT NULL,
    "id_escala" INTEGER NOT NULL,
    "saldo_inicial" DECIMAL(10,2) NOT NULL,
    "saldo_final" DECIMAL(10,2),
    "abertura" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "fechamento" TIMESTAMP,
    "quebra" DECIMAL(10,2),

    CONSTRAINT "caixa_turno_pkey" PRIMARY KEY ("id_caixa")
);

-- CreateTable
CREATE TABLE "cliente" (
    "id_cliente" SERIAL NOT NULL,
    "nome" VARCHAR(200) NOT NULL,
    "cpf_cnpj" VARCHAR(18) NOT NULL,
    "telefone" VARCHAR(20),
    "email" VARCHAR(150),
    "id_end" INTEGER NOT NULL,

    CONSTRAINT "cliente_pkey" PRIMARY KEY ("id_cliente")
);

-- CreateTable
CREATE TABLE "veiculo" (
    "id_veiculo" SERIAL NOT NULL,
    "placa" VARCHAR(10) NOT NULL,
    "modelo" VARCHAR(100) NOT NULL,
    "marca" VARCHAR(100) NOT NULL,
    "ano" INTEGER NOT NULL,
    "tipo_combustivel" VARCHAR(50) NOT NULL,
    "id_cliente" INTEGER NOT NULL,

    CONSTRAINT "veiculo_pkey" PRIMARY KEY ("id_veiculo")
);

-- CreateTable
CREATE TABLE "pagamento" (
    "id_pagamento" SERIAL NOT NULL,
    "forma_pagamento" VARCHAR(50) NOT NULL,
    "valor" DECIMAL(10,2) NOT NULL,
    "data" DATE NOT NULL,
    "status" VARCHAR(50) NOT NULL,

    CONSTRAINT "pagamento_pkey" PRIMARY KEY ("id_pagamento")
);

-- CreateIndex
CREATE UNIQUE INDEX "tipo_combustivel_nome_key" ON "tipo_combustivel"("nome");

-- CreateIndex
CREATE UNIQUE INDEX "cliente_cpf_cnpj_key" ON "cliente"("cpf_cnpj");

-- CreateIndex
CREATE UNIQUE INDEX "veiculo_placa_key" ON "veiculo"("placa");

-- AddForeignKey
ALTER TABLE "historico_preco_combustivel" ADD CONSTRAINT "historico_preco_combustivel_tipo_combustivel_id_fkey" FOREIGN KEY ("tipo_combustivel_id") REFERENCES "tipo_combustivel"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tanque" ADD CONSTRAINT "tanque_tipo_combustivel_id_fkey" FOREIGN KEY ("tipo_combustivel_id") REFERENCES "tipo_combustivel"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "manutencao_bomba" ADD CONSTRAINT "manutencao_bomba_bomba_id_fkey" FOREIGN KEY ("bomba_id") REFERENCES "bomba"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "bico" ADD CONSTRAINT "bico_bomba_id_fkey" FOREIGN KEY ("bomba_id") REFERENCES "bomba"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "bico" ADD CONSTRAINT "bico_tanque_id_fkey" FOREIGN KEY ("tanque_id") REFERENCES "tanque"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "afericao_bico" ADD CONSTRAINT "afericao_bico_bico_id_fkey" FOREIGN KEY ("bico_id") REFERENCES "bico"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "cidade" ADD CONSTRAINT "cidade_id_est_fkey" FOREIGN KEY ("id_est") REFERENCES "estado"("id_est") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "bairro" ADD CONSTRAINT "bairro_id_cid_fkey" FOREIGN KEY ("id_cid") REFERENCES "cidade"("id_cid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "logradouro" ADD CONSTRAINT "logradouro_id_bair_fkey" FOREIGN KEY ("id_bair") REFERENCES "bairro"("id_bair") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "logradouro" ADD CONSTRAINT "logradouro_id_cid_fkey" FOREIGN KEY ("id_cid") REFERENCES "cidade"("id_cid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "logradouro" ADD CONSTRAINT "logradouro_id_est_fkey" FOREIGN KEY ("id_est") REFERENCES "estado"("id_est") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "cargo_permissao" ADD CONSTRAINT "cargo_permissao_id_cargo_fkey" FOREIGN KEY ("id_cargo") REFERENCES "cargos"("id_cargo") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "cargo_permissao" ADD CONSTRAINT "cargo_permissao_id_perm_fkey" FOREIGN KEY ("id_perm") REFERENCES "permissao"("id_perm") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "funcionario" ADD CONSTRAINT "funcionario_id_cargo_fkey" FOREIGN KEY ("id_cargo") REFERENCES "cargos"("id_cargo") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "funcionario" ADD CONSTRAINT "funcionario_id_end_fkey" FOREIGN KEY ("id_end") REFERENCES "logradouro"("id_end") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "escala_trabalho" ADD CONSTRAINT "escala_trabalho_id_func_fkey" FOREIGN KEY ("id_func") REFERENCES "funcionario"("id_func") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "escala_trabalho" ADD CONSTRAINT "escala_trabalho_id_turno_fkey" FOREIGN KEY ("id_turno") REFERENCES "turno"("id_turno") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "caixa_turno" ADD CONSTRAINT "caixa_turno_id_escala_fkey" FOREIGN KEY ("id_escala") REFERENCES "escala_trabalho"("id_escala") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "cliente" ADD CONSTRAINT "cliente_id_end_fkey" FOREIGN KEY ("id_end") REFERENCES "logradouro"("id_end") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "veiculo" ADD CONSTRAINT "veiculo_id_cliente_fkey" FOREIGN KEY ("id_cliente") REFERENCES "cliente"("id_cliente") ON DELETE RESTRICT ON UPDATE CASCADE;
