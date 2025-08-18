import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Login from './pages/login'
import SignUp from './pages/signup'
//import Articulos from './pages/articulos'
import Piezas from './pages/piezas'
// Importa otros componentes que necesites

import './index.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        {/* <Route path="/arts" element={<Articulos />} /> */}
        <Route path="/pcs" element={<Piezas />} />
        {/* Agrega más rutas según las necesites */}
      </Routes>
    </Router>
  )
}

export default App
