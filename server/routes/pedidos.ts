import { PrismaClient, Prisma } from '../generated/prisma'
import express from 'express'
import { authenticateToken, AuthRequest, requireAdmin } from '../middleware/auth'

const prisma = new PrismaClient();
const router = express.Router()

// Interface para requests con autenticación opcional
interface OptionalAuthRequest extends express.Request {
  user?: { userId: number; rol: string };
}

// Interface para los datos del pedido
interface PedidoData {
  codigo: string;
  presupuesto?: number | null;
  estado: string;
  user_pedidos?: { create: { user_id: number } };
  pedido_articulos: { create: Array<{ articulo: { connect: { id: number } }; cantidad: number }> };
  pedido_piezas: { create: Array<{ pieza: { connect: { id: number } }; cantidad: number }> };
}

// Ejemplo de uso -> POST url/pedidos/
// Headers: Authorization con JWT token (opcional)
// Body: {
//   presupuesto?: number,
//   estado?: string,
//   articulos?: [{ id: number, cantidad: number }],
//   piezas?: [{ id: number, cantidad: number }]
// }
// El código se genera automáticamente en formato V-YYYYMMDD-XX

// Crear un nuevo pedido
// Crear un nuevo pedido con artículos y/o piezas desde el carrito
router.post('/', async (req: OptionalAuthRequest, res) => {
  try {
    const user_id = req.user?.userId;
    const { presupuesto, estado, articulos, piezas } = req.body;
    
    // Validar que al menos haya artículos o piezas
    const tieneArticulos = articulos && Array.isArray(articulos) && articulos.length > 0;
    const tienePiezas = piezas && Array.isArray(piezas) && piezas.length > 0;
    
    if (!tieneArticulos && !tienePiezas) {
      return res.status(400).json({ error: 'El carrito está vacío o mal formado. Debe incluir al menos artículos o piezas.' });
    }

    // Generar código automáticamente
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const dateStr = `${year}${month}${day}`;
    const baseCode = `V-${dateStr}-`;

    // Buscar el último código del día
    const lastPedido = await prisma.pedido.findFirst({
      where: {
        codigo: {
          startsWith: baseCode
        }
      },
      orderBy: {
        codigo: 'desc'
      },
      select: {
        codigo: true
      }
    });

    let nextNumber = 1;
    if (lastPedido && lastPedido.codigo) {
      const lastNumber = parseInt(lastPedido.codigo.split('-')[2]);
      nextNumber = lastNumber + 1;
    }

    const codigo = `${baseCode}${String(nextNumber).padStart(2, '0')}`;

    // Preparar datos para el pedido
    const pedidoData: PedidoData = {
      codigo,
      presupuesto: presupuesto ? parseInt(presupuesto) : null,
      estado: estado || 'Pendiente',
      pedido_articulos: {
        create: tieneArticulos ? articulos.map((item: { id: number; cantidad: number }) => ({
          articulo: {
            connect: { id: item.id }
          },
          cantidad: item.cantidad
        })) : []
      },
      pedido_piezas: {
        create: tienePiezas ? piezas.map((item: { id: number; cantidad: number }) => ({
          pieza: {
            connect: { id: item.id }
          },
          cantidad: item.cantidad
        })) : []
      }
    };

    // Solo asociar usuario si está autenticado
    if (user_id) {
      pedidoData.user_pedidos = {
        create: {
          user_id: user_id
        }
      };
    }

    // Crear el pedido
    const nuevoPedido = await prisma.pedido.create({
      data: pedidoData,
      include: {
        user_pedidos: {
          include: { users: true }
        },
        pedido_articulos: {
          include: {
            articulo: {
              include: {
                articulo_piezas: { include: { pieza: true } }
              }
            }
          }
        },
        pedido_piezas: {
          include: {
            pieza: true
          }
        }
      }
    });
    res.status(201).json(nuevoPedido);
  } catch (error) {
    console.error(error);
    if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === 'P2002') {
      res.status(409).json({ error: 'Ya existe un pedido con ese código' });
    } else {
      res.status(500).json({ error: 'Error al crear el pedido: ' + (error as Error).message });
    }
  }
});

// Obtener todos los pedidos del usuario autenticado (o todos si es admin)
router.get('/', authenticateToken, async (req: AuthRequest, res) => {
  try {
    const user_id = req.user?.userId
    const user_rol = req.user?.rol

    if (!user_id) {
      return res.status(401).json({ error: 'Usuario no autenticado' })
    }

    const whereClause = user_rol === 'admin' ? {} : {
      user_pedidos: {
        some: {
          user_id: user_id
        }
      }
    }

    const pedidos = await prisma.pedido.findMany({
      where: whereClause,
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
        },
        pedido_piezas: {
          include: {
            pieza: true
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
        },
        pedido_piezas: {
          include: {
            pieza: true
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
    const user_rol = req.user?.rol
    const { codigo, presupuesto, estado } = req.body
    
    if (!user_id) {
      return res.status(401).json({ error: 'Usuario no autenticado' })
    }
    
    // Verificar que el pedido pertenece al usuario (solo si no es admin)
    if (user_rol !== 'admin') {
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
        },
        pedido_piezas: {
          include: {
            pieza: true
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
        },
        pedido_piezas: {
          include: {
            pieza: true
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

    // Eliminar archivos de planos de piezas asociadas
    for (const pedidoPieza of pedidoExistente.pedido_piezas) {
      const pieza = pedidoPieza.pieza
      const archivosPlanos = [
        pieza.plano_laser_DXF_file,
        pieza.plano_pleg_DWG_file,
        pieza.plano_pleg_SOLID_file
      ].filter(Boolean) // Filtrar valores null/undefined

      for (const archivoPlano of archivosPlanos) {
        if (archivoPlano) { // Verificación adicional por TypeScript
          try {
            const fs = await import('fs')
            const path = await import('path')
            const filePath = path.join(process.cwd(), archivoPlano)
            if (fs.existsSync(filePath)) {
              fs.unlinkSync(filePath)
            }
          } catch (unlinkError) {
            console.error('Error al eliminar archivo de pieza:', unlinkError)
          }
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

    // 3. Eliminar relaciones pedido_piezas
    await prisma.pedido_piezas.deleteMany({
      where: { pedido_id: parseInt(id) }
    })
    
    // 4. Eliminar artículos que pertenecían solo a este pedido
    if (articuloIds.length > 0) {
      await prisma.articulo.deleteMany({
        where: { id: { in: articuloIds } }
      })
    }
    
    // 5. Eliminar relaciones user_pedidos
    await prisma.users_pedidos.deleteMany({
      where: { pedido_id: parseInt(id) }
    })
    
    // 6. Finalmente eliminar el pedido
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
        },
        pedido_piezas: {
          include: {
            pieza: true
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

// Añadir una pieza existente a un pedido
router.post('/:id/piezas/:pieza_id', authenticateToken, async (req: AuthRequest, res) => {
  try {
    const { id, pieza_id } = req.params
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
    
    // Verificar que la pieza existe
    const pieza = await prisma.pieza.findUnique({
      where: { id: parseInt(pieza_id) }
    })
    
    if (!pieza) {
      return res.status(404).json({ error: 'Pieza no encontrada' })
    }
    
    // Crear la relación si no existe
    await prisma.pedido_piezas.create({
      data: {
        pedido_id: parseInt(id),
        pieza_id: parseInt(pieza_id)
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
        },
        pedido_piezas: {
          include: {
            pieza: true
          }
        }
      }
    })
    
    res.json(pedidoActualizado)
  } catch (error) {
    console.error(error)
    if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === 'P2002') {
      res.status(409).json({ error: 'La pieza ya está asociada a este pedido' })
    } else {
      res.status(500).json({ error: 'Error al añadir pieza al pedido: ' + (error as Error).message })
    }
  }
})

// Quitar una pieza de un pedido
router.delete('/:id/piezas/:pieza_id', authenticateToken, async (req: AuthRequest, res) => {
  try {
    const { id, pieza_id } = req.params
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
    await prisma.pedido_piezas.delete({
      where: {
        pedido_id_pieza_id: {
          pedido_id: parseInt(id),
          pieza_id: parseInt(pieza_id)
        }
      }
    })
    
    res.status(204).send()
  } catch (error) {
    console.error(error)
    if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === 'P2025') {
      res.status(404).json({ error: 'Relación no encontrada' })
    } else {
      res.status(500).json({ error: 'Error al quitar pieza del pedido: ' + (error as Error).message })
    }
  }
})

// ==================== RUTAS DE ADMINISTRADOR ====================

// Obtener todos los pedidos (solo admins) - organizados por usuario
router.get('/admin/all', authenticateToken, requireAdmin, async (req: AuthRequest, res) => {
  try {
    const pedidos = await prisma.pedido.findMany({
      include: {
        user_pedidos: {
          include: {
            users: {
              select: {
                id: true,
                email: true,
                nombre: true,
                apellido: true,
                rol: true
              }
            }
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
        },
        pedido_piezas: {
          include: {
            pieza: true
          }
        }
      },
      orderBy: [
        { estado: 'asc' }, // Pedidos pendientes primero
        { id: 'desc' }     // Más recientes primero
      ]
    })

    // Agrupar por usuario para mejor organización
    const pedidosOrganizados = pedidos.reduce((acc, pedido) => {
      const usuario = pedido.user_pedidos[0]?.users
      if (usuario) {
        const userId = usuario.id
        if (!acc[userId]) {
          acc[userId] = {
            usuario: {
              id: usuario.id,
              email: usuario.email,
              nombre: usuario.nombre,
              apellido: usuario.apellido,
              rol: usuario.rol
            },
            pedidos: []
          }
        }
        acc[userId].pedidos.push(pedido)
      }
      return acc
    }, {} as Record<number, { 
      usuario: { id: number; email: string; nombre: string | null; apellido: string | null; rol: string };
      pedidos: typeof pedidos
    }>)

    res.json({
      total: pedidos.length,
      usuarios: Object.values(pedidosOrganizados)
    })
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Error al obtener todos los pedidos: ' + (error as Error).message })
  }
})

// Actualizar presupuesto de un pedido (solo admins)
router.patch('/admin/:id/presupuesto', authenticateToken, requireAdmin, async (req: AuthRequest, res) => {
  try {
    const { id } = req.params
    const { presupuesto } = req.body

    if (presupuesto === undefined) {
      return res.status(400).json({ error: 'El presupuesto es requerido (puede ser null para eliminar)' })
    }

    const updateData: {
      presupuesto: number | null;
      estado?: string;
    } = { presupuesto: presupuesto ? parseInt(presupuesto) : null }

    // Si se elimina el presupuesto, cambiar estado a "Pendiente"
    if (updateData.presupuesto === null) {
      updateData.estado = 'Pendiente'
    }

    const pedidoActualizado = await prisma.pedido.update({
      where: { id: parseInt(id) },
      data: updateData,
      include: {
        user_pedidos: {
          include: {
            users: {
              select: {
                id: true,
                email: true,
                nombre: true,
                apellido: true
              }
            }
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
        },
        pedido_piezas: {
          include: {
            pieza: true
          }
        }
      }
    })

    res.json({
      message: presupuesto ? 'Presupuesto actualizado exitosamente' : 'Presupuesto eliminado, estado cambiado a Pendiente',
      pedido: pedidoActualizado
    })
  } catch (error) {
    console.error(error)
    if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === 'P2025') {
      res.status(404).json({ error: 'Pedido no encontrado' })
    } else {
      res.status(500).json({ error: 'Error al actualizar presupuesto: ' + (error as Error).message })
    }
  }
})

// Cambiar estado de un pedido (solo admins)
router.patch('/admin/:id/estado', authenticateToken, requireAdmin, async (req: AuthRequest, res) => {
  try {
    const { id } = req.params
    const { estado } = req.body

    if (!estado) {
      return res.status(400).json({ error: 'El estado es requerido' })
    }

    // Validar estados permitidos
    const estadosPermitidos = ['Pendiente', 'Cancelado', 'Aprobado']
    if (!estadosPermitidos.includes(estado)) {
      return res.status(400).json({ 
        error: 'Estado no válido. Permitidos: ' + estadosPermitidos.join(', ') 
      })
    }

    // Si se intenta cambiar a "Aprobado", verificar que tenga presupuesto
    if (estado === 'Aprobado') {
      const pedido = await prisma.pedido.findUnique({
        where: { id: parseInt(id) },
        select: { presupuesto: true }
      })
      
      if (!pedido || pedido.presupuesto === null) {
        return res.status(400).json({ error: 'No se puede aprobar un pedido sin presupuesto asignado' })
      }
    }

    const pedidoActualizado = await prisma.pedido.update({
      where: { id: parseInt(id) },
      data: { estado },
      include: {
        user_pedidos: {
          include: {
            users: {
              select: {
                id: true,
                email: true,
                nombre: true,
                apellido: true
              }
            }
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
        },
        pedido_piezas: {
          include: {
            pieza: true
          }
        }
      }
    })

    res.json({
      message: `Estado cambiado a "${estado}" exitosamente`,
      pedido: pedidoActualizado
    })
  } catch (error) {
    console.error(error)
    if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === 'P2025') {
      res.status(404).json({ error: 'Pedido no encontrado' })
    } else {
      res.status(500).json({ error: 'Error al cambiar estado: ' + (error as Error).message })
    }
  }
})

// Obtener estadísticas de pedidos (solo admins)
router.get('/admin/estadisticas', authenticateToken, requireAdmin, async (req: AuthRequest, res) => {
  try {
    const [
      totalPedidos,
      pedidosPendientes,
      pedidosAprobados,
      pedidosCancelados,
      totalUsuarios,
      presupuestoTotal
    ] = await Promise.all([
      prisma.pedido.count(),
      prisma.pedido.count({ where: { estado: 'Pendiente' } }),
      prisma.pedido.count({ where: { estado: 'Aprobado' } }),
      prisma.pedido.count({ where: { estado: 'Cancelado' } }),
      prisma.users.count({ where: { rol: 'user' } }),
      prisma.pedido.aggregate({
        _sum: { presupuesto: true },
        where: { presupuesto: { not: null } }
      })
    ])

    res.json({
      pedidos: {
        total: totalPedidos,
        pendientes: pedidosPendientes,
        aprobados: pedidosAprobados,
        cancelados: pedidosCancelados
      },
      usuarios: {
        total: totalUsuarios
      },
      presupuestos: {
        total: presupuestoTotal._sum.presupuesto || 0
      }
    })
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Error al obtener estadísticas: ' + (error as Error).message })
  }
})

export default router
