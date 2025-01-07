-- CreateTable
CREATE TABLE `school` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name_school` VARCHAR(191) NOT NULL,
    `cnpj` VARCHAR(191) NOT NULL,
    `manager` VARCHAR(191) NOT NULL,
    `manager_email` VARCHAR(191) NOT NULL,
    `phone` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `room` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `floor` VARCHAR(191) NOT NULL,
    `identificator` VARCHAR(191) NOT NULL,
    `ceps` VARCHAR(191) NOT NULL,
    `chair_qtd` INTEGER NOT NULL,
    `chair_type` VARCHAR(191) NOT NULL,
    `schoolId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `schoolAddress` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `cep` VARCHAR(191) NOT NULL,
    `street` VARCHAR(191) NOT NULL,
    `neighborhood` VARCHAR(191) NOT NULL,
    `state` VARCHAR(191) NOT NULL,
    `city` VARCHAR(191) NOT NULL,
    `userId` INTEGER NOT NULL,

    UNIQUE INDEX `schoolAddress_userId_key`(`userId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `room` ADD CONSTRAINT `room_schoolId_fkey` FOREIGN KEY (`schoolId`) REFERENCES `school`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `schoolAddress` ADD CONSTRAINT `schoolAddress_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `school`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
