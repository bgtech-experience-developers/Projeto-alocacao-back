-- CreateTable
CREATE TABLE "admin" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(40) NOT NULL,
    "password" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "admin_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Admin_roles" (
    "adminID" INTEGER NOT NULL,
    "rolesID" INTEGER NOT NULL,

    CONSTRAINT "Admin_roles_pkey" PRIMARY KEY ("adminID","rolesID")
);

-- CreateTable
CREATE TABLE "roles" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "permisson" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "roles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "colaborador_interno" (
    "id" SERIAL NOT NULL,
    "work" VARCHAR(3),
    "type" VARCHAR(20),
    "renova" INTEGER,
    "organ" INTEGER,
    "colaboratorId" INTEGER NOT NULL,
    "position" VARCHAR(60),
    "registration" VARCHAR(20),
    "sector" VARCHAR(60),

    CONSTRAINT "colaborador_interno_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "colaborator_inner_address" (
    "colaborator_innerId" INTEGER NOT NULL,
    "addressId" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "colaborator_inner_address_pkey" PRIMARY KEY ("colaborator_innerId","addressId")
);

-- CreateTable
CREATE TABLE "colaborator" (
    "id" SERIAL NOT NULL,
    "cpf" VARCHAR(11) NOT NULL,
    "pis" VARCHAR(11),
    "rg" VARCHAR(35),
    "name" VARCHAR(75),
    "phone1" VARCHAR(20),
    "cell_phone1" VARCHAR(20),
    "phone2" VARCHAR(15),
    "cell_phone2" VARCHAR(15),
    "cod_bank" TEXT,
    "type" TEXT,
    "sex" INTEGER,
    "education" INTEGER,
    "agency" VARCHAR(20),
    "account" VARCHAR(20),
    "type_account" INTEGER,
    "email" TEXT,
    "variation" INTEGER,
    "status" BOOLEAN NOT NULL DEFAULT false,
    "experience1" VARCHAR(150),
    "experience2" VARCHAR(150),
    "experience3" VARCHAR(150),
    "location_proof" VARCHAR(90),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "colaborator_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "colaborator_external" (
    "id" SERIAL NOT NULL,
    "idColaborator" INTEGER NOT NULL,
    "work" VARCHAR(3),
    "type" VARCHAR(20),
    "organ" INTEGER,
    "renova" INTEGER,
    "registration" VARCHAR(20),
    "sector" VARCHAR(60),
    "position" VARCHAR(60),

    CONSTRAINT "colaborator_external_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "colaborator_external_address" (
    "colaborator_externalId" INTEGER NOT NULL,
    "addressId" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "colaborator_external_address_pkey" PRIMARY KEY ("colaborator_externalId","addressId")
);

-- CreateTable
CREATE TABLE "address" (
    "id" SERIAL NOT NULL,
    "complement" TEXT,
    "street" TEXT,
    "cep" TEXT,
    "neighborhood" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "address_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "admin_email_key" ON "admin"("email");

-- CreateIndex
CREATE UNIQUE INDEX "colaborator_cpf_key" ON "colaborator"("cpf");

-- AddForeignKey
ALTER TABLE "Admin_roles" ADD CONSTRAINT "Admin_roles_adminID_fkey" FOREIGN KEY ("adminID") REFERENCES "admin"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Admin_roles" ADD CONSTRAINT "Admin_roles_rolesID_fkey" FOREIGN KEY ("rolesID") REFERENCES "roles"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "colaborador_interno" ADD CONSTRAINT "colaborador_interno_colaboratorId_fkey" FOREIGN KEY ("colaboratorId") REFERENCES "colaborator"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "colaborator_inner_address" ADD CONSTRAINT "colaborator_inner_address_colaborator_innerId_fkey" FOREIGN KEY ("colaborator_innerId") REFERENCES "colaborador_interno"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "colaborator_inner_address" ADD CONSTRAINT "colaborator_inner_address_addressId_fkey" FOREIGN KEY ("addressId") REFERENCES "address"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "colaborator_external" ADD CONSTRAINT "colaborator_external_idColaborator_fkey" FOREIGN KEY ("idColaborator") REFERENCES "colaborator"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "colaborator_external_address" ADD CONSTRAINT "colaborator_external_address_colaborator_externalId_fkey" FOREIGN KEY ("colaborator_externalId") REFERENCES "colaborator_external"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "colaborator_external_address" ADD CONSTRAINT "colaborator_external_address_addressId_fkey" FOREIGN KEY ("addressId") REFERENCES "address"("id") ON DELETE CASCADE ON UPDATE CASCADE;
