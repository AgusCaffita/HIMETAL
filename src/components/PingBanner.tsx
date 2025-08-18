import { useEffect, useState } from "react"

const API_URL = `${import.meta.env.VITE_BACKEND_URL}:${import.meta.env.VITE_PORT}`


const checkPing = (setStatus: React.Dispatch<React.SetStateAction<"ok" | "error" | "loading">>) => {
  fetch(`${API_URL}/ping`)
    .then(res => {
      if (res.ok) setStatus("ok")
      else setStatus("error")
    })
    .catch(() => setStatus("error"))
}

const PingBanner = () => {
  const [status, setStatus] = useState<"ok" | "error" | "loading">("loading")

  useEffect(() => {
    checkPing(setStatus)
    const interval = setInterval(checkPing, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex items-center gap-2 px-4 py-2 rounded-lg shadow bg-white border border-gray-200 w-fit">
      {status === "loading" && (
        <span className="text-gray-500 animate-pulse">Verificando backend...</span>
      )}
      {status === "ok" && (
        <>
          <span className="text-green-500 text-2xl">✔️</span>
          <span className="text-green-700 font-semibold">Backend activo</span>
        </>
      )}
      {status === "error" && (
        <>
          <span className="text-red-500 text-2xl">❌</span>
          <span className="text-red-700 font-semibold">Backend caído</span>
        </>
      )}
    </div>
  )
}

export default PingBanner
