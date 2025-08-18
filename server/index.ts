import express from 'express'
import cors from 'cors'
import authRoutes from './routes/auth.js'
import articulosRoutes from './routes/articulos.js'
import piezasRoutes from './routes/piezas.js'

const app = express()
const PORT = process.env.VITE_BACKEND_PORT || 5174

// Middleware
app.use(cors())
app.use(express.json())

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

