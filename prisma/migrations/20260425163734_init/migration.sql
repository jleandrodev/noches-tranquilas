-- CreateEnum
CREATE TYPE "FaixaIdade" AS ENUM ('ZERO_3', 'QUATRO_6', 'SEIS_9', 'NOVE_12', 'UM_MAIS');

-- CreateEnum
CREATE TYPE "StatusAssinatura" AS ENUM ('ATIVA', 'CANCELADA', 'EXPIRADA');

-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "criadoEm" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "bebes" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "nome" TEXT,
    "faixaIdade" "FaixaIdade" NOT NULL,
    "criadoEm" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "bebes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "assinaturas" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "status" "StatusAssinatura" NOT NULL DEFAULT 'ATIVA',
    "kiwifyOrderId" TEXT,
    "expiraEm" TIMESTAMP(3),
    "criadoEm" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "atualizadoEm" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "assinaturas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "progressos" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "data" DATE NOT NULL,
    "semana" INTEGER NOT NULL,
    "tarefaIds" TEXT[],

    CONSTRAINT "progressos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "entradas_diario" (
    "id" TEXT NOT NULL,
    "bebeId" TEXT NOT NULL,
    "data" DATE NOT NULL,
    "horaDormir" TEXT,
    "horaAcordar" TEXT,
    "despertares" INTEGER NOT NULL DEFAULT 0,
    "notas" TEXT,
    "criadoEm" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "entradas_diario_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "bebes_userId_key" ON "bebes"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "assinaturas_userId_key" ON "assinaturas"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "progressos_userId_data_key" ON "progressos"("userId", "data");

-- CreateIndex
CREATE UNIQUE INDEX "entradas_diario_bebeId_data_key" ON "entradas_diario"("bebeId", "data");

-- AddForeignKey
ALTER TABLE "bebes" ADD CONSTRAINT "bebes_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "assinaturas" ADD CONSTRAINT "assinaturas_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "progressos" ADD CONSTRAINT "progressos_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "entradas_diario" ADD CONSTRAINT "entradas_diario_bebeId_fkey" FOREIGN KEY ("bebeId") REFERENCES "bebes"("id") ON DELETE CASCADE ON UPDATE CASCADE;
