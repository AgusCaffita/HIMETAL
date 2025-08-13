import express from 'express'
import articulosRouter from './routes/articulos'
import cors from 'cors'


const app = express();
app.use(cors())
app.use(express.json())

app.use('/arts', articulosRouter)
app.get('/ping', (req, res) => {
  res.json({ status: 'ok' })
})

app.listen(3000, () => {
  console.log('sv anda')
})

