/*
  Warnings:

  - You are about to drop the column `id_clients` on the `orders` table. All the data in the column will be lost.
  - You are about to drop the `clients` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `id_cooker` to the `orders` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "orders" DROP CONSTRAINT "orders_id_clients_fkey";

-- AlterTable
ALTER TABLE "orders" DROP COLUMN "id_clients",
ADD COLUMN     "id_cooker" TEXT NOT NULL;

-- DropTable
DROP TABLE "clients";

-- CreateTable
CREATE TABLE "cooker" (
    "id" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "cooker_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "cooker_username_key" ON "cooker"("username");

-- AddForeignKey
ALTER TABLE "orders" ADD CONSTRAINT "orders_id_cooker_fkey" FOREIGN KEY ("id_cooker") REFERENCES "cooker"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
