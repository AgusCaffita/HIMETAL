import { useState } from "react"
import { useNavigate } from "react-router-dom"

const API_URL = import.meta.env.VITE_BACKEND_URL + ':' + import.meta.env.VITE_PORT

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const navigate = useNavigate()

  // Solo usa await dentro de esta función
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError("")
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
      setError("Email o contraseña incorrectos")
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded shadow-md w-full max-w-sm"
      >
        <h2 className="text-2xl font-bold mb-6 text-pink-600">Iniciar sesión</h2>
        {error && <div className="text-red-600 mb-4">{error}</div>}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          className="border p-2 w-full mb-4 rounded"
          required
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={e => setPassword(e.target.value)}
          className="border p-2 w-full mb-6 rounded"
          required
        />
        <button
          type="submit"
          className="bg-pink-600 text-white px-4 py-2 rounded w-full hover:bg-pink-700 transition"
        >
          Entrar
        </button>
        <button
          type="button"
          className="mt-4 bg-gray-200 text-pink-600 px-4 py-2 rounded w-full hover:bg-gray-300 transition"
          onClick={() => navigate("/signup")}
        >
          Crear cuenta
        </button>
      </form>
    </div>
  )
}

export default Login