import { PrismaClient, Prisma } from '../generated/prisma'
import express from 'express'
import { authenticateToken, AuthRequest } from '../middleware/auth'

const prisma = new PrismaClient();
const router = express.Router()

// Ejemplo de uso -> POST url/articulos/
// Headers: { "cliente_id": "1" } (o el mecanismo de auth que uses)
// {
//   "him_codigo": "HIM001",
//   "nombre": "Artículo ejemplo",
//   "cant_piezas": 5,
//   "plano": "plano.pdf",
//   "precio": 2500,
//   "cte_ganancia": 0.25
// }

// Crear un nuevo artículo
router.post('/', authenticateToken, async (req: AuthRequest, res) => {
  try {
    const cliente_id = req.user?.userId || null
    
    const { him_codigo, nombre, cant_piezas, plano, precio, cte_ganancia } = req.body
    
    const nuevoArticulo = await prisma.articulo.create({
      data: {
        him_codigo,
        cliente_id,
        nombre,
        cant_piezas,
        plano,
        precio,
        cte_ganancia
      }
    })
    
    res.status(201).json(nuevoArticulo)
  } catch (error) {
    console.error(error)
    if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === 'P2002') {
      res.status(409).json({ error: 'El código HIM ya existe' })
    } else {
      res.status(500).json({ error: 'Error al crear el artículo: ' + (error as Error).message })
    }
  }
})

// Obtener todos los artículos
router.get('/', authenticateToken, async (req: AuthRequest, res) => {
  try {
    const cliente_id = req.user?.userId || null

    const articulos = await prisma.articulo.findMany({
      where: { cliente_id: cliente_id }
    })
    res.json(articulos)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Error al obtener los artículos: ' + (error as Error).message })
  }
})

// Obtener un artículo por him_codigo
router.get('/:him_codigo', authenticateToken, async (req: AuthRequest, res) => {
  try {
    const { him_codigo } = req.params
    const articulo = await prisma.articulo.findUnique({
      where: { him_codigo: him_codigo }
    })
    
    if (!articulo) {
      return res.status(404).json({ error: 'Artículo no encontrado' })
    }
    
    res.json(articulo)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Error al obtener el artículo: ' + (error as Error).message })
  }
})

// Actualizar un artículo por him_codigo
router.put('/:him_codigo', authenticateToken, async (req: AuthRequest, res) => {
  try {
    const { him_codigo } = req.params
    const { nombre, cant_piezas, plano, precio, cte_ganancia } = req.body
    
    const articuloActualizado = await prisma.articulo.update({
      where: { him_codigo: him_codigo },
      data: {
        nombre,
        cant_piezas,
        plano,
        precio,
        cte_ganancia
      }
    })
    
    res.json(articuloActualizado)
  } catch (error) {
    console.error(error)
    if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === 'P2025') {
      res.status(404).json({ error: 'Artículo no encontrado' })
    } else {
      res.status(500).json({ error: 'Error al actualizar el artículo: ' + (error as Error).message })
    }
  }
})

// Eliminar un artículo por him_codigo
router.delete('/:him_codigo', authenticateToken, async (req: AuthRequest, res) => {
  try {
    const { him_codigo } = req.params
    
    await prisma.articulo.delete({
      where: { him_codigo: him_codigo }
    })
    
    res.status(204).send()
  } catch (error) {
    console.error(error)
    if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === 'P2025') {
      res.status(404).json({ error: 'Artículo no encontrado' })
    } else {
      res.status(500).json({ error: 'Error al eliminar el artículo: ' + (error as Error).message })
    }
  }
})

export default router