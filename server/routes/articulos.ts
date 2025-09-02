import { PrismaClient, Prisma } from '../generated/prisma'
import express from 'express'
import { authenticateToken, AuthRequest } from '../middleware/auth'
import upload from '../middleware/upload.js'
import path from 'path'
import fs from 'fs'

const prisma = new PrismaClient();
const router = express.Router()

// Ejemplo de uso -> POST url/articulos/
// Headers: Authorization con JWT token
// Enviar como FormData con los siguientes campos:
// - codigo: number
// - descripcion: string
// - cant_piezas: number
// - plano: archivo (file)
// - precio: number
// - cte_ganancia: number

// Crear un nuevo artículo
router.post('/', authenticateToken, upload.single('plano'), async (req: AuthRequest, res) => {
  try {
    const user_id = req.user?.userId
    
    if (!user_id) {
      return res.status(401).json({ error: 'Usuario no autenticado' })
    }
    
    const { codigo, descripcion, cant_piezas, precio, cte_ganancia } = req.body
    const plano_file = req.file ? path.relative(process.cwd(), req.file.path) : null
    
    const nuevoArticulo = await prisma.articulo.create({
      data: {
        codigo: codigo ? parseInt(codigo) : null,
        descripcion,
        cant_piezas: cant_piezas ? parseInt(cant_piezas) : null,
        plano_file,
        precio: precio ? parseInt(precio) : null,
        cte_ganancia: cte_ganancia ? parseInt(cte_ganancia) : null,
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
    // Si hay error, eliminar el archivo subido si existe
    if (req.file) {
      try {
        fs.unlinkSync(req.file.path)
      } catch (unlinkError) {
        console.error('Error al eliminar archivo:', unlinkError)
      }
    }
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
router.put('/:id', authenticateToken, upload.single('plano'), async (req: AuthRequest, res) => {
  try {
    const { id } = req.params
    const user_id = req.user?.userId
    const { codigo, descripcion, cant_piezas, precio, cte_ganancia } = req.body
    
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
    
    // Preparar datos para actualizar
    const updateData: any = {
      codigo: codigo ? parseInt(codigo) : undefined,
      descripcion,
      cant_piezas: cant_piezas ? parseInt(cant_piezas) : undefined,
      precio: precio ? parseInt(precio) : undefined,
      cte_ganancia: cte_ganancia ? parseInt(cte_ganancia) : undefined
    }
    
    // Si se subió un nuevo archivo, eliminar el anterior y actualizar la ruta
    if (req.file) {
      // Eliminar archivo anterior si existe
      if (articuloExistente.plano_file) {
        try {
          const oldFilePath = path.join(process.cwd(), articuloExistente.plano_file)
          if (fs.existsSync(oldFilePath)) {
            fs.unlinkSync(oldFilePath)
          }
        } catch (unlinkError) {
          console.error('Error al eliminar archivo anterior:', unlinkError)
        }
      }
      updateData.plano_file = path.relative(process.cwd(), req.file.path)
    }
    
    const articuloActualizado = await prisma.articulo.update({
      where: { id: parseInt(id) },
      data: updateData,
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
    // Si hay error, eliminar el archivo subido si existe
    if (req.file) {
      try {
        fs.unlinkSync(req.file.path)
      } catch (unlinkError) {
        console.error('Error al eliminar archivo:', unlinkError)
      }
    }
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
    
    // Verificar que el artículo pertenece al usuario y obtener info del archivo
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
    
    // Eliminar archivo del plano si existe
    if (articuloExistente.plano_file) {
      try {
        const filePath = path.join(process.cwd(), articuloExistente.plano_file)
        if (fs.existsSync(filePath)) {
          fs.unlinkSync(filePath)
        }
      } catch (unlinkError) {
        console.error('Error al eliminar archivo:', unlinkError)
      }
    }
    
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