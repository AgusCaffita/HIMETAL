import { PrismaClient, Prisma } from '../generated/prisma'
import express from 'express'
import { authenticateToken, AuthRequest } from '../middleware/auth'

const prisma = new PrismaClient();
const router = express.Router()

// Ejemplo de uso -> POST url/articulos/
// Headers: Authorization con JWT token
// {
//   "codigo": 1001,
//   "descripcion": "Artículo ejemplo",
//   "cant_piezas": 5,
//   "plano": "plano.pdf",
//   "precio": 2500,
//   "cte_ganancia": 25
// }

// Crear un nuevo artículo
router.post('/', authenticateToken, async (req: AuthRequest, res) => {
  try {
    const user_id = req.user?.userId
    
    if (!user_id) {
      return res.status(401).json({ error: 'Usuario no autenticado' })
    }
    
    const { codigo, descripcion, cant_piezas, plano, precio, cte_ganancia } = req.body
    
    const nuevoArticulo = await prisma.articulo.create({
      data: {
        codigo,
        descripcion,
        cant_piezas,
        plano,
        precio,
        cte_ganancia,
        users_articulos: {
          create: {
            user_id: user_id
          }
        }
      },
      include: {
        users_articulos: {
          include: {
            users: true
          }
        }
      }
    })
    
    res.status(201).json(nuevoArticulo)
  } catch (error) {
    console.error(error)
    if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === 'P2002') {
      res.status(409).json({ error: 'Ya existe un artículo con ese código' })
    } else {
      res.status(500).json({ error: 'Error al crear el artículo: ' + (error as Error).message })
    }
  }
})

// Obtener todos los artículos del usuario autenticado
router.get('/', authenticateToken, async (req: AuthRequest, res) => {
  try {
    const user_id = req.user?.userId

    if (!user_id) {
      return res.status(401).json({ error: 'Usuario no autenticado' })
    }

    const articulos = await prisma.articulo.findMany({
      where: {
        users_articulos: {
          some: {
            user_id: user_id
          }
        }
      },
      include: {
        users_articulos: {
          include: {
            users: true
          }
        },
        articulo_piezas: {
          include: {
            pieza: true
          }
        }
      }
    })
    res.json(articulos)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Error al obtener los artículos: ' + (error as Error).message })
  }
})

// Obtener un artículo por ID
router.get('/:id', authenticateToken, async (req: AuthRequest, res) => {
  try {
    const { id } = req.params
    const user_id = req.user?.userId
    
    if (!user_id) {
      return res.status(401).json({ error: 'Usuario no autenticado' })
    }
    
    const articulo = await prisma.articulo.findFirst({
      where: {
        id: parseInt(id),
        users_articulos: {
          some: {
            user_id: user_id
          }
        }
      },
      include: {
        users_articulos: {
          include: {
            users: true
          }
        },
        articulo_piezas: {
          include: {
            pieza: true
          }
        }
      }
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

// Actualizar un artículo por ID
router.put('/:id', authenticateToken, async (req: AuthRequest, res) => {
  try {
    const { id } = req.params
    const user_id = req.user?.userId
    const { codigo, descripcion, cant_piezas, plano, precio, cte_ganancia } = req.body
    
    if (!user_id) {
      return res.status(401).json({ error: 'Usuario no autenticado' })
    }
    
    // Verificar que el artículo pertenece al usuario
    const articuloExistente = await prisma.articulo.findFirst({
      where: {
        id: parseInt(id),
        users_articulos: {
          some: {
            user_id: user_id
          }
        }
      }
    })
    
    if (!articuloExistente) {
      return res.status(404).json({ error: 'Artículo no encontrado' })
    }
    
    const articuloActualizado = await prisma.articulo.update({
      where: { id: parseInt(id) },
      data: {
        codigo,
        descripcion,
        cant_piezas,
        plano,
        precio,
        cte_ganancia
      },
      include: {
        users_articulos: {
          include: {
            users: true
          }
        },
        articulo_piezas: {
          include: {
            pieza: true
          }
        }
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

// Eliminar un artículo por ID
router.delete('/:id', authenticateToken, async (req: AuthRequest, res) => {
  try {
    const { id } = req.params
    const user_id = req.user?.userId
    
    if (!user_id) {
      return res.status(401).json({ error: 'Usuario no autenticado' })
    }
    
    // Verificar que el artículo pertenece al usuario
    const articuloExistente = await prisma.articulo.findFirst({
      where: {
        id: parseInt(id),
        users_articulos: {
          some: {
            user_id: user_id
          }
        }
      }
    })
    
    if (!articuloExistente) {
      return res.status(404).json({ error: 'Artículo no encontrado' })
    }
    
    // Eliminar las relaciones primero y luego el artículo
    await prisma.users_articulos.deleteMany({
      where: { articulo_id: parseInt(id) }
    })
    
    await prisma.articulo_piezas.deleteMany({
      where: { articulo_id: parseInt(id) }
    })
    
    await prisma.articulo.delete({
      where: { id: parseInt(id) }
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