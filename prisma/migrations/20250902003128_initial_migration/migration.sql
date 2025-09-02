-- CreateTable
CREATE TABLE "public"."users" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "nombre" TEXT,
    "apellido" TEXT,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."users_articulos" (
    "user_id" INTEGER NOT NULL,
    "articulo_id" INTEGER NOT NULL,

    CONSTRAINT "users_articulos_pkey" PRIMARY KEY ("user_id","articulo_id")
);

-- CreateTable
CREATE TABLE "public"."articulo" (
    "id" SERIAL NOT NULL,
    "codigo" INTEGER,
    "descripcion" TEXT,
    "cant_piezas" INTEGER,
    "plano" TEXT,
    "precio" INTEGER,
    "cte_ganancia" INTEGER,

    CONSTRAINT "articulo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."articulo_piezas" (
    "articulo_id" INTEGER NOT NULL,
    "pieza_id" INTEGER NOT NULL,

    CONSTRAINT "articulo_piezas_pkey" PRIMARY KEY ("articulo_id","pieza_id")
);

-- CreateTable
CREATE TABLE "public"."pieza" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT,
    "precio_mat_prima" INTEGER,
    "plano_pleg_DWG" TEXT,
    "plano_pleg_SOLID" TEXT,
    "plano_laser_DXF" TEXT,
    "cte_ganancia" INTEGER,

    CONSTRAINT "pieza_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_id_key" ON "public"."users"("id");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "public"."users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "articulo_id_key" ON "public"."articulo"("id");

-- CreateIndex
CREATE UNIQUE INDEX "pieza_id_key" ON "public"."pieza"("id");

-- AddForeignKey
ALTER TABLE "public"."users_articulos" ADD CONSTRAINT "users_articulos_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."users_articulos" ADD CONSTRAINT "users_articulos_articulo_id_fkey" FOREIGN KEY ("articulo_id") REFERENCES "public"."articulo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."articulo_piezas" ADD CONSTRAINT "articulo_piezas_articulo_id_fkey" FOREIGN KEY ("articulo_id") REFERENCES "public"."articulo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."articulo_piezas" ADD CONSTRAINT "articulo_piezas_pieza_id_fkey" FOREIGN KEY ("pieza_id") REFERENCES "public"."pieza"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
