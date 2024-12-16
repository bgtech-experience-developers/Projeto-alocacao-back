/*
  Warnings:

  - You are about to drop the column `addressId` on the `colaborador_external` table. All the data in the column will be lost.
  - You are about to alter the column `work` on the `colaborador_external` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(3)`.
  - You are about to alter the column `type` on the `colaborador_external` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(20)`.
  - You are about to alter the column `registration` on the `colaborador_external` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(20)`.
  - You are about to alter the column `sector` on the `colaborador_external` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(60)`.
  - You are about to alter the column `position` on the `colaborador_external` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(60)`.

*/
-- AlterTable
ALTER TABLE `colaborador_external` DROP COLUMN `addressId`,
    ADD COLUMN `organ` INTEGER NULL,
    MODIFY `work` VARCHAR(3) NULL,
    MODIFY `type` VARCHAR(20) NULL,
    MODIFY `registration` VARCHAR(20) NULL,
    MODIFY `sector` VARCHAR(60) NULL,
    MODIFY `position` VARCHAR(60) NULL;
