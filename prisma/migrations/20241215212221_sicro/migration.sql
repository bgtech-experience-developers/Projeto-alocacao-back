-- DropForeignKey
ALTER TABLE `colaborador_interno` DROP FOREIGN KEY `colaborador_interno_colaboratorId_fkey`;

-- DropForeignKey
ALTER TABLE `colaborator_external` DROP FOREIGN KEY `colaborator_external_addressId_fkey`;

-- DropForeignKey
ALTER TABLE `colaborator_external` DROP FOREIGN KEY `colaborator_external_colaborator_externalId_fkey`;

-- DropForeignKey
ALTER TABLE `colaborator_inner_address` DROP FOREIGN KEY `colaborator_inner_address_addressId_fkey`;

-- DropForeignKey
ALTER TABLE `colaborator_inner_address` DROP FOREIGN KEY `colaborator_inner_address_colaborator_innerId_fkey`;

-- AddForeignKey
ALTER TABLE `colaborador_interno` ADD CONSTRAINT `colaborador_interno_colaboratorId_fkey` FOREIGN KEY (`colaboratorId`) REFERENCES `colaborator`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `colaborator_inner_address` ADD CONSTRAINT `colaborator_inner_address_colaborator_innerId_fkey` FOREIGN KEY (`colaborator_innerId`) REFERENCES `colaborador_interno`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `colaborator_inner_address` ADD CONSTRAINT `colaborator_inner_address_addressId_fkey` FOREIGN KEY (`addressId`) REFERENCES `address`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `colaborator_external` ADD CONSTRAINT `colaborator_external_colaborator_externalId_fkey` FOREIGN KEY (`colaborator_externalId`) REFERENCES `colaborator`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `colaborator_external` ADD CONSTRAINT `colaborator_external_addressId_fkey` FOREIGN KEY (`addressId`) REFERENCES `address`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
