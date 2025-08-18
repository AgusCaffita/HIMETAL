import express from 'express'
import cors from 'cors'
import piezasRouter from './routes/piezas'
import routerArticulos from './routes/articulos'

const app = express();
app.use(cors())
app.use(express.json())

app.get('/ping', (req, res) => {
  res.json({ status: 'ok' })
})

// CRUD piezas
app.use('/piezas', piezasRouter)

app.use('/articulos', routerArticulos)

app.listen(3000, () => {
  console.log('sv anda')
})

