import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'

const JWT_SECRET = process.env.JWT_SECRET || 'tu-clave-secreta-muy-segura'

interface AuthRequest extends Request {
  user?: { userId: number; email: string; rol: string }
}

export const authenticateToken = (req: AuthRequest, res: Response, next: NextFunction) => {
  const authHeader = req.headers['authorization']
  const token = authHeader && authHeader.split(' ')[1] // Bearer TOKEN

  if (!token) {
    return res.status(401).json({ error: 'Token requerido' })
  }

  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({ error: 'Token inválido' })
    }
    
    req.user = user as { userId: number; email: string; rol: string }
    next()
  })
}

// Middleware para verificar si el usuario es administrador
export const requireAdmin = (req: AuthRequest, res: Response, next: NextFunction) => {
  if (!req.user) {
    return res.status(401).json({ error: 'Usuario no autenticado' })
  }
  
  if (req.user.rol !== 'admin') {
    return res.status(403).json({ error: 'Acceso denegado: se requieren permisos de administrador' })
  }
  
  next()
}

export type { AuthRequest }