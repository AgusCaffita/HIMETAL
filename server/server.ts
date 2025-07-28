import express from "express";
import cors from "cors";
import mysql from "mysql2";


const app = express();

app.get('/', (req, res) => {
  res.sendFile("../src/pages/invoicer.tsx")
})
/*app.use(cors());
app.use(express.json());

const dbConfig = {
    host: 'localhost',
    user: 'root',
    password: 'himetal2025',
    database: 'himetal',  
}

app.get("/api/productos", async (req, res) => {
    try {
    const connection = await mysql.createConnection(dbConfig);
    const [rows] = await connection.execute('SELECT * FROM articulos');
    await connection.end();
    res.json(rows);
    } catch(error){
        res.status(500).json({error: 'error en la consulta'});
    }
});

app.listen(3001, () => {
    console.log("SV escuchando");
});*/