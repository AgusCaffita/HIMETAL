/*
  Warnings:

  - You are about to drop the `users_articulos` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "public"."users_articulos" DROP CONSTRAINT "users_articulos_articulo_id_fkey";

-- DropForeignKey
ALTER TABLE "public"."users_articulos" DROP CONSTRAINT "users_articulos_user_id_fkey";

-- DropTable
DROP TABLE "public"."users_articulos";

-- CreateTable
CREATE TABLE "public"."users_pedidos" (
    "user_id" INTEGER NOT NULL,
    "pedido_id" INTEGER NOT NULL,

    CONSTRAINT "users_pedidos_pkey" PRIMARY KEY ("user_id","pedido_id")
);

-- CreateTable
CREATE TABLE "public"."pedido" (
    "id" SERIAL NOT NULL,
    "codigo" TEXT,
    "presupuesto" INTEGER,
    "estado" TEXT NOT NULL DEFAULT 'Pendiente',

    CONSTRAINT "pedido_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."pedido_articulos" (
    "pedido_id" INTEGER NOT NULL,
    "articulo_id" INTEGER NOT NULL,

    CONSTRAINT "pedido_articulos_pkey" PRIMARY KEY ("pedido_id","articulo_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "pedido_id_key" ON "public"."pedido"("id");

-- AddForeignKey
ALTER TABLE "public"."users_pedidos" ADD CONSTRAINT "users_pedidos_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."users_pedidos" ADD CONSTRAINT "users_pedidos_pedido_id_fkey" FOREIGN KEY ("pedido_id") REFERENCES "public"."pedido"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."pedido_articulos" ADD CONSTRAINT "pedido_articulos_pedido_id_fkey" FOREIGN KEY ("pedido_id") REFERENCES "public"."pedido"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."pedido_articulos" ADD CONSTRAINT "pedido_articulos_articulo_id_fkey" FOREIGN KEY ("articulo_id") REFERENCES "public"."articulo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
