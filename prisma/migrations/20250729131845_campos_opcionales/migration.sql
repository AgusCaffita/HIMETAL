-- CreateTable
CREATE TABLE `Articulo` (
    `him_codigo` VARCHAR(191) NOT NULL,
    `cli_codigo` VARCHAR(191) NULL,
    `nombre` VARCHAR(191) NULL,
    `cant_piezas` INTEGER NULL,
    `plano` VARCHAR(191) NULL,
    `precio` INTEGER NULL,
    `cte_ganancia` INTEGER NULL,

    UNIQUE INDEX `Articulo_him_codigo_key`(`him_codigo`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Pieza` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(191) NULL,
    `precio_mat_prima` INTEGER NULL,
    `plano_pleg_DWG` VARCHAR(191) NULL,
    `plano_pleg_SOLID` VARCHAR(191) NULL,
    `plano_laser_DXF` VARCHAR(191) NULL,
    `cte_ganancia` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
