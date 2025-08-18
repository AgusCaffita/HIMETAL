import express from 'express'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { PrismaClient } from '../generated/prisma'

const router = express.Router()
const prisma = new PrismaClient()

const JWT_SECRET = process.env.JWT_SECRET || 'tu-clave-secreta-muy-segura'

// const response = await fetch('/auth/login', {
//   method: 'POST',
//   headers: { 'Content-Type': 'application/json' },
//   body: JSON.stringify({ email, password })
// })
//
// const data = await response.json()
// localStorage.setItem('token', data.token) -> opcional
//
// // Uso en requests posteriores
// fetch('/articulos', {
//   headers: {
//     'Authorization': `Bearer ${localStorage.getItem('token')}`
//   }
// })

// Registro
router.post('/register', async (req, res) => {
  try {
    console.log('Recibida petición de registro:', req.body)
    
    const { email, password, nombre, apellido } = req.body
    
    if (!email || !password || !nombre || !apellido) {
      return res.status(400).json({ error: 'Todos los campos son requeridos' })
    }
    
    // Verificar si el usuario ya existe
    const existingUser = await prisma.users.findUnique({
      where: { email }
    })
    
    if (existingUser) {
      return res.status(409).json({ error: 'Ya existe un usuario con este email' })
    }
    
    // Hash de la contraseña
    const hashedPassword = await bcrypt.hash(password, 10)
    
    const user = await prisma.users.create({
      data: {
        email,
        password: hashedPassword,
        nombre,
        apellido
      }
    })
    
    // Crear token
    const token = jwt.sign(
      { userId: user.id, email: user.email },
      JWT_SECRET,
      { expiresIn: '24h' }
    )
    
    res.status(201).json({
      message: 'Usuario creado exitosamente',
      token,
      user: {
        id: user.id,
        email: user.email,
        nombre: user.nombre,
        apellido: user.apellido
      }
    })
  } catch (error) {
    console.error('Error en registro:', error)
    res.status(500).json({ error: 'Error al crear usuario: ' + (error as Error).message })
  }
})

// Login
router.post('/login', async (req, res) => {
  try {
    console.log('Recibida petición de login:', req.body)
    
    const { email, password } = req.body
    
    if (!email || !password) {
      return res.status(400).json({ error: 'Email y contraseña son requeridos' })
    }
    
    const user = await prisma.users.findUnique({
      where: { email }
    })
    
    if (!user) {
      return res.status(401).json({ error: 'Credenciales inválidas' })
    }
    
    const isValidPassword = await bcrypt.compare(password, user.password)
    
    if (!isValidPassword) {
      return res.status(401).json({ error: 'Credenciales inválidas' })
    }
    
    const token = jwt.sign(
      { userId: user.id, email: user.email },
      JWT_SECRET,
      { expiresIn: '24h' }
    )
    
    res.json({
      message: 'Login exitoso',
      token,
      user: {
        id: user.id,
        email: user.email,
        nombre: user.nombre,
        apellido: user.apellido
      }
    })
  } catch (error) {
    console.error('Error en login:', error)
    res.status(500).json({ error: 'Error en el login: ' + (error as Error).message })
  }
})

// Ruta de prueba
router.get('/test', (req, res) => {
  res.json({ message: 'Rutas de auth funcionando' })
})

export default router