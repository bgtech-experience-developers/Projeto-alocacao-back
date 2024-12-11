/*
  Warnings:

  - You are about to drop the `collaborator_inner` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `collaborator_inner`;

-- CreateTable
CREATE TABLE `colaborador_interno` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `work` VARCHAR(3) NOT NULL,
    `type` VARCHAR(20) NOT NULL,
    `renova` INTEGER NOT NULL,
    `organ` INTEGER NOT NULL,
    `colaboratorId` INTEGER NOT NULL,
    `position` VARCHAR(60) NOT NULL,
    `registration` VARCHAR(20) NOT NULL,
    `sector` VARCHAR(60) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `colaborator_inner_address` (
    `colaborator_innerId` INTEGER NOT NULL,
    `addressId` INTEGER NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `uptade_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`colaborator_innerId`, `addressId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `colaborator` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `cpf` VARCHAR(11) NOT NULL,
    `pis` VARCHAR(11) NOT NULL,
    `rg` VARCHAR(35) NOT NULL,
    `name` VARCHAR(75) NOT NULL,
    `phone1` VARCHAR(20) NOT NULL,
    `cell_phone1` VARCHAR(20) NOT NULL,
    `phone2` VARCHAR(15) NOT NULL,
    `cell_phone2` VARCHAR(15) NOT NULL,
    `cod_bank` INTEGER NOT NULL,
    `sex` INTEGER NOT NULL,
    `education` INTEGER NOT NULL,
    `agency` VARCHAR(20) NOT NULL,
    `account` VARCHAR(20) NOT NULL,
    `type_account` INTEGER NULL,
    `variation` INTEGER NULL,
    `experience1` VARCHAR(150) NULL,
    `experience2` VARCHAR(150) NOT NULL,
    `experience3` VARCHAR(150) NOT NULL,
    `location_proof` VARCHAR(90) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `update_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `colaborator_cpf_key`(`cpf`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `colaborator_external` (
    `colaborator_externalId` INTEGER NOT NULL,
    `addressId` INTEGER NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `uptade_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`colaborator_externalId`, `addressId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `address` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `complement` VARCHAR(191) NOT NULL,
    `street` VARCHAR(191) NOT NULL,
    `cep` VARCHAR(191) NOT NULL,
    `neighborhood` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `uptade_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `colaborador_interno` ADD CONSTRAINT `colaborador_interno_colaboratorId_fkey` FOREIGN KEY (`colaboratorId`) REFERENCES `colaborator`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `colaborator_inner_address` ADD CONSTRAINT `colaborator_inner_address_colaborator_innerId_fkey` FOREIGN KEY (`colaborator_innerId`) REFERENCES `colaborador_interno`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `colaborator_inner_address` ADD CONSTRAINT `colaborator_inner_address_addressId_fkey` FOREIGN KEY (`addressId`) REFERENCES `address`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `colaborator_external` ADD CONSTRAINT `colaborator_external_colaborator_externalId_fkey` FOREIGN KEY (`colaborator_externalId`) REFERENCES `colaborator`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `colaborator_external` ADD CONSTRAINT `colaborator_external_addressId_fkey` FOREIGN KEY (`addressId`) REFERENCES `address`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
