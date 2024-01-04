-- DropForeignKey
ALTER TABLE "orders" DROP CONSTRAINT "orders_id_cooker_fkey";

-- AlterTable
ALTER TABLE "orders" ALTER COLUMN "id_cooker" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "orders" ADD CONSTRAINT "orders_id_cooker_fkey" FOREIGN KEY ("id_cooker") REFERENCES "cooker"("id") ON DELETE SET NULL ON UPDATE CASCADE;
