import {PrismaClient} from '@prisma/client'
import express from 'express'

const prisma = new PrismaClient();
const router = express.Router()

router.post('/', async (req, res) =>{
    try {
        const nuevo = await prisma.articulo.create({data: {nombre: 'agus', cant_piezas: 3}})
        res.json(nuevo)
    }catch (err){
        res.status(500).json({error: 'error al agregar'})
    }
})

export default router