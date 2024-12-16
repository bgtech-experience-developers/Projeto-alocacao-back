/*
  Warnings:

  - You are about to drop the `colaborator_external` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `colaborator_external` DROP FOREIGN KEY `colaborator_external_addressId_fkey`;

-- DropForeignKey
ALTER TABLE `colaborator_external` DROP FOREIGN KEY `colaborator_external_colaborator_externalId_fkey`;

-- DropTable
DROP TABLE `colaborator_external`;

-- CreateTable
CREATE TABLE `colaborador_external` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `colaboratorId` INTEGER NOT NULL,
    `work` VARCHAR(191) NULL,
    `type` VARCHAR(191) NULL,
    `renova` INTEGER NULL,
    `registration` VARCHAR(191) NULL,
    `sector` VARCHAR(191) NULL,
    `position` VARCHAR(191) NULL,
    `addressId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `colaborador_external_adress` (
    `colaborator_externalId` INTEGER NOT NULL,
    `adressId` INTEGER NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`colaborator_externalId`, `adressId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `colaborador_external` ADD CONSTRAINT `colaborador_external_colaboratorId_fkey` FOREIGN KEY (`colaboratorId`) REFERENCES `colaborator`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `colaborador_external_adress` ADD CONSTRAINT `colaborador_external_adress_colaborator_externalId_fkey` FOREIGN KEY (`colaborator_externalId`) REFERENCES `colaborador_external`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `colaborador_external_adress` ADD CONSTRAINT `colaborador_external_adress_adressId_fkey` FOREIGN KEY (`adressId`) REFERENCES `address`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
