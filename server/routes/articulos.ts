/*import {db} from '../db.ts'
import {Router} from 'express'

const router = Router()

//GET para listar
router.get('/arts', (req, res) =>{
    db.query('SELECT * FROM articulos', (err, reults) => {
        if(err) return res.status(500).json({error: 'Error al obtener articulos'})
        res.json(res)
    })
})




//POST para agregar
router.post('/arts', (req, res) =>{
    const (him_codigo, cli_codigo, nombre, cant_piezas, plano, precio, cte_ganancia)

    const sql = INSERT INTO articulos (him_codigo, cli_codigo, nombre, cant_piezas, plano, precio, cte_ganancia) VALUES(?, ?, ?, ?, ?, ?, ?)
    )
})
*/