import {useNavigate} from "react-router-dom"

const Home = () => {
    const navigate = useNavigate();
    return(
        <div>
            <div className="text-pink-600 text-5xl font-bold m-10">
                    <h2>HIMetal</h2>
                </div>
            <p className="bg-blue-300">Estas en la pagina principal </p>
            <button onClick={() => navigate("/in")} className="m-4 hover:text-pink-600">Hacer factura</button>
            <button onClick={() => navigate("/arts")} className="m-4 hover:text-pink-600">Ver articulos</button>
        </div>
    );
};

export default Home;