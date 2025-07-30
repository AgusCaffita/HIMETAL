import {useNavigate} from "react-router-dom"

export default function Articulos(){
    const navigate = useNavigate()

    async function agregar(){
        try {
            const res = await fetch('http://localhost:3000/arts', {method: 'POST'})

        if (!res.ok) throw new Error('fallo al agregar')

            const data = await res.json()
            alert('art agregado yeyyy :D')
        }catch(err){
            alert('erro :(')
        }
    }

    return(
        <div><button onClick={agregar}>AGREGAR ARTICULO ACA</button></div>
    )
}

/*
export default function App(){
    async function agregarArticulo(){
        try{
            const res = await fetch('http://localhost:5173/arts',{ method: 'POST'})
            const data = await res.json();
            alert('ART AGREGADO')
        } catch (error){
            alert('Error al agregar el art')
        }
    }

    return(<div><button onClick={agregarArticulo}>AGREGAR ARTICULO ACA</button></div>)
}

/*interface Articulo {
  him_codigo: string;
  cli_codigo: string;
  nombre: string;
  cant_piezas: number;
  plano: string;
  precio: number;
  cte_ganancia: number;
}

{/*export const ListaArticulos = () => {
    return(
        <div>
            <div>anda bien    </div>
            <div className="bg-red-400">y el tailwind tmbn</div>
        </div>
    )
}

export default ListaArticulos;}

/*export default function Articulos() {
    const [articulos, setArticulos] = useState<Articulo[]>([]);
    const navigate = useNavigate();
    const creari = crear;

   /* useEffect(() => {
        fetch('http://localhost:5173/articulos')
        .then(res => res.json())
        .then(data => setArticulos(data));
    }, []);

    return (
        <div>
            <button onClick={() => navigate("/")} className="hover:text-purple-300">volver al inicio</button>
            <button onClick={() => creari} className="hover:text-purple-300">volver al inicio</button>
            <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Lista de Artículos</h1>
            <table className="w-full border border-gray-300">
                <thead>
                <tr className="bg-gray-200">
                    <th className="p-2 border">Código</th>
                    <th className="p-2 border">Cliente</th>
                    <th className="p-2 border">Nombre</th>
                    <th className="p-2 border">Piezas</th>
                    <th className="p-2 border">Plano</th>
                    <th className="p-2 border">Precio</th>
                    <th className="p-2 border">Ganancia</th>
                </tr>
                </thead>
                <tbody>
                {articulos.map((articulo) => (
                    <tr key={articulo.him_codigo}>
                    <td className="p-2 border">{articulo.him_codigo}</td>
                    <td className="p-2 border">{articulo.cli_codigo}</td>
                    <td className="p-2 border">{articulo.nombre}</td>
                    <td className="p-2 border">{articulo.cant_piezas}</td>
                    <td className="p-2 border">{articulo.plano}</td>
                    <td className="p-2 border">${articulo.precio}</td>
                    <td className="p-2 border">{articulo.cte_ganancia}%</td>
                    </tr>
                ))}
                </tbody>
            </table>
            </div>
        </div>
    );
}
*/
