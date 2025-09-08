import {useNavigate} from "react-router-dom"
import Navbar from "../components/Navbar";

const User = () => {
    const userData = localStorage.getItem('user')
    const user = userData ? JSON.parse(userData) : null
    const navigate = useNavigate();
    return(
        <div className="min-h-screen">
            <Navbar></Navbar>
            <h1 className="text-4xl font-bold mt-20">Hola, {user?.nombre || 'invitado'}</h1>

            <div className="h-px bg-gray-300 my-4"></div>
            <h2 className="text-2xl font-semibold">Pedidos anteriores:</h2>
            <ul className="ml-3 divide-y divide-black/5">
                <li>Coffee</li>
                <li>Tea</li>
                <li>Milk</li>
            </ul>
        </div>
    )
}

export default User
