import { useState } from "react"
import { useNavigate } from "react-router-dom"

const API_URL = import.meta.env.VITE_BACKEND_URL + ':' + (import.meta.env.VITE_BACKEND_PORT || '5174')

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError("")
    setLoading(true)

    try {
      const response = await fetch(`${API_URL}/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      })

      if (response.ok) {
        const data = await response.json()
        localStorage.setItem('token', data.token)
        navigate("/arts")
      } else {
        const errorData = await response.json()
        setError(errorData.error || "Email o contraseña incorrectos")
      }
    } catch (error) {
      setError("Error de conexión con el servidor")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded shadow-md w-full max-w-md"
      >
        <div className="text-pink-600 text-3xl font-bold mb-6 text-center">
          <h2>HIMetal</h2>
        </div>

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            {error}
          </div>
        )}

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          className="border p-3 w-full mb-4 rounded focus:outline-none focus:border-pink-500"
          required
          disabled={loading}
        />

        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={e => setPassword(e.target.value)}
          className="border p-3 w-full mb-6 rounded focus:outline-none focus:border-pink-500"
          required
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
          {loading ? 'Iniciando sesión...' : 'Entrar'}
        </button>

        <button
          type="button"
          className="mt-4 bg-gray-200 text-pink-600 px-4 py-3 rounded w-full hover:bg-gray-300 transition"
          onClick={() => navigate("/signup")}
          disabled={loading}
        >
          Crear cuenta
        </button>
      </form>
    </div>
  )
}

export default Login