-- AlterTable
ALTER TABLE "Colaborador" ADD COLUMN     "escolaridade" TEXT,
ADD COLUMN     "nacionalidade" TEXT,
ADD COLUMN     "telefone" INTEGER;

-- CreateTable
CREATE TABLE "Endereco" (
    "id" SERIAL NOT NULL,
    "endereco" TEXT NOT NULL,
    "bairro" TEXT NOT NULL,
    "cidade" TEXT NOT NULL,
    "estado" TEXT NOT NULL,
    "complemento" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Endereco_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Endereco" ADD CONSTRAINT "Endereco_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Colaborador"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
