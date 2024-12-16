-- AlterTable
ALTER TABLE `address` MODIFY `complement` VARCHAR(191) NULL,
    MODIFY `street` VARCHAR(191) NULL,
    MODIFY `cep` VARCHAR(191) NULL,
    MODIFY `neighborhood` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `colaborador_interno` MODIFY `work` VARCHAR(3) NULL,
    MODIFY `type` VARCHAR(20) NULL,
    MODIFY `renova` INTEGER NULL,
    MODIFY `organ` INTEGER NULL,
    MODIFY `position` VARCHAR(60) NULL,
    MODIFY `registration` VARCHAR(20) NULL,
    MODIFY `sector` VARCHAR(60) NULL;

-- AlterTable
ALTER TABLE `colaborator` MODIFY `pis` VARCHAR(11) NULL,
    MODIFY `rg` VARCHAR(35) NULL,
    MODIFY `name` VARCHAR(75) NULL,
    MODIFY `phone1` VARCHAR(20) NULL,
    MODIFY `cell_phone1` VARCHAR(20) NULL,
    MODIFY `phone2` VARCHAR(15) NULL,
    MODIFY `cell_phone2` VARCHAR(15) NULL,
    MODIFY `cod_bank` INTEGER NULL,
    MODIFY `sex` INTEGER NULL,
    MODIFY `education` INTEGER NULL,
    MODIFY `agency` VARCHAR(20) NULL,
    MODIFY `account` VARCHAR(20) NULL,
    MODIFY `experience2` VARCHAR(150) NULL,
    MODIFY `experience3` VARCHAR(150) NULL,
    MODIFY `location_proof` VARCHAR(90) NULL;
