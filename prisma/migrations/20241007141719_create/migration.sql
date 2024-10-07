/*
  Warnings:

  - Made the column `escolaridade` on table `Colaborador` required. This step will fail if there are existing NULL values in that column.
  - Made the column `nacionalidade` on table `Colaborador` required. This step will fail if there are existing NULL values in that column.
  - Made the column `telefone` on table `Colaborador` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `cep` to the `Endereco` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Colaborador" ALTER COLUMN "escolaridade" SET NOT NULL,
ALTER COLUMN "nacionalidade" SET NOT NULL,
ALTER COLUMN "telefone" SET NOT NULL;

-- AlterTable
ALTER TABLE "Endereco" ADD COLUMN     "cep" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "Escolas" (
    "id" SERIAL NOT NULL,
    "nomeEscola" TEXT NOT NULL,
    "enderecoEscola" TEXT NOT NULL,
    "qtdSalas" INTEGER NOT NULL,
    "capacidadeEscola" INTEGER NOT NULL,
    "capacidadeSala" INTEGER NOT NULL,
    "alocado" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Escolas_pkey" PRIMARY KEY ("id")
);
