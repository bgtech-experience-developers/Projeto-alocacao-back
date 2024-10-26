-- CreateTable
CREATE TABLE `Collaborator_Inner` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `cpf` VARCHAR(11) NOT NULL,
    `pis` VARCHAR(11) NOT NULL,
    `rg` VARCHAR(35) NOT NULL,
    `renova` INTEGER NOT NULL,
    `name` VARCHAR(75) NOT NULL,
    `address` VARCHAR(75) NOT NULL,
    `neighborhood` VARCHAR(40) NOT NULL,
    `complement` VARCHAR(40) NULL,
    `cep` VARCHAR(8) NOT NULL,
    `sex` INTEGER NOT NULL,
    `education` INTEGER NOT NULL,
    `phone1` VARCHAR(20) NOT NULL,
    `cell_phone1` VARCHAR(20) NOT NULL,
    `phone2` VARCHAR(15) NOT NULL,
    `cell_phone2` VARCHAR(15) NOT NULL,
    `cod_bank` INTEGER NOT NULL,
    `agency` VARCHAR(20) NOT NULL,
    `account` VARCHAR(20) NOT NULL,
    `type_account` INTEGER NULL,
    `variation` INTEGER NULL,
    `email` VARCHAR(50) NOT NULL,
    `work` VARCHAR(3) NOT NULL,
    `type` VARCHAR(20) NOT NULL,
    `organ` INTEGER NOT NULL,
    `position` VARCHAR(60) NOT NULL,
    `registration` VARCHAR(20) NOT NULL,
    `sector` VARCHAR(60) NOT NULL,
    `experience1` VARCHAR(150) NULL,
    `experience2` VARCHAR(150) NOT NULL,
    `experience3` VARCHAR(150) NOT NULL,
    `location_proof` VARCHAR(90) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `Collaborator_Inner_cpf_key`(`cpf`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;