import Home from "./pages/home"
import Invoicer from "./pages/invoicer"
import ListaArticulos from "./pages/articulos"
import {
  Routes,
  Route,
} from "react-router-dom";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/in" element={<Invoicer />} />
      <Route path="/arts" element={<ListaArticulos />} />
    </Routes>
  )
}

export default AppRoutes