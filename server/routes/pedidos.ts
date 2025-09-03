import { PrismaClient, Prisma } from '../generated/prisma'
import express from 'express'
import { authenticateToken, AuthRequest } from '../middleware/auth'

const prisma = new PrismaClient();
const router = express.Router()

// Ejemplo de uso -> POST url/pedidos/
// Headers: Authorization con JWT token
// Body: {
//   codigo?: string,
//   presupuesto?: number,
//   estado?: string
// }

// Crear un nuevo pedido
router.post('/', authenticateToken, async (req: AuthRequest, res) => {
  try {
    const user_id = req.user?.userId
    
    if (!user_id) {
      return res.status(401).json({ error: 'Usuario no autenticado' })
    }
    
    const { codigo, presupuesto, estado } = req.body
    
    const nuevoPedido = await prisma.pedido.create({
      data: {
        codigo,
        presupuesto: presupuesto ? parseInt(presupuesto) : null,
        estado: estado || 'Pendiente',
        user_pedidos: {
          create: {
            user_id: user_id
          }
        }
      },
      include: {
        user_pedidos: {
          include: {
            users: true
          }
        },
        pedido_articulos: {
          include: {
            articulo: {
              include: {
                articulo_piezas: {
                  include: {
                    pieza: true
                  }
                }
              }
            }
          }
        }
      }
    })
    
    res.status(201).json(nuevoPedido)
  } catch (error) {
    console.error(error)
    if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === 'P2002') {
      res.status(409).json({ error: 'Ya existe un pedido con ese código' })
    } else {
      res.status(500).json({ error: 'Error al crear el pedido: ' + (error as Error).message })
    }
  }
})

// Obtener todos los pedidos del usuario autenticado
router.get('/', authenticateToken, async (req: AuthRequest, res) => {
  try {
    const user_id = req.user?.userId

    if (!user_id) {
      return res.status(401).json({ error: 'Usuario no autenticado' })
    }

    const pedidos = await prisma.pedido.findMany({
      where: {
        user_pedidos: {
          some: {
            user_id: user_id
          }
        }
      },
      include: {
        user_pedidos: {
          include: {
            users: true
          }
        },
        pedido_articulos: {
          include: {
            articulo: {
              include: {
                articulo_piezas: {
                  include: {
                    pieza: true
                  }
                }
              }
            }
          }
        }
      },
      orderBy: {
        id: 'desc'
      }
    })
    res.json(pedidos)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Error al obtener los pedidos: ' + (error as Error).message })
  }
})

// Obtener un pedido por ID
router.get('/:id', authenticateToken, async (req: AuthRequest, res) => {
  try {
    const { id } = req.params
    const user_id = req.user?.userId
    
    if (!user_id) {
      return res.status(401).json({ error: 'Usuario no autenticado' })
    }
    
    const pedido = await prisma.pedido.findFirst({
      where: {
        id: parseInt(id),
        user_pedidos: {
          some: {
            user_id: user_id
          }
        }
      },
      include: {
        user_pedidos: {
          include: {
            users: true
          }
        },
        pedido_articulos: {
          include: {
            articulo: {
              include: {
                articulo_piezas: {
                  include: {
                    pieza: true
                  }
                }
              }
            }
          }
        }
      }
    })
    
    if (!pedido) {
      return res.status(404).json({ error: 'Pedido no encontrado' })
    }
    
    res.json(pedido)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Error al obtener el pedido: ' + (error as Error).message })
  }
})

// Actualizar un pedido por ID
router.put('/:id', authenticateToken, async (req: AuthRequest, res) => {
  try {
    const { id } = req.params
    const user_id = req.user?.userId
    const { codigo, presupuesto, estado } = req.body
    
    if (!user_id) {
      return res.status(401).json({ error: 'Usuario no autenticado' })
    }
    
    // Verificar que el pedido pertenece al usuario
    const pedidoExistente = await prisma.pedido.findFirst({
      where: {
        id: parseInt(id),
        user_pedidos: {
          some: {
            user_id: user_id
          }
        }
      }
    })
    
    if (!pedidoExistente) {
      return res.status(404).json({ error: 'Pedido no encontrado' })
    }
    
    // Preparar datos para actualizar
    const updateData: Partial<{
      codigo: string | null;
      presupuesto: number | null;
      estado: string;
    }> = {}
    
    if (codigo !== undefined) updateData.codigo = codigo
    if (presupuesto !== undefined) updateData.presupuesto = presupuesto ? parseInt(presupuesto) : null
    if (estado !== undefined) updateData.estado = estado
    
    const pedidoActualizado = await prisma.pedido.update({
      where: { id: parseInt(id) },
      data: updateData,
      include: {
        user_pedidos: {
          include: {
            users: true
          }
        },
        pedido_articulos: {
          include: {
            articulo: {
              include: {
                articulo_piezas: {
                  include: {
                    pieza: true
                  }
                }
              }
            }
          }
        }
      }
    })
    
    res.json(pedidoActualizado)
  } catch (error) {
    console.error(error)
    if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === 'P2025') {
      res.status(404).json({ error: 'Pedido no encontrado' })
    } else {
      res.status(500).json({ error: 'Error al actualizar el pedido: ' + (error as Error).message })
    }
  }
})

// Eliminar un pedido por ID
router.delete('/:id', authenticateToken, async (req: AuthRequest, res) => {
  try {
    const { id } = req.params
    const user_id = req.user?.userId
    
    if (!user_id) {
      return res.status(401).json({ error: 'Usuario no autenticado' })
    }
    
    // Verificar que el pedido pertenece al usuario
    const pedidoExistente = await prisma.pedido.findFirst({
      where: {
        id: parseInt(id),
        user_pedidos: {
          some: {
            user_id: user_id
          }
        }
      },
      include: {
        pedido_articulos: {
          include: {
            articulo: true
          }
        }
      }
    })
    
    if (!pedidoExistente) {
      return res.status(404).json({ error: 'Pedido no encontrado' })
    }
    
    // Eliminar archivos de planos de artículos asociados
    for (const pedidoArticulo of pedidoExistente.pedido_articulos) {
      if (pedidoArticulo.articulo.plano_file) {
        try {
          const fs = await import('fs')
          const path = await import('path')
          const filePath = path.join(process.cwd(), pedidoArticulo.articulo.plano_file)
          if (fs.existsSync(filePath)) {
            fs.unlinkSync(filePath)
          }
        } catch (unlinkError) {
          console.error('Error al eliminar archivo:', unlinkError)
        }
      }
    }
    
    // Eliminar las relaciones y entidades asociadas en el orden correcto
    // 1. Eliminar relaciones articulo_piezas de los artículos del pedido
    const articuloIds = pedidoExistente.pedido_articulos.map(pa => pa.articulo_id)
    if (articuloIds.length > 0) {
      await prisma.articulo_piezas.deleteMany({
        where: { articulo_id: { in: articuloIds } }
      })
    }
    
    // 2. Eliminar relaciones pedido_articulos
    await prisma.pedido_articulos.deleteMany({
      where: { pedido_id: parseInt(id) }
    })
    
    // 3. Eliminar artículos que pertenecían solo a este pedido
    if (articuloIds.length > 0) {
      await prisma.articulo.deleteMany({
        where: { id: { in: articuloIds } }
      })
    }
    
    // 4. Eliminar relaciones user_pedidos
    await prisma.users_pedidos.deleteMany({
      where: { pedido_id: parseInt(id) }
    })
    
    // 5. Finalmente eliminar el pedido
    await prisma.pedido.delete({
      where: { id: parseInt(id) }
    })
    
    res.status(204).send()
  } catch (error) {
    console.error(error)
    if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === 'P2025') {
      res.status(404).json({ error: 'Pedido no encontrado' })
    } else {
      res.status(500).json({ error: 'Error al eliminar el pedido: ' + (error as Error).message })
    }
  }
})

// Añadir un artículo existente a un pedido
router.post('/:id/articulos/:articulo_id', authenticateToken, async (req: AuthRequest, res) => {
  try {
    const { id, articulo_id } = req.params
    const user_id = req.user?.userId
    
    if (!user_id) {
      return res.status(401).json({ error: 'Usuario no autenticado' })
    }
    
    // Verificar que el pedido pertenece al usuario
    const pedido = await prisma.pedido.findFirst({
      where: {
        id: parseInt(id),
        user_pedidos: {
          some: {
            user_id: user_id
          }
        }
      }
    })
    
    if (!pedido) {
      return res.status(404).json({ error: 'Pedido no encontrado' })
    }
    
    // Verificar que el artículo existe
    const articulo = await prisma.articulo.findUnique({
      where: { id: parseInt(articulo_id) }
    })
    
    if (!articulo) {
      return res.status(404).json({ error: 'Artículo no encontrado' })
    }
    
    // Crear la relación si no existe
    await prisma.pedido_articulos.create({
      data: {
        pedido_id: parseInt(id),
        articulo_id: parseInt(articulo_id)
      }
    })
    
    // Devolver el pedido actualizado
    const pedidoActualizado = await prisma.pedido.findUnique({
      where: { id: parseInt(id) },
      include: {
        user_pedidos: {
          include: {
            users: true
          }
        },
        pedido_articulos: {
          include: {
            articulo: {
              include: {
                articulo_piezas: {
                  include: {
                    pieza: true
                  }
                }
              }
            }
          }
        }
      }
    })
    
    res.json(pedidoActualizado)
  } catch (error) {
    console.error(error)
    if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === 'P2002') {
      res.status(409).json({ error: 'El artículo ya está asociado a este pedido' })
    } else {
      res.status(500).json({ error: 'Error al añadir artículo al pedido: ' + (error as Error).message })
    }
  }
})

// Quitar un artículo de un pedido
router.delete('/:id/articulos/:articulo_id', authenticateToken, async (req: AuthRequest, res) => {
  try {
    const { id, articulo_id } = req.params
    const user_id = req.user?.userId
    
    if (!user_id) {
      return res.status(401).json({ error: 'Usuario no autenticado' })
    }
    
    // Verificar que el pedido pertenece al usuario
    const pedido = await prisma.pedido.findFirst({
      where: {
        id: parseInt(id),
        user_pedidos: {
          some: {
            user_id: user_id
          }
        }
      }
    })
    
    if (!pedido) {
      return res.status(404).json({ error: 'Pedido no encontrado' })
    }
    
    // Eliminar la relación
    await prisma.pedido_articulos.delete({
      where: {
        pedido_id_articulo_id: {
          pedido_id: parseInt(id),
          articulo_id: parseInt(articulo_id)
        }
      }
    })
    
    res.status(204).send()
  } catch (error) {
    console.error(error)
    if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === 'P2025') {
      res.status(404).json({ error: 'Relación no encontrada' })
    } else {
      res.status(500).json({ error: 'Error al quitar artículo del pedido: ' + (error as Error).message })
    }
  }
})

export default router
