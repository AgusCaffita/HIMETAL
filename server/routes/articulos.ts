//import {PrismaClient} from '@prisma/client'
import { PrismaClient } from '../generated/prisma'

import express from 'express'

const prisma = new PrismaClient();
const router = express.Router()



export default router