import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import PingBanner from "../components/PingBanner"
import Navbar from "../components/Navbar"

const API_URL = import.meta.env.VITE_BACKEND_URL + ':' + import.meta.env.VITE_PORT

const Piezas = () => {
    const navigate = useNavigate()
    const [piezas, setPiezas] = useState([])
    const [showModal, setShowModal] = useState(false)
    const [showEditModal, setShowEditModal] = useState(false)
    const [editPieza, setEditPieza] = useState<any>(null)
    const [menuOpenId, setMenuOpenId] = useState<number | null>(null)
    
    // Función para obtener piezas
    const fetchPiezas = () => {
        fetch(`${API_URL}/piezas`)
        .then(res => res.json())
        .then(data => setPiezas(data))
        .catch(() => setPiezas([]))
    }

    useEffect(() => {
        fetchPiezas()
    }, [])

    const handleDelete = async (id: number) => {
        await fetch(`${API_URL}/piezas/${id}`, {
            method: "DELETE"
        })
        fetchPiezas() // Actualiza la lista
    }

    const handleEdit = (pieza: any) => {
        setEditPieza(pieza)
        setShowEditModal(true)
    }

    // Maneja el submit del formulario
    const handleCreate = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const form = e.currentTarget
        const nombre = (form.elements.namedItem("nombre") as HTMLInputElement).value
        const precio_mat_prima = Number((form.elements.namedItem("precio_mat_prima") as HTMLInputElement).value)
        // Agrega otros campos si los necesitas

        await fetch(`${API_URL}/piezas`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ nombre, precio_mat_prima })
        })

        setShowModal(false)
        fetchPiezas() // Actualiza la lista
    }
  
  return (
    <div>
      <Navbar />
      <div className="pt-16">
        <div className="flex items-center gap-4 mb-4 mt-2">
            <h1 className=" mx-5 text-4xl font-bold">Lista de piezas</h1>
            <button className="bg-pink-600 mt-2 text-white px-4 py-2 rounded hover:bg-pink-700 transition" onClick={() => setShowModal(true)}>
                Nueva
            </button>
        </div>

        {showModal && (
          <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 shadow-lg w-full max-w-md">
              <h2 className="text-lg font-bold mb-4">Crear nueva pieza</h2>
              <form onSubmit={handleCreate}>
                <input
                  name="nombre"
                  className="border p-2 w-full mb-2"
                  placeholder="Nombre"
                  required
                />
                <input
                  name="precio_mat_prima"
                  className="border p-2 w-full mb-2"
                  placeholder="Precio materia prima"
                  type="number"
                  required
                />
                {/* Agrega más campos según tu modelo */}
                <div className="flex justify-end gap-2 mt-4">
                  <button
                    type="button"
                    className="bg-gray-300 px-4 py-2 rounded"
                    onClick={() => setShowModal(false)}
                  >
                    Cancelar
                  </button>
                  <button
                    type="submit"
                    className="bg-pink-600 text-white px-4 py-2 rounded hover:bg-pink-700 transition"
                  >
                    Crear
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

       
        <ul>
            {piezas.map((pieza: any) => (
                <li key={pieza.id} className="border-b py-2 pl-8 flex items-center justify-between">
                <span>
                    <strong>{pieza.nombre}</strong> - ${pieza.precio_mat_prima}
                </span>
                <div className="relative">
                    <button
                    className="text-gray-500 hover:text-gray-600 px-3 py-1 pr-5 rounded-full text-ellipsis"
                    onClick={() => setMenuOpenId(menuOpenId === pieza.id ? null : pieza.id)}
                    >
                    &#8230;
                    </button>
                    {menuOpenId === pieza.id && (
                        <div className="absolute right-0 mt-2 w-32 bg-white border rounded shadow-lg z-10">
                            <button
                            className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                            onClick={() => handleEdit(pieza)}
                            >
                            Editar
                            </button>
                            <button
                            className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-red-600"
                            onClick={() => handleDelete(pieza.id)}
                            >
                            Borrar
                            </button>
                        </div>
                    )}
                </div>
                </li>
            ))}
        </ul>
        
        {showEditModal && editPieza && (
            <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
                <div className="bg-white rounded-lg p-6 shadow-lg w-full max-w-md">
                <h2 className="text-lg font-bold mb-4">Editar pieza</h2>
                <form
                    onSubmit={async (e) => {
                    e.preventDefault()
                    const form = e.currentTarget
                    const nombre = (form.elements.namedItem("nombre") as HTMLInputElement).value
                    const precio_mat_prima = Number((form.elements.namedItem("precio_mat_prima") as HTMLInputElement).value)
                    const plano_pleg_DWG = (form.elements.namedItem("plano_pleg_DWG") as HTMLInputElement).value
                    const plano_pleg_SOLID = (form.elements.namedItem("plano_pleg_SOLID") as HTMLInputElement).value
                    const plano_laser_DXF = (form.elements.namedItem("plano_laser_DXF") as HTMLInputElement).value
                    const cte_ganancia = Number((form.elements.namedItem("cte_ganancia") as HTMLInputElement).value)

                    await fetch(`${API_URL}/piezas/${editPieza.id}`, {
                        method: "PUT",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({
                        nombre,
                        precio_mat_prima,
                        plano_pleg_DWG,
                        plano_pleg_SOLID,
                        plano_laser_DXF,
                        cte_ganancia
                        })
                    })
                    setShowEditModal(false)
                    setEditPieza(null)
                    fetchPiezas()
                    }}
                >
                    <input
                    name="nombre"
                    className="border p-2 w-full mb-2"
                    placeholder="Nombre"
                    defaultValue={editPieza.nombre || ""}
                    />
                    <input
                    name="precio_mat_prima"
                    className="border p-2 w-full mb-2"
                    placeholder="Precio materia prima"
                    type="number"
                    defaultValue={editPieza.precio_mat_prima || ""}
                    />
                    <input
                    name="plano_pleg_DWG"
                    className="border p-2 w-full mb-2"
                    placeholder="Plano plegado DWG"
                    defaultValue={editPieza.plano_pleg_DWG || ""}
                    />
                    <input
                    name="plano_pleg_SOLID"
                    className="border p-2 w-full mb-2"
                    placeholder="Plano plegado SOLID"
                    defaultValue={editPieza.plano_pleg_SOLID || ""}
                    />
                    <input
                    name="plano_laser_DXF"
                    className="border p-2 w-full mb-2"
                    placeholder="Plano laser DXF"
                    defaultValue={editPieza.plano_laser_DXF || ""}
                    />
                    <input
                    name="cte_ganancia"
                    className="border p-2 w-full mb-2"
                    placeholder="Coeficiente ganancia"
                    type="number"
                    step="any"
                    defaultValue={editPieza.cte_ganancia || ""}
                    />
                    <div className="flex justify-end gap-2 mt-4">
                    <button
                        type="button"
                        className="bg-gray-300 px-4 py-2 rounded"
                        onClick={() => {
                        setShowEditModal(false)
                        setEditPieza(null)
                        }}
                    >
                        Cancelar
                    </button>
                    <button
                        type="submit"
                        className="bg-pink-600 text-white px-4 py-2 rounded hover:bg-pink-700 transition"
                    >
                        Guardar cambios
                    </button>
                    </div>
                </form>
                </div>
            </div>
            )}

      </div>
    </div>
  )
}

export default Piezas