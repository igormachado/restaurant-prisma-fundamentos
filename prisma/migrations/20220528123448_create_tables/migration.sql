/*
  Warnings:

  - Made the column `id_waiter` on table `orders` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "orders" DROP CONSTRAINT "orders_id_waiter_fkey";

-- AlterTable
ALTER TABLE "orders" ALTER COLUMN "id_waiter" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "orders" ADD CONSTRAINT "orders_id_waiter_fkey" FOREIGN KEY ("id_waiter") REFERENCES "waiter"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
