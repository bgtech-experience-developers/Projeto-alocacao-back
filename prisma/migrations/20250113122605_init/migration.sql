-- CreateTable
CREATE TABLE `admin` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(40) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `admin_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Admin_roles` (
    `adminID` INTEGER NOT NULL,
    `rolesID` INTEGER NOT NULL,

    PRIMARY KEY (`adminID`, `rolesID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `roles` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `permisson` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `colaborador_interno` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `work` VARCHAR(3) NULL,
    `type` VARCHAR(20) NULL,
    `renova` INTEGER NULL,
    `organ` INTEGER NULL,
    `colaboratorId` INTEGER NOT NULL,
    `position` VARCHAR(60) NULL,
    `registration` VARCHAR(20) NULL,
    `sector` VARCHAR(60) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `colaborator_inner_address` (
    `colaborator_innerId` INTEGER NOT NULL,
    `addressId` INTEGER NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`colaborator_innerId`, `addressId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `colaborator` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `cpf` VARCHAR(11) NOT NULL,
    `pis` VARCHAR(11) NULL,
    `rg` VARCHAR(35) NULL,
    `name` VARCHAR(75) NULL,
    `phone1` VARCHAR(20) NULL,
    `cell_phone1` VARCHAR(20) NULL,
    `phone2` VARCHAR(15) NULL,
    `cell_phone2` VARCHAR(15) NULL,
    `cod_bank` VARCHAR(191) NULL,
    `type` VARCHAR(191) NULL,
    `sex` INTEGER NULL,
    `education` INTEGER NULL,
    `agency` VARCHAR(20) NULL,
    `account` VARCHAR(20) NULL,
    `type_account` INTEGER NULL,
    `email` VARCHAR(191) NULL,
    `variation` INTEGER NULL,
    `status` BOOLEAN NOT NULL DEFAULT false,
    `experience1` VARCHAR(150) NULL,
    `experience2` VARCHAR(150) NULL,
    `experience3` VARCHAR(150) NULL,
    `location_proof` VARCHAR(90) NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `colaborator_cpf_key`(`cpf`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `colaborator_external` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `idColaborator` INTEGER NOT NULL,
    `work` VARCHAR(3) NULL,
    `type` VARCHAR(20) NULL,
    `organ` INTEGER NULL,
    `renova` INTEGER NULL,
    `registration` VARCHAR(20) NULL,
    `sector` VARCHAR(60) NULL,
    `position` VARCHAR(60) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `colaborator_external_address` (
    `colaborator_externalId` INTEGER NOT NULL,
    `addressId` INTEGER NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`colaborator_externalId`, `addressId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `address` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `complement` VARCHAR(191) NULL,
    `street` VARCHAR(191) NULL,
    `cep` VARCHAR(191) NULL,
    `neighborhood` VARCHAR(191) NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Admin_roles` ADD CONSTRAINT `Admin_roles_adminID_fkey` FOREIGN KEY (`adminID`) REFERENCES `admin`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Admin_roles` ADD CONSTRAINT `Admin_roles_rolesID_fkey` FOREIGN KEY (`rolesID`) REFERENCES `roles`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `colaborador_interno` ADD CONSTRAINT `colaborador_interno_colaboratorId_fkey` FOREIGN KEY (`colaboratorId`) REFERENCES `colaborator`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `colaborator_inner_address` ADD CONSTRAINT `colaborator_inner_address_colaborator_innerId_fkey` FOREIGN KEY (`colaborator_innerId`) REFERENCES `colaborador_interno`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `colaborator_inner_address` ADD CONSTRAINT `colaborator_inner_address_addressId_fkey` FOREIGN KEY (`addressId`) REFERENCES `address`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `colaborator_external` ADD CONSTRAINT `colaborator_external_idColaborator_fkey` FOREIGN KEY (`idColaborator`) REFERENCES `colaborator`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `colaborator_external_address` ADD CONSTRAINT `colaborator_external_address_colaborator_externalId_fkey` FOREIGN KEY (`colaborator_externalId`) REFERENCES `colaborator_external`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `colaborator_external_address` ADD CONSTRAINT `colaborator_external_address_addressId_fkey` FOREIGN KEY (`addressId`) REFERENCES `address`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
