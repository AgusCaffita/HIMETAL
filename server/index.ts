import express from 'express'
import cors from 'cors'
import path from 'path'
import { fileURLToPath } from 'url'
import authRoutes from './routes/auth.js'
import articulosRoutes from './routes/articulos.js'
import piezasRoutes from './routes/piezas.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()
const PORT = process.env.VITE_BACKEND_PORT || 5174

// Middleware
app.use(cors())
app.use(express.json())

// Servir archivos estáticos desde la carpeta uploads
app.use('/uploads', express.static(path.join(__dirname, 'uploads')))

// Rutas
app.use('/auth', authRoutes)
app.use('/articulos', articulosRoutes)
app.use('/piezas', piezasRoutes)

// Ruta de prueba
app.get('/', (req, res) => {
  res.json({ message: 'API funcionando correctamente' })
})

// Ruta ping para el frontend
app.get('/ping', (req, res) => {
  res.json({ message: 'pong', status: 'ok' })
})

app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`)
})

