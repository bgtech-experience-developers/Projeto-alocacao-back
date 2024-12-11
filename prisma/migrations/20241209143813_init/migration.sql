/*
  Warnings:

  - You are about to drop the column `Roles` on the `admin` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `admin` DROP COLUMN `Roles`,
    ADD COLUMN `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `uptade_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

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
    `uptade_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Admin_roles` ADD CONSTRAINT `Admin_roles_adminID_fkey` FOREIGN KEY (`adminID`) REFERENCES `admin`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Admin_roles` ADD CONSTRAINT `Admin_roles_rolesID_fkey` FOREIGN KEY (`rolesID`) REFERENCES `roles`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
