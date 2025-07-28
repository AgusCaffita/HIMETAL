import { useState, useEffect } from 'react';

interface Articulo{
    himCodigo: string;
    cliCodigo: string;
    nombre: string;
    cant_piezas: number;
    plano: string;
    precio: number;
    cteGanancia: number;
}

export const useArticulos = () =>{
    const [articulos, setArticulos] = useState<Articulo[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    useEffect(() => {
        const fetchArticulos = async () => {
            try {
                setLoading(true);
                const response = await fetch('https:\\localhost:5173/arts');

                if(!response.ok){
                    throw new Error('error al obtener articulos');
                }

                const data = await response.json();
                setArticulos(data);
            } catch (error){
                console.error('Error:', error);
                setError(error instanceof Error? error.message: 'Error desconocido');
            } finally {
                setLoading(false);
            }
        };
        fetchArticulos();
    }, []);
    return { articulos, loading, error}
}