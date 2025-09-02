/*
  Warnings:

  - You are about to drop the column `plano` on the `articulo` table. All the data in the column will be lost.
  - You are about to drop the column `plano_laser_DXF` on the `pieza` table. All the data in the column will be lost.
  - You are about to drop the column `plano_pleg_DWG` on the `pieza` table. All the data in the column will be lost.
  - You are about to drop the column `plano_pleg_SOLID` on the `pieza` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "public"."articulo" DROP COLUMN "plano",
ADD COLUMN     "plano_file" TEXT;

-- AlterTable
ALTER TABLE "public"."pieza" DROP COLUMN "plano_laser_DXF",
DROP COLUMN "plano_pleg_DWG",
DROP COLUMN "plano_pleg_SOLID",
ADD COLUMN     "plano_laser_DXF_file" TEXT,
ADD COLUMN     "plano_pleg_DWG_file" TEXT,
ADD COLUMN     "plano_pleg_SOLID_file" TEXT;
