import multer from 'multer'
import path from 'path'
import { fileURLToPath } from 'url'
import { Request } from 'express'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Configuración de almacenamiento para multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    // Crear diferentes carpetas según el tipo de archivo
    const uploadPath = path.join(__dirname, '../uploads/planos')
    cb(null, uploadPath)
  },
  filename: (req, file, cb) => {
    // Generar nombre único para el archivo
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    const ext = path.extname(file.originalname)
    const name = file.fieldname + '-' + uniqueSuffix + ext
    cb(null, name)
  }
})

// Filtro de archivos (opcional - por ahora acepta cualquier tipo)
const fileFilter = (req: Request, file: Express.Multer.File, cb: multer.FileFilterCallback) => {
  // Por ahora aceptamos cualquier tipo de archivo
  // Puedes agregar validaciones específicas aquí si necesitas
  cb(null, true)
}

// Configuración de multer
const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
  limits: {
    fileSize: 10 * 1024 * 1024 // Límite de 10MB por archivo
  }
})

export default upload
