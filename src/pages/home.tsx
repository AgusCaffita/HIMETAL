import {useNavigate} from "react-router-dom"
import PingBanner from "../components/PingBanner"
import Footer from "../components/footer"

const Home = () => {
    const navigate = useNavigate();
    return (
        <div className="flex flex-col items-center justify-start min-h-screen text-center pt-20">
            <div className="text-[var(--color-primary)] text-6xl font-bold">
                <h2>HIMetal</h2>
            </div>

            <div className="mt-8">
                <button onClick={() => navigate("/invoicer")} className="my-2 mx-2 hover:text-blue-600 rounded-md border-2 border-gray-300 p-2">Hacer factura</button>
                <button onClick={() => navigate("/piezas")} className="my-2 mx-2 hover:text-blue-600 rounded-md border-2 border-gray-300 p-2">Ver piezas</button>
                <button onClick={() => navigate("/articulos")} className="my-2 mx-2 hover:text-blue-600 rounded-md border-2 border-gray-300 p-2">Ver artículos</button>
                <button onClick={() => navigate("/user")} className="my-2 mx-2 hover:text-blue-600 rounded-md border-2 border-gray-300 p-2">Ver perfil</button>
            </div>

            <PingBanner />
            <Footer />
        </div>
    );
};



export default Home;