import {useNavigate} from "react-router-dom"
import Navbar from "../components/Navbar";

const User = () => {
    const navigate = useNavigate();
    return(
        <div>
            <Navbar></Navbar>
            <h1 className="mt-20">Hola estas en la pagina de usuario</h1>
        </div>
    )
}

export default User
