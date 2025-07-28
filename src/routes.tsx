import Home from "./pages/home"
import Invoicer from "./pages/invoicer"
import {
  Routes,
  Route,
} from "react-router-dom";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/in" element={<Invoicer />} />
    </Routes>
  )
}

export default AppRoutes