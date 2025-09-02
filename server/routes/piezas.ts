import express from 'express'
import { PrismaClient, Prisma } from '../generated/prisma'
import { authenticateToken, AuthRequest } from '../middleware/auth'
import upload from '../middleware/upload.js'
import path from 'path'
import fs from 'fs'

const router = express.Router()
const prisma = new PrismaClient()

// Ejemplo de uso -> POST url/piezas/
// Headers: Authorization con JWT token
// Enviar como FormData con los siguientes campos:
// - nombre: string
// - precio_mat_prima: number
// - plano_pleg_DWG: archivo (file) - opcional
// - plano_pleg_SOLID: archivo (file) - opcional  
// - plano_laser_DXF: archivo (file) - opcional
// - cte_ganancia: number

// Crear una nueva pieza
router.post('/', authenticateToken, upload.fields([
  { name: 'plano_pleg_DWG', maxCount: 1 },
  { name: 'plano_pleg_SOLID', maxCount: 1 },
  { name: 'plano_laser_DXF', maxCount: 1 }
]), async (req: AuthRequest, res) => {
  try {
    const user_id = req.user?.userId
    
    if (!user_id) {
      return res.status(401).json({ error: 'Usuario no autenticado' })
    }
    
    const { nombre, precio_mat_prima, cte_ganancia } = req.body
    const files = req.files as { [fieldname: string]: Express.Multer.File[] }
    
    // Procesar archivos subidos
    const plano_pleg_DWG_file = files?.plano_pleg_DWG?.[0] ? 
      path.relative(process.cwd(), files.plano_pleg_DWG[0].path) : null
    const plano_pleg_SOLID_file = files?.plano_pleg_SOLID?.[0] ? 
      path.relative(process.cwd(), files.plano_pleg_SOLID[0].path) : null
    const plano_laser_DXF_file = files?.plano_laser_DXF?.[0] ? 
      path.relative(process.cwd(), files.plano_laser_DXF[0].path) : null
    
    const nuevaPieza = await prisma.pieza.create({
      data: {
        nombre,
        precio_mat_prima: precio_mat_prima ? parseInt(precio_mat_prima) : null,
        plano_pleg_DWG_file,
        plano_pleg_SOLID_file,
        plano_laser_DXF_file,
        cte_ganancia: cte_ganancia ? parseInt(cte_ganancia) : null
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
    // Si hay error, eliminar archivos subidos
    if (req.files) {
      const files = req.files as { [fieldname: string]: Express.Multer.File[] }
      Object.values(files).flat().forEach(file => {
        try {
          fs.unlinkSync(file.path)
        } catch (unlinkError) {
          console.error('Error al eliminar archivo:', unlinkError)
        }
      })
    }
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
router.put('/:id', authenticateToken, upload.fields([
  { name: 'plano_pleg_DWG', maxCount: 1 },
  { name: 'plano_pleg_SOLID', maxCount: 1 },
  { name: 'plano_laser_DXF', maxCount: 1 }
]), async (req: AuthRequest, res) => {
  try {
    const { id } = req.params
    const user_id = req.user?.userId
    const { nombre, precio_mat_prima, cte_ganancia } = req.body
    
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
    
    // Preparar datos para actualizar
    const updateData: any = {
      nombre,
      precio_mat_prima: precio_mat_prima ? parseInt(precio_mat_prima) : undefined,
      cte_ganancia: cte_ganancia ? parseInt(cte_ganancia) : undefined
    }
    
    // Procesar archivos nuevos
    const files = req.files as { [fieldname: string]: Express.Multer.File[] }
    const oldFiles: string[] = []
    
    if (files?.plano_pleg_DWG?.[0]) {
      if (piezaExistente.plano_pleg_DWG_file) {
        oldFiles.push(path.join(process.cwd(), piezaExistente.plano_pleg_DWG_file))
      }
      updateData.plano_pleg_DWG_file = path.relative(process.cwd(), files.plano_pleg_DWG[0].path)
    }
    
    if (files?.plano_pleg_SOLID?.[0]) {
      if (piezaExistente.plano_pleg_SOLID_file) {
        oldFiles.push(path.join(process.cwd(), piezaExistente.plano_pleg_SOLID_file))
      }
      updateData.plano_pleg_SOLID_file = path.relative(process.cwd(), files.plano_pleg_SOLID[0].path)
    }
    
    if (files?.plano_laser_DXF?.[0]) {
      if (piezaExistente.plano_laser_DXF_file) {
        oldFiles.push(path.join(process.cwd(), piezaExistente.plano_laser_DXF_file))
      }
      updateData.plano_laser_DXF_file = path.relative(process.cwd(), files.plano_laser_DXF[0].path)
    }
    
    const piezaActualizada = await prisma.pieza.update({
      where: { id: parseInt(id) },
      data: updateData,
      include: {
        articulo_piezas: {
          include: {
            articulo: true
          }
        }
      }
    })
    
    // Eliminar archivos antiguos solo después de una actualización exitosa
    oldFiles.forEach(filePath => {
      try {
        if (fs.existsSync(filePath)) {
          fs.unlinkSync(filePath)
        }
      } catch (unlinkError) {
        console.error('Error al eliminar archivo anterior:', unlinkError)
      }
    })
    
    res.json(piezaActualizada)
  } catch (error) {
    console.error(error)
    // Si hay error, eliminar archivos nuevos subidos
    if (req.files) {
      const files = req.files as { [fieldname: string]: Express.Multer.File[] }
      Object.values(files).flat().forEach(file => {
        try {
          fs.unlinkSync(file.path)
        } catch (unlinkError) {
          console.error('Error al eliminar archivo:', unlinkError)
        }
      })
    }
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
    
    // Eliminar archivos asociados
    const filesToDelete = [
      piezaExistente.plano_pleg_DWG_file,
      piezaExistente.plano_pleg_SOLID_file,
      piezaExistente.plano_laser_DXF_file
    ].filter(file => file != null)
    
    filesToDelete.forEach(relativePath => {
      try {
        const filePath = path.join(process.cwd(), relativePath)
        if (fs.existsSync(filePath)) {
          fs.unlinkSync(filePath)
        }
      } catch (unlinkError) {
        console.error('Error al eliminar archivo:', unlinkError)
      }
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