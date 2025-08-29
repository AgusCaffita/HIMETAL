import {useNavigate} from "react-router-dom"
import PingBanner from "../components/PingBanner"

const Home = () => {
    const navigate = useNavigate();
    return(
        <div>
            <div className="text-pink-600 text-5xl font-bold m-10">
                <h2>HIMetal</h2>
            </div>
            <p className="bg-blue-300">Estas en la pagina principal </p>
            <button onClick={() => navigate("/invoicer")} className="m-4 hover:text-pink-600">Hacer factura</button>
            <button onClick={() => navigate("/articulos")} className="m-4 hover:text-pink-600">Ver articulos</button>
            <button onClick={() => navigate("/piezas")} className="m-4 hover:text-pink-600">Ver piezas</button>
            <button onClick={() => navigate("/user")} className="m-4 hover:text-pink-600">Ver perfil</button>
            <PingBanner />
        </div>
    );
};

export default Home;