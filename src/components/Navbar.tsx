import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import CartDropdown from "./CartDropdown";

const Navbar = () => {
  const [open, setOpen] = useState(false)
  const [isAdmin, setIsAdmin] = useState(false);

  // Función para decodificar JWT (base64url)
  const decodeJWT = (token: string) => {
    try {
      const base64Url = token.split('.')[1];
      const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
      const jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
      }).join(''));
      return JSON.parse(jsonPayload);
    } catch {
      return null;
    }
  };

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      const decoded = decodeJWT(token);
      if (decoded && decoded.rol === 'admin') {
        setIsAdmin(true);
      }
    }
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[var(--color-primary)] text-white px-4 py-3 h-20 flex items-center justify-between">
      <Link to="/" className="font-bold text-4xl">HIMetal</Link>
      <button
        className="md:hidden text-2xl"
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
      >
        ☰
      </button>
      <div className={`flex-col md:flex-row md:flex gap-4 ${open ? "flex" : "hidden"} md:items-center`}>
        <Link to="/home" className="hover:text-blue-200">Pagina principal</Link>
        {isAdmin && <Link to="/invoicer" className="hover:text-blue-200">Hacer factura</Link>}
        <Link to="/piezas" className="hover:text-blue-200">Ver piezas</Link>
        <Link to="/articulos" className="hover:text-blue-200">Ver artículos</Link>
        <Link to="/user" className="hover:text-blue-200">Ver perfil</Link>
        <div className="ml-2"><CartDropdown /></div>
      </div>
    </nav>
  )
}

export default Navbar