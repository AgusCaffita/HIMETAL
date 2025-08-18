import { useState } from "react"
import { useNavigate } from "react-router-dom"
import PingBanner from "../components/PingBanner"

const API_URL = import.meta.env.VITE_BACKEND_URL + ':' + (import.meta.env.VITE_BACKEND_PORT || '5174')

const SignUp = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        nombre: "",
        apellido: ""
    })
    const [error, setError] = useState("")
    const [success, setSuccess] = useState("")
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormEvent>) => {
        e.preventDefault()
        setError("")
        setSuccess("")
        setLoading(true)

        console.log('Enviando datos a:', `${API_URL}/auth/register`)
        console.log('Datos:', formData)

        try {
            const response = await fetch(`${API_URL}/auth/register`, {
                method: 'POST',
                headers: { 
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(formData)
            })

            console.log('Response status:', response.status)
            console.log('Response headers:', response.headers)

            // Verificar si la respuesta tiene contenido
            const contentType = response.headers.get('content-type')
            console.log('Content-Type:', contentType)

            if (!contentType || !contentType.includes('application/json')) {
                const text = await response.text()
                console.log('Response text:', text)
                throw new Error(`Servidor no devolvió JSON. Status: ${response.status}, Content: ${text}`)
            }

            if (response.ok) {
                const data = await response.json()
                console.log('Success data:', data)
                setSuccess("Cuenta creada exitosamente. Redirigiendo al login...")
                setTimeout(() => navigate("/login"), 2000)
            } else {
                const errorData = await response.json()
                console.log('Error data:', errorData)
                setError(errorData.error || `Error del servidor: ${response.status}`)
            }
        } catch (error) {
            console.error('Error completo:', error)
            setError(`Error de conexión: ${error.message}`)
        } finally {
            setLoading(false)
        }
    }

    return (
        <div>
            <div className="text-pink-600 text-5xl font-bold m-10">
                <h2>HIMetal</h2>
            </div>
            <p className="bg-blue-300">Estas en el signup </p>
            <button onClick={() => navigate("/in")} className="m-4 hover:text-pink-600">Hacer factura</button>
            <button onClick={() => navigate("/arts")} className="m-4 hover:text-pink-600">Ver articulos</button>
            <button onClick={() => navigate("/pcs")} className="m-4 hover:text-pink-600">Ver piezas</button>
            <PingBanner />
            <div className="flex items-center justify-center min-h-screen bg-gray-100">
                <form
                    onSubmit={handleSubmit}
                    className="bg-white p-8 rounded shadow-md w-full max-w-md"
                >
                    <div className="text-pink-600 text-3xl font-bold mb-6 text-center">
                        <h2>HIMetal - Registro</h2>
                    </div>

                    {error && (
                        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
                            {error}
                        </div>
                    )}

                    {success && (
                        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
                            {success}
                        </div>
                    )}

                    <input
                        type="text"
                        name="nombre"
                        placeholder="Nombre"
                        value={formData.nombre}
                        onChange={handleChange}
                        className="border p-3 w-full mb-4 rounded focus:outline-none focus:border-pink-500"
                        required
                        disabled={loading}
                    />

                    <input
                        type="text"
                        name="apellido"
                        placeholder="Apellido"
                        value={formData.apellido}
                        onChange={handleChange}
                        className="border p-3 w-full mb-4 rounded focus:outline-none focus:border-pink-500"
                        required
                        disabled={loading}
                    />

                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        className="border p-3 w-full mb-4 rounded focus:outline-none focus:border-pink-500"
                        required
                        disabled={loading}
                    />

                    <input
                        type="password"
                        name="password"
                        placeholder="Contraseña"
                        value={formData.password}
                        onChange={handleChange}
                        className="border p-3 w-full mb-6 rounded focus:outline-none focus:border-pink-500"
                        required
                        minLength={6}
                        disabled={loading}
                    />

                    <button
                        type="submit"
                        className={`px-4 py-3 rounded w-full font-semibold transition ${
                            loading 
                                ? 'bg-gray-400 cursor-not-allowed' 
                                : 'bg-pink-600 hover:bg-pink-700'
                        } text-white`}
                        disabled={loading}
                    >
                        {loading ? 'Creando cuenta...' : 'Crear cuenta'}
                    </button>

                    <button
                        type="button"
                        className="mt-4 bg-gray-200 text-pink-600 px-4 py-3 rounded w-full hover:bg-gray-300 transition"
                        onClick={() => navigate("/login")}
                        disabled={loading}
                    >
                        ¿Ya tienes cuenta? Iniciar sesión
                    </button>
                </form>
            </div>
        </div>
    )
}

export default SignUp