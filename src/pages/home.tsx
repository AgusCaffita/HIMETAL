import {useNavigate} from "react-router-dom"
import PingBanner from "../components/PingBanner"
import Footer from "../components/footer"

const Home = () => {
    const navigate = useNavigate();
    return(
        <div>
            <div className="text-[var(--color-primary)] text-6xl font-bold mt-10 ml-10">
                <h2>HIMetal</h2>
            </div>
            <button onClick={() => navigate("/invoicer")} className="m-4 hover:text-blue-600 rounded-md border-2 border-gray-300">Hacer factura</button>
            <button onClick={() => navigate("/piezas")} className="m-4 hover:text-blue-600">Ver piezas</button>
            <button onClick={() => navigate("/articulos")} className="m-4 hover:text-blue-600">Ver articulos</button>
            <button onClick={() => navigate("/user")} className="m-4 hover:text-blue-600">Ver perfil</button>
            <PingBanner />

            <Footer />
        </div>
    );
};

export default Home;