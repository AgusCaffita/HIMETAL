import {useNavigate} from "react-router-dom"

const Home = () => {
    const navigate = useNavigate();
    


    return(
        <div>
            <div className="text-red-600 text-5xl font-bold m-10">
                    <h2>HIMetal</h2>
                </div>
            <p className="bg-green-800">inicio </p>
            <button onClick={() => navigate("/in")}>Hacer factura</button>
            <button onClick={() => navigate("/arts")}>Ver articulos</button>
        </div>
    );
};

export default Home;