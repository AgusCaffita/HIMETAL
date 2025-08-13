import express from 'express'
import cors from 'cors'


const app = express();
app.use(cors())
app.use(express.json())

app.get('/ping', (req, res) => {
  res.json({ status: 'ok' })
})

//crud articulos


app.listen(3000, () => {
  console.log('sv anda')
})

