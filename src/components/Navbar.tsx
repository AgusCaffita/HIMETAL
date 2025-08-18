import { useState } from "react"
import { Link } from "react-router-dom"
import {useNavigate} from "react-router-dom" 

const Navbar = () => {
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-pink-600 text-white px-4 py-3 flex items-center justify-between">
      <Link to="/" className="font-bold text-2xl">HIMetal</Link>
      <button
        className="md:hidden text-2xl"
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
      >
        ☰
      </button>
      <div className={`flex-col md:flex-row md:flex gap-4 ${open ? "flex" : "hidden"} md:items-center`}>
        <Link to="/" className="hover:text-pink-200">Pagina principal</Link>
        <Link to="/in" className="hover:text-pink-200">Hacer factura</Link>
        <Link to="/pcs" className="hover:text-pink-200">Ver pcs</Link>
        <Link to="/arts" className="hover:text-pink-200">Ver artículos</Link>
      </div>
    </nav>
  )
}

export default Navbar