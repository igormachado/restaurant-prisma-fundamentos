-- CreateTable
CREATE TABLE "clients" (
    "id" TEXT NOT NULL,
    "table_number" INTEGER NOT NULL,

    CONSTRAINT "clients_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "waiter" (
    "id" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "waiter_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "orders" (
    "id" TEXT NOT NULL,
    "id_clients" TEXT NOT NULL,
    "id_waiter" TEXT,
    "food" TEXT NOT NULL,
    "drink" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "end_at" TIMESTAMP(3),

    CONSTRAINT "orders_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "clients_table_number_key" ON "clients"("table_number");

-- CreateIndex
CREATE UNIQUE INDEX "waiter_username_key" ON "waiter"("username");

-- AddForeignKey
ALTER TABLE "orders" ADD CONSTRAINT "orders_id_clients_fkey" FOREIGN KEY ("id_clients") REFERENCES "clients"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "orders" ADD CONSTRAINT "orders_id_waiter_fkey" FOREIGN KEY ("id_waiter") REFERENCES "waiter"("id") ON DELETE SET NULL ON UPDATE CASCADE;
