import express from 'express'
import articulosRouter from './routes/articulos'
import cors from 'cors'


const app = express();
app.use(cors())
app.use(express.json())

app.use('/arts', articulosRouter)

app.listen(3000, () => {
  console.log('sv anda')
})

