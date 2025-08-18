import Home from "./pages/home"
import Invoicer from "./pages/invoicer"
import Piezas from "./pages/piezas"
import Login from "./pages/login";
import SignUp from "./pages/signup";
import {
  Routes,
  Route,
} from "react-router-dom";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path= "/login" element={<Login />} />
      <Route path= "/signup" element={<SignUp />} />
      <Route path="/in" element={<Invoicer />} />
      <Route path="/pcs" element={<Piezas />} />

    </Routes>
  )
}

export default AppRoutes