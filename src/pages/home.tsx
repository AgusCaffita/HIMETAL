import {useNavigate} from "react-router-dom"

const Home = () => {
    const navigate = useNavigate();
    const handlePrint = () => {
    window.print()
  }


    return(
        <div>
            <h1 className="text-white font-bold">holaholahola</h1>
            <p className="bg-green-800">inicio </p>
            <button onClick={() => navigate("/in")}>kkk</button>
        </div>
    );
};

export default Home;