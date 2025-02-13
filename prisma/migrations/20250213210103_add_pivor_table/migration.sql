-- CreateTable
CREATE TABLE `school_address` (
    `id_school` INTEGER NOT NULL,
    `id_address` INTEGER NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `uptade_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id_school`, `id_address`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `school_address` ADD CONSTRAINT `school_address_id_address_fkey` FOREIGN KEY (`id_address`) REFERENCES `address`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `school_address` ADD CONSTRAINT `school_address_id_school_fkey` FOREIGN KEY (`id_school`) REFERENCES `school`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
