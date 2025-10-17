import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import Navbar from "../components/Navbar"

const API_URL = import.meta.env.VITE_BACKEND_URL + ':' + (import.meta.env.VITE_BACKEND_PORT || '5174')

const User = () => {
    const userData = localStorage.getItem('user')
    const user = userData ? JSON.parse(userData) : null
    const navigate = useNavigate()
    const [pedidos, setPedidos] = useState<any[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState("")

    useEffect(() => {
        const fetchPedidos = async () => {
            setLoading(true)
            setError("")
            try {
                const token = localStorage.getItem('token')
                const res = await fetch(`${API_URL}/pedidos`, {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                })
                if (!res.ok) throw new Error("No se pudieron obtener los pedidos")
                const data = await res.json()
                setPedidos(data)
            } catch (err) {
                setError("Error al obtener pedidos")
            } finally {
                setLoading(false)
            }
        }
        fetchPedidos()
    }, [])

    return (
        <div className="min-h-screen">
            <Navbar />
            <h1 className="text-4xl font-bold mt-20 ml-3">Hola, {user?.nombre || 'invitado'}</h1>
            <div className="h-px bg-gray-300 my-4"></div>
            <div className="ml-3">
                <h2 className="text-2xl font-semibold">Pedidos anteriores:</h2>
                {loading && <div>Cargando pedidos...</div>}
                {error && <div className="text-red-500">{error}</div>}
                <ul className="ml-3 divide-y divide-black/5">
                    {pedidos.length === 0 && !loading && <li>No tienes pedidos previos.</li>}
                    {pedidos.map((pedido) => (
                        <li key={pedido.id} className="py-2 flex items-center justify-between">
                            <div>
                                <div>
                                    <span className="font-bold">Pedido #{pedido.id}</span> - Estado: <span className={`italic ${
                                        pedido.estado === 'Aprobado'
                                        ? 'text-green-500'
                                        : pedido.estado === 'Pendiente'
                                        ? 'text-yellow-600'
                                        : 'text-red-500'
                                    }`}
                                    >
  {pedido.estado}
</span>

                                </div>
                                <div>
                                    <ul className="ml-4 list-disc">
                                        {pedido.pedido_articulos.map((pa: any) => (
                                            <li key={pa.articulo.id}>
                                                {pa.articulo.codigo} - {pa.articulo.descripcion} (Cantidad: {pa.cantidad})
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <div className="min-w-[140px] text-right font-semibold pr-5">
                                {pedido.presupuesto !== null && pedido.presupuesto !== undefined
                                    ? <>${pedido.presupuesto}</>
                                    : <span className="italic text-yellow-600">Pendiente</span>
                                }
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default User
