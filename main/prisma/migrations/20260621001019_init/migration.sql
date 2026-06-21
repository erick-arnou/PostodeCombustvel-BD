-- CreateTable
CREATE TABLE "categoria_produto" (
    "id" SERIAL NOT NULL,
    "nome" VARCHAR(100) NOT NULL,
    "descricao" TEXT,

    CONSTRAINT "categoria_produto_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "subcategoria_produto" (
    "id" SERIAL NOT NULL,
    "categoria_produto_id" INTEGER NOT NULL,
    "nome" VARCHAR(100) NOT NULL,
    "descricao" TEXT,

    CONSTRAINT "subcategoria_produto_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "produto" (
    "id" SERIAL NOT NULL,
    "subcategoria_produto_id" INTEGER NOT NULL,
    "nome" VARCHAR(150) NOT NULL,
    "codigo" VARCHAR(50) NOT NULL,
    "descricao" TEXT,
    "estoque_atual" DECIMAL(10,2) NOT NULL,
    "estoque_minimo" DECIMAL(10,2) NOT NULL,
    "ativo" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "produto_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "oleo_lubrificante" (
    "produto_id" INTEGER NOT NULL,
    "viscosidade" VARCHAR(20) NOT NULL,
    "base" VARCHAR(50) NOT NULL,
    "aplicacao" VARCHAR(100) NOT NULL,

    CONSTRAINT "oleo_lubrificante_pkey" PRIMARY KEY ("produto_id")
);

-- CreateTable
CREATE TABLE "historico_preco_produto" (
    "id" SERIAL NOT NULL,
    "produto_id" INTEGER NOT NULL,
    "preco_venda" DECIMAL(10,2) NOT NULL,
    "ativo" BOOLEAN NOT NULL DEFAULT true,
    "data_inicio" DATE NOT NULL,
    "data_fim" DATE,

    CONSTRAINT "historico_preco_produto_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "venda" (
    "id" SERIAL NOT NULL,
    "id_escala" INTEGER NOT NULL,
    "id_cliente" INTEGER,
    "id_veiculo" INTEGER,
    "data_hora" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "valor_total" DECIMAL(10,2) NOT NULL,
    "status" VARCHAR(20) NOT NULL,

    CONSTRAINT "venda_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "item_venda_combustivel" (
    "id" SERIAL NOT NULL,
    "id_venda" INTEGER NOT NULL,
    "id_bico" BIGINT NOT NULL,
    "id_tanque" BIGINT NOT NULL,
    "id_tipo_combustivel" BIGINT NOT NULL,
    "litros" DECIMAL(10,3) NOT NULL,
    "valor_unitario" DECIMAL(10,2) NOT NULL,
    "valor_total" DECIMAL(10,2) NOT NULL,

    CONSTRAINT "item_venda_combustivel_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "item_venda_produto" (
    "id" SERIAL NOT NULL,
    "id_venda" INTEGER NOT NULL,
    "id_produto" INTEGER NOT NULL,
    "quantidade" DECIMAL(10,2) NOT NULL,
    "valor_unitario" DECIMAL(10,2) NOT NULL,
    "valor_total" DECIMAL(10,2) NOT NULL,

    CONSTRAINT "item_venda_produto_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "categoria_produto_nome_key" ON "categoria_produto"("nome");

-- CreateIndex
CREATE UNIQUE INDEX "produto_codigo_key" ON "produto"("codigo");

-- AddForeignKey
ALTER TABLE "subcategoria_produto" ADD CONSTRAINT "subcategoria_produto_categoria_produto_id_fkey" FOREIGN KEY ("categoria_produto_id") REFERENCES "categoria_produto"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "produto" ADD CONSTRAINT "produto_subcategoria_produto_id_fkey" FOREIGN KEY ("subcategoria_produto_id") REFERENCES "subcategoria_produto"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "oleo_lubrificante" ADD CONSTRAINT "oleo_lubrificante_produto_id_fkey" FOREIGN KEY ("produto_id") REFERENCES "produto"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "historico_preco_produto" ADD CONSTRAINT "historico_preco_produto_produto_id_fkey" FOREIGN KEY ("produto_id") REFERENCES "produto"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "venda" ADD CONSTRAINT "venda_id_escala_fkey" FOREIGN KEY ("id_escala") REFERENCES "escala_trabalho"("id_escala") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "venda" ADD CONSTRAINT "venda_id_cliente_fkey" FOREIGN KEY ("id_cliente") REFERENCES "cliente"("id_cliente") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "venda" ADD CONSTRAINT "venda_id_veiculo_fkey" FOREIGN KEY ("id_veiculo") REFERENCES "veiculo"("id_veiculo") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "item_venda_combustivel" ADD CONSTRAINT "item_venda_combustivel_id_venda_fkey" FOREIGN KEY ("id_venda") REFERENCES "venda"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "item_venda_produto" ADD CONSTRAINT "item_venda_produto_id_venda_fkey" FOREIGN KEY ("id_venda") REFERENCES "venda"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "item_venda_produto" ADD CONSTRAINT "item_venda_produto_id_produto_fkey" FOREIGN KEY ("id_produto") REFERENCES "produto"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
