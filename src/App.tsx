import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Home from "./pages/home"
import Invoicer from "./pages/invoicer"
import Piezas from "./pages/piezas"
import Login from "./pages/login";
import SignUp from "./pages/signup";
import Arts from "./pages/articulos"

import './index.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path= "/signup" element={<SignUp />} />
        <Route path="/home" element={<Home />} />
        <Route path="/invoicer" element={<Invoicer />} />
        <Route path="/piezas" element={<Piezas />} />
        <Route path='/articulos' element={<Arts/>} />

      </Routes>
    </Router>
  )
}

export default App
