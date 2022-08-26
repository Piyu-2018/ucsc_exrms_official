-- CreateTable
CREATE TABLE `user` (
    `user_id` INTEGER NOT NULL,
    `name` VARCHAR(100) NOT NULL,
    `user_name` VARCHAR(100) NOT NULL,
    `password` VARCHAR(100) NOT NULL,
    `email` VARCHAR(100) NOT NULL,

    PRIMARY KEY (`user_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
