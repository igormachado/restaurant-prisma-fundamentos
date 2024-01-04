/*
  Warnings:

  - Changed the type of `table_number` on the `clients` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "clients" DROP COLUMN "table_number",
ADD COLUMN     "table_number" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "clients_table_number_key" ON "clients"("table_number");
