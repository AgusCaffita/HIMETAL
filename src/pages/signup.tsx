import {useNavigate} from "react-router-dom"
import PingBanner from "../components/PingBanner"

const SignUp = () => {
    const navigate = useNavigate();
    return(
        <div>
            <div className="text-pink-600 text-5xl font-bold m-10">
                    <h2>HIMetal</h2>
                </div>
            <p className="bg-blue-300">Estas en el signup </p>
            <button onClick={() => navigate("/in")} className="m-4 hover:text-pink-600">Hacer factura</button>
            <button onClick={() => navigate("/arts")} className="m-4 hover:text-pink-600">Ver articulos</button>
            <button onClick={() => navigate("/pcs")} className="m-4 hover:text-pink-600">Ver piezas</button>
            <PingBanner />
        </div>
    );
};

export default SignUp;