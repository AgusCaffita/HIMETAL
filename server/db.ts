import {PrismaClient} from '@prisma/client'
import express from 'express'

const app = express()
const prisma = new PrismaClient();

app.use(express.json());

app.post('/arts', async (req,res) => {
  try{
    const nuevo = await prisma.articulo.create({
      data:{nombre:'pan' , precio:111},
    })
    res.json(nuevo)
  }catch(error){
    console.error('EEL ERROR ES:', error)
    res.status(500).json({error})
  }
})

app.listen(3001, () =>{
  console.log('ESCUCHANDOOOOOOOOOOOOOOOOOO')
})

/*import mysql from "mysql2";
/*export const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "himetal2025", 
  database: "himetal"  
});

db.connect((err) => {
  if (err) {
    console.error("Error al conectar a la base de datos:", err);
    return;
  }
  console.log("Conectado a la base de datos");
});async function agregarArticulo(nombre, precio){
  const conexion = await mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "himetal2025", 
      database: "himetal"  
  })

  try{
    const [resultado] = await conexion.execute(
      'INSERT INTO articulos (nombre, precio) VALUES (?, ?)', [nombre, precio]
    )
    console.log('Art agregado corectamente')
  } catch{
    console.error('Error al agregar el art', Error)
  } finally{
    await conexion.end()
  }
}

agregarArticulo('manzana', 100)
*/