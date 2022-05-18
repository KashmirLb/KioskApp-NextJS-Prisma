/*
  Warnings:

  - You are about to drop the column `image` on the `producto` table. All the data in the column will be lost.
  - Added the required column `imagen` to the `Producto` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `producto` DROP COLUMN `image`,
    ADD COLUMN `imagen` VARCHAR(191) NOT NULL;
