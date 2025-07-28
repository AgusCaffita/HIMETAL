import {useNavigate} from "react-router-dom"
import {useArticulos} from '../hooks/useArticulos';

export const ListaArticulos = () => {
    const {articulos, loading, error} = useArticulos();

    if (loading) return <div>cargando :D</div>
    if (error) return <div>nuanda, errorrr {error}</div>

    return(
        <div>
            <div>anda bien    </div>
            <div className="bg-red-400">y el tailwind tmbn</div>
        </div>
    )
}

export default ListaArticulos;