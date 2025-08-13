import express from 'express'
import { PrismaClient, Prisma } from '../generated/prisma'

const router = express.Router()
const prisma = new PrismaClient()

// Ejemplo de uso -> POST url/piezas/
// {
//   "nombre": "Pieza ejemplo",
//   "precio_mat_prima": 1500,
//   "plano_pleg_DWG": "archivo.dwg",
//   "plano_pleg_SOLID": "archivo.solid",
//   "plano_laser_DXF": "archivo.dxf",
//   "cte_ganancia": 0.3
// }

// Crear una nueva pieza
router.post('/', async (req, res) => {
  try {
    const { nombre, precio_mat_prima, plano_pleg_DWG, plano_pleg_SOLID, plano_laser_DXF, cte_ganancia } = req.body
    
    const nuevaPieza = await prisma.pieza.create({
      data: {
        nombre,
        precio_mat_prima,
        plano_pleg_DWG,
        plano_pleg_SOLID,
        plano_laser_DXF,
        cte_ganancia
      }
    })
    
    res.status(201).json(nuevaPieza)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Error al crear la pieza: ' + (error as Error).message })
  }
})

// Obtener todas las piezas
router.get('/', async (req, res) => {
  try {
    const piezas = await prisma.pieza.findMany()
    res.json(piezas)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Error al obtener las piezas: ' + (error as Error).message })
  }
})

// Obtener una pieza por ID
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params
    const pieza = await prisma.pieza.findUnique({
      where: { id: parseInt(id) }
    })
    
    if (!pieza) {
      return res.status(404).json({ error: 'Pieza no encontrada' })
    }
    
    res.json(pieza)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Error al obtener la pieza: ' + (error as Error).message })
  }
})

// Actualizar una pieza
router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params
    const { nombre, precio_mat_prima, plano_pleg_DWG, plano_pleg_SOLID, plano_laser_DXF, cte_ganancia } = req.body
    
    const piezaActualizada = await prisma.pieza.update({
      where: { id: parseInt(id) },
      data: {
        nombre,
        precio_mat_prima,
        plano_pleg_DWG,
        plano_pleg_SOLID,
        plano_laser_DXF,
        cte_ganancia
      }
    })
    
    res.json(piezaActualizada)
  } catch (error) {
    console.error(error)
    if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === 'P2025') {
      res.status(404).json({ error: 'Pieza no encontrada' })
    } else {
      res.status(500).json({ error: 'Error al actualizar la pieza: ' + (error as Error).message })
    }
  }
})

// Eliminar una pieza
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params
    
    await prisma.pieza.delete({
      where: { id: parseInt(id) }
    })
    
    res.status(204).send()
  } catch (error) {
    console.error(error)
    if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === 'P2025') {
      res.status(404).json({ error: 'Pieza no encontrada' })
    } else {
      res.status(500).json({ error: 'Error al eliminar la pieza: ' + (error as Error).message })
    }
  }
})

export default router