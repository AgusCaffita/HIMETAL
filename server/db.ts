import mysql from "mysql2";

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
});*/async function agregarArticulo(nombre, precio){
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
