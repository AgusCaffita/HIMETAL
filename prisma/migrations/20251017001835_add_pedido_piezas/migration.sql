-- CreateTable
CREATE TABLE "public"."pedido_piezas" (
    "pedido_id" INTEGER NOT NULL,
    "pieza_id" INTEGER NOT NULL,
    "cantidad" INTEGER NOT NULL DEFAULT 1,

    CONSTRAINT "pedido_piezas_pkey" PRIMARY KEY ("pedido_id","pieza_id")
);

-- AddForeignKey
ALTER TABLE "public"."pedido_piezas" ADD CONSTRAINT "pedido_piezas_pieza_id_fkey" FOREIGN KEY ("pieza_id") REFERENCES "public"."pieza"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."pedido_piezas" ADD CONSTRAINT "pedido_piezas_pedido_id_fkey" FOREIGN KEY ("pedido_id") REFERENCES "public"."pedido"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
