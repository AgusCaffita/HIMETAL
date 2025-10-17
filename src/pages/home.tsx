import {useNavigate} from "react-router-dom"
import { useState, useEffect } from "react"
import PingBanner from "../components/PingBanner"
import Footer from "../components/footer"

// Función para decodificar JWT
const decodeJWT = (token: string) => {
    try {
        const payload = JSON.parse(atob(token.split('.')[1]));
        return payload;
    } catch {
        return null;
    }
};

const Home = () => {
    const navigate = useNavigate();
    const [isAdmin, setIsAdmin] = useState(false);

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
        <div className="flex flex-col items-center justify-start min-h-screen text-center pt-20">
            <div className="text-[var(--color-primary)] text-6xl font-bold">
                <h2>HIMetal</h2>
            </div>

            <div className="mt-8">
                {isAdmin && (
                    <button onClick={() => navigate("/invoicer")} className="my-2 mx-2 hover:text-blue-600 rounded-md border-2 border-gray-300 p-2">Hacer factura</button>
                )}
                <button onClick={() => navigate("/piezas")} className="my-2 mx-2 hover:text-blue-600 rounded-md border-2 border-gray-300 p-2">Ver piezas</button>
                <button onClick={() => navigate("/articulos")} className="my-2 mx-2 hover:text-blue-600 rounded-md border-2 border-gray-300 p-2">Ver artículos</button>
                <button onClick={() => navigate("/user")} className="my-2 mx-2 hover:text-blue-600 rounded-md border-2 border-gray-300 p-2">Ver perfil</button>
            </div>

            {isAdmin && <PingBanner />}
            <Footer />
        </div>
    );
};



export default Home;