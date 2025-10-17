import { useState } from "react"
import { Link } from "react-router-dom"
import {useNavigate} from "react-router-dom" 

const Footer = () => {
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed left-0 w-full z-50 bg-gray-500 text-gray-100 px-4 py-3 h-20 flex items-center justify-between fixed bottom-0">
        <footer className="background-color: #f1f1f1; padding: 20px; text-align: center; color: #333; font-family: Arial, sans-serif;">
            <div className="h-16">
              <p>Teléfono: +1 234 567 890</p>
              <p>Email: contacto@ejemplo.com</p>
              <p>Dirección: Calle Falsa 123, Ciudad, País</p>
              <p>&copy; 2025 TuNombre. Todos los derechos reservados.</p>
            </div>
        </footer>

    </nav>
  )
}

export default Footer