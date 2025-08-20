import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import Navbar from "../components/Navbar"

const API_URL = import.meta.env.VITE_BACKEND_URL + ':' + (import.meta.env.VITE_BACKEND_PORT || '5174')

const Articulos = () => {
    const navigate = useNavigate()
    const [articulos, setArticulos] = useState([])
    const [showModal, setShowModal] = useState(false)
    const [showEditModal, setShowEditModal] = useState(false)
    const [editArticulo, setEditArticulo] = useState<any>(null)
    const [menuOpenId, setMenuOpenId] = useState<number | null>(null)
    


    // Función para obtener el token
    const getAuthHeaders = () => {
        const token = localStorage.getItem('token')
        return {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    }
    
    // Función para obtener piezas
    const fetchArticulos = () => {
        const token = localStorage.getItem('token')
        if (!token) {
            navigate('/login')
            return
        }

        fetch(`${API_URL}/articulos`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        .then(res => {
            if (res.status === 401) {
                navigate('/login')
                return
            }
            return res.json()
        })
        .then(data => data && setArticulos(data))
        .catch(() => setArticulos([]))
    }

    useEffect(() => {
        fetchArticulos()
    }, [])

    const handleDelete = async (id: number) => {
        const token = localStorage.getItem('token')
        if (!token) {
            navigate('/login')
            return
        }

        try {
            const response = await fetch(`${API_URL}/articulos/${id}`, {
                method: "DELETE",
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
            
            if (response.status === 401) {
                navigate('/login')
                return
            }
            
            fetchArticulos() // Actualiza la lista
        } catch (error) {
            console.error('Error al eliminar articulo:', error)
        }
    }

    const handleEdit = (articulo: any) => {
        setEditArticulo(articulo)
        setShowEditModal(true)
    }

    // Maneja el submit del formulario
    const handleCreate = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const token = localStorage.getItem('token')
        if (!token) {
            navigate('/login')
            return
        }

        const form = e.currentTarget
        const codigo = Number((form.elements.namedItem("codigo") as HTMLInputElement).value)
        const descripcion = (form.elements.namedItem("descripcion") as HTMLInputElement).value
        const cant_piezas = Number((form.elements.namedItem("cant_piezas") as HTMLInputElement).value)
        const plano = (form.elements.namedItem("plano") as HTMLInputElement).value
        const cte_ganancia = Number((form.elements.namedItem("cte_ganancia") as HTMLInputElement).value)
        const precio = Number((form.elements.namedItem("precio") as HTMLInputElement).value)
       
                   

        try {
            const response = await fetch(`${API_URL}/articulos`, {
                method: "POST",
                headers: getAuthHeaders(),
                body: JSON.stringify({ 
                    codigo,
                    descripcion,
                    cant_piezas,
                    plano,
                    cte_ganancia,
                    precio
                })
            })

            if (response.status === 401) {
                navigate('/login')
                return
            }

            if (response.ok) {
                setShowModal(false)
                fetchArticulos() // Actualiza la lista
            } else {
                console.error('Error al crear articulo:', await response.text())
            }
        } catch (error) {
            console.error('Error al crear articulo:', error)
        }
    }
  
  return (
    <div>
      <Navbar />
      <div className="pt-16">
        <div className="flex items-center gap-4 mb-4 mt-2">
            <h1 className=" mx-5 text-4xl font-bold">Lista de articulos</h1>
            <button className="bg-pink-600 mt-2 text-white px-4 py-2 rounded hover:bg-pink-700 transition" onClick={() => setShowModal(true)}>
                Nueva
            </button>
        </div>

        {showModal && (
          <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 shadow-lg w-full max-w-md">
              <h2 className="text-lg font-bold mb-4">Crear nueva articulo</h2>
              <form onSubmit={handleCreate}>
                <input
                  name="codigo"
                  className="border p-2 w-full mb-2"
                  placeholder="Codigo"
                  type="number"
                  required
                />
                <input
                  name="descripcion"
                  className="border p-2 w-full mb-2"
                  placeholder="Descripcion"
                />
                <input
                  name="precio"
                  className="border p-2 w-full mb-2"
                  type="number"
                  placeholder="Precio"
                />
                <input
                  name="cant_piezas"
                  className="border p-2 w-full mb-2"
                  type="number"
                  placeholder="Cantidad de piezas"
                />
                <input
                  name="plano"
                  className="border p-2 w-full mb-2"
                  type="file"
                  placeholder="Plano"
                />
                <input
                  name="cte_ganancia"
                  className="border p-2 w-full mb-2"
                  placeholder="Coeficiente ganancia"
                  type="number"
                  step="any"
                />
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
                  //BOTON DE CREAR NO HACE NADA(?)
                  >
                    Crear
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

       
        <ul>
            {articulos.map((articulo: any) => (
                <li key={articulo.id} className="border-b py-2 pl-8 flex items-center justify-between">
                <span>
                    <strong>{articulo.descripcion}</strong> - ${articulo.precio}
                </span>
                <div className="relative">
                    <button
                    className="text-gray-500 hover:text-gray-600 px-3 py-1 pr-5 rounded-full text-ellipsis"
                    onClick={() => setMenuOpenId(menuOpenId === articulo.id ? null : articulo.id)}
                    >
                    &#8230;
                    </button>
                    {menuOpenId === articulo.id && (
                        <div className="absolute right-0 mt-2 w-32 bg-white border rounded shadow-lg z-10">
                            <button
                            className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                            onClick={() => handleEdit(articulo)}
                            >
                            Editar
                            </button>
                            <button
                            className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-red-600"
                            onClick={() => handleDelete(articulo.id)}
                            >
                            Borrar
                            </button>
                        </div>
                    )}
                </div>
                </li>
            ))}
        </ul>
        
        {showEditModal && editArticulo && (
            <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
                <div className="bg-white rounded-lg p-6 shadow-lg w-full max-w-md">
                <h2 className="text-lg font-bold mb-4">Editar articulo</h2>
                <form
                    onSubmit={async (e) => {
                    e.preventDefault()
                    const token = localStorage.getItem('token')
                    if (!token) {
                        navigate('/login')
                        return
                    }

                    const form = e.currentTarget
                    const codigo = Number((form.elements.namedItem("codigo") as HTMLInputElement).value)
                    const descripcion = (form.elements.namedItem("descripcion") as HTMLInputElement).value
                    const cant_piezas = Number((form.elements.namedItem("cant_piezas") as HTMLInputElement).value)
                    const plano = (form.elements.namedItem("plano") as HTMLInputElement).value
                    const cte_ganancia = Number((form.elements.namedItem("cte_ganancia") as HTMLInputElement).value)
                    const precio = Number((form.elements.namedItem("precio") as HTMLInputElement).value)

                    try {
                        const response = await fetch(`${API_URL}/articulos/${editArticulo.id}`, {
                            method: "PUT",
                            headers: getAuthHeaders(),
                            body: JSON.stringify({
                            descripcion,
                            codigo,
                            cant_piezas,
                            plano,
                            cte_ganancia,
                            precio
                            })
                        })

                        if (response.status === 401) {
                            navigate('/login')
                            return
                        }

                        if (response.ok) {
                            setShowEditModal(false)
                            setEditArticulo(null)
                            fetchArticulos()
                        }
                    } catch (error) {
                        console.error('Error al editar articulo:', error)
                    }
                    }}
                >
                    <input
                    name="codigo"
                    className="border p-2 w-full mb-2"
                    placeholder="codigo"
                    type="number"
                    defaultValue={editArticulo.codigo || ""}
                    />

                    <input
                    name="descripcion"
                    className="border p-2 w-full mb-2"
                    placeholder="descripcion"
                    defaultValue={editArticulo.descripcion || ""}
                    />
                    <input
                    name="precio"
                    className="border p-2 w-full mb-2"
                    placeholder="precio"
                    type="number"
                    defaultValue={editArticulo.precio || ""}
                    />
                    <input
                    name="cant_piezas"
                    className="border p-2 w-full mb-2"
                    placeholder="cantidad de piezas"
                    type="number"
                    defaultValue={editArticulo.cant_piezas || ""}
                    />
                    <input
                    name="plano"
                    className="border p-2 w-full mb-2"
                    placeholder="plano"
                    defaultValue={editArticulo.plano || ""}
                    />
                    
                    <input
                    name="cte_ganancia"
                    className="border p-2 w-full mb-2"
                    placeholder="Constante de ganancia"
                    type="number"
                    step="any"
                    defaultValue={editArticulo.cte_ganancia || ""}
                    />
                    <div className="flex justify-end gap-2 mt-4">
                    <button
                        type="button"
                        className="bg-gray-300 px-4 py-2 rounded"
                        onClick={() => {
                        setShowEditModal(false)
                        setEditArticulo(null)
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

export default Articulos