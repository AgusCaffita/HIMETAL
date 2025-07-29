import {useNavigate} from "react-router-dom"
import { useEffect, useState } from 'react';



interface Articulo {
  himCodigo: string;
  cliCodigo: string;
  nombre: string;
  cant_piezas: number;
  plano: string;
  precio: number;
  cteGanancia: number;
}

{/*export const ListaArticulos = () => {
    return(
        <div>
            <div>anda bien    </div>
            <div className="bg-red-400">y el tailwind tmbn</div>
        </div>
    )
}

export default ListaArticulos;*/}

export default function Articulos() {
    const [articulos, setArticulos] = useState<Articulo[]>([]);
    const navigate = useNavigate();


    useEffect(() => {
        fetch('http://localhost:3000/articulos')
        .then(res => res.json())
        .then(data => setArticulos(data));
    }, []);

    return (
        <div>
            <button onClick={() => navigate("/")} className="hover:text-purple-300">volver al inicio</button>
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
                    <tr key={articulo.himCodigo}>
                    <td className="p-2 border">{articulo.himCodigo}</td>
                    <td className="p-2 border">{articulo.cliCodigo}</td>
                    <td className="p-2 border">{articulo.nombre}</td>
                    <td className="p-2 border">{articulo.cant_piezas}</td>
                    <td className="p-2 border">{articulo.plano}</td>
                    <td className="p-2 border">${articulo.precio}</td>
                    <td className="p-2 border">{articulo.cteGanancia}%</td>
                    </tr>
                ))}
                </tbody>
            </table>
            </div>
        </div>
    );
}

