import express from 'express'
import { PrismaClient, Prisma } from '../generated/prisma'
import { authenticateToken, AuthRequest } from '../middleware/auth'

const router = express.Router()
const prisma = new PrismaClient()

// Ejemplo de uso -> POST url/piezas/
// Headers: Authorization con JWT token
// {
//   "nombre": "Pieza ejemplo",
//   "precio_mat_prima": 1500,
//   "plano_pleg_DWG": "archivo.dwg",
//   "plano_pleg_SOLID": "archivo.solid",
//   "plano_laser_DXF": "archivo.dxf",
//   "cte_ganancia": 30
// }

// Crear una nueva pieza
router.post('/', authenticateToken, async (req: AuthRequest, res) => {
  try {
    const user_id = req.user?.userId
    
    if (!user_id) {
      return res.status(401).json({ error: 'Usuario no autenticado' })
    }
    
    const { nombre, precio_mat_prima, plano_pleg_DWG, plano_pleg_SOLID, plano_laser_DXF, cte_ganancia } = req.body
    
    const nuevaPieza = await prisma.pieza.create({
      data: {
        nombre,
        precio_mat_prima,
        plano_pleg_DWG,
        plano_pleg_SOLID,
        plano_laser_DXF,
        cte_ganancia
      },
      include: {
        articulo_piezas: {
          include: {
            articulo: true
          }
        }
      }
    })
    
    res.status(201).json(nuevaPieza)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Error al crear la pieza: ' + (error as Error).message })
  }
})

// Obtener todas las piezas
router.get('/', authenticateToken, async (req: AuthRequest, res) => {
  try {
    const user_id = req.user?.userId

    if (!user_id) {
      return res.status(401).json({ error: 'Usuario no autenticado' })
    }

    const piezas = await prisma.pieza.findMany({
      include: {
        articulo_piezas: {
          include: {
            articulo: {
              include: {
                users_articulos: {
                  where: {
                    user_id: user_id
                  }
                }
              }
            }
          }
        }
      }
    })
    
    // Filtrar piezas que pertenecen a artículos del usuario o piezas sin relación
    const piezasFiltradas = piezas.filter(pieza => 
      pieza.articulo_piezas.length === 0 || 
      pieza.articulo_piezas.some(ap => ap.articulo.users_articulos.length > 0)
    )
    
    res.json(piezasFiltradas)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Error al obtener las piezas: ' + (error as Error).message })
  }
})

// Obtener una pieza por ID
router.get('/:id', authenticateToken, async (req: AuthRequest, res) => {
  try {
    const { id } = req.params
    const user_id = req.user?.userId
    
    if (!user_id) {
      return res.status(401).json({ error: 'Usuario no autenticado' })
    }
    
    const pieza = await prisma.pieza.findUnique({
      where: { id: parseInt(id) },
      include: {
        articulo_piezas: {
          include: {
            articulo: {
              include: {
                users_articulos: true
              }
            }
          }
        }
      }
    })
    
    if (!pieza) {
      return res.status(404).json({ error: 'Pieza no encontrada' })
    }
    
    // Verificar si el usuario tiene acceso a esta pieza (a través de artículos o si es una pieza libre)
    const tieneAcceso = pieza.articulo_piezas.length === 0 || 
      pieza.articulo_piezas.some(ap => 
        ap.articulo.users_articulos.some(ua => ua.user_id === user_id)
      )
    
    if (!tieneAcceso) {
      return res.status(403).json({ error: 'No tienes acceso a esta pieza' })
    }
    
    res.json(pieza)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Error al obtener la pieza: ' + (error as Error).message })
  }
})

// Actualizar una pieza
router.put('/:id', authenticateToken, async (req: AuthRequest, res) => {
  try {
    const { id } = req.params
    const user_id = req.user?.userId
    const { nombre, precio_mat_prima, plano_pleg_DWG, plano_pleg_SOLID, plano_laser_DXF, cte_ganancia } = req.body
    
    if (!user_id) {
      return res.status(401).json({ error: 'Usuario no autenticado' })
    }
    
    // Verificar que la pieza existe y el usuario tiene acceso
    const piezaExistente = await prisma.pieza.findUnique({
      where: { id: parseInt(id) },
      include: {
        articulo_piezas: {
          include: {
            articulo: {
              include: {
                users_articulos: true
              }
            }
          }
        }
      }
    })
    
    if (!piezaExistente) {
      return res.status(404).json({ error: 'Pieza no encontrada' })
    }
    
    // Verificar acceso
    const tieneAcceso = piezaExistente.articulo_piezas.length === 0 || 
      piezaExistente.articulo_piezas.some(ap => 
        ap.articulo.users_articulos.some(ua => ua.user_id === user_id)
      )
    
    if (!tieneAcceso) {
      return res.status(403).json({ error: 'No tienes acceso para modificar esta pieza' })
    }
    
    const piezaActualizada = await prisma.pieza.update({
      where: { id: parseInt(id) },
      data: {
        nombre,
        precio_mat_prima,
        plano_pleg_DWG,
        plano_pleg_SOLID,
        plano_laser_DXF,
        cte_ganancia
      },
      include: {
        articulo_piezas: {
          include: {
            articulo: true
          }
        }
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
router.delete('/:id', authenticateToken, async (req: AuthRequest, res) => {
  try {
    const { id } = req.params
    const user_id = req.user?.userId
    
    if (!user_id) {
      return res.status(401).json({ error: 'Usuario no autenticado' })
    }
    
    // Verificar que la pieza existe y el usuario tiene acceso
    const piezaExistente = await prisma.pieza.findUnique({
      where: { id: parseInt(id) },
      include: {
        articulo_piezas: {
          include: {
            articulo: {
              include: {
                users_articulos: true
              }
            }
          }
        }
      }
    })
    
    if (!piezaExistente) {
      return res.status(404).json({ error: 'Pieza no encontrada' })
    }
    
    // Verificar acceso
    const tieneAcceso = piezaExistente.articulo_piezas.length === 0 || 
      piezaExistente.articulo_piezas.some(ap => 
        ap.articulo.users_articulos.some(ua => ua.user_id === user_id)
      )
    
    if (!tieneAcceso) {
      return res.status(403).json({ error: 'No tienes acceso para eliminar esta pieza' })
    }
    
    // Eliminar las relaciones primero
    await prisma.articulo_piezas.deleteMany({
      where: { pieza_id: parseInt(id) }
    })
    
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