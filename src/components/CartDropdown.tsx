import React, { useState } from 'react';
import { useCart } from './CartContext';
import { useNavigate } from 'react-router-dom';

const CartDropdown: React.FC = () => {
  const { cart, removeFromCart, updateQuantity, clearCart } = useCart();
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handlePedido = async () => {
    // Separar artículos y piezas del carrito
    const articulos = cart
      .filter(item => item.tipo === 'articulo')
      .map(item => ({ id: item.id, cantidad: item.cantidad }));
    
    const piezas = cart
      .filter(item => item.tipo === 'pieza')
      .map(item => ({ id: item.id, cantidad: item.cantidad }));

    try {
      const token = localStorage.getItem('token');
      const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}:${import.meta.env.VITE_BACKEND_PORT}/pedidos`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ 
          articulos: articulos.length > 0 ? articulos : undefined,
          piezas: piezas.length > 0 ? piezas : undefined
        }),
      });
      if (res.ok) {
        clearCart();
        alert('Pedido realizado con éxito');
        setOpen(false);
        navigate('/user');
      } else {
        const error = await res.json();
        alert('Error al realizar el pedido: ' + (error.error || 'Error desconocido'));
      }
    } catch {
      alert('Error de conexión');
    }
  };

  return (
    <div className="relative">
      <button
        className="bg-[var(--color-terciary)] text-white px-4 py-2 rounded shadow hover:bg-[var(--color-secondary)]"
        onClick={() => setOpen(!open)}
      >
        Carrito ({cart.reduce((acc, item) => acc + item.cantidad, 0)})
      </button>
      {open && (
        <div className="absolute right-0 mt-2 w-80 bg-gray-100 border rounded shadow-lg z-50">
          <div className="p-4">
            <h3 className="font-bold text-lg text-black mb-2">Carrito</h3>
            {cart.length === 0 ? (
              <div className="text-[var(--color-terciary)] pl-1">El carrito está vacío</div>
            ) : (
              <ul>
                {cart.map(item => (
                  <li key={`${item.tipo}-${item.id}`} className="flex items-center justify-between mb-2">
                    <div>
                      <span className="font-semibold text-black ">
                        {item.tipo === 'articulo' 
                          ? (item.codigo ? `${item.codigo} - ` : '') + (item.descripcion || 'Artículo ' + item.id)
                          : item.nombre || 'Pieza ' + item.id
                        }
                      </span>
                      <span className="ml-2 text-black"> x{item.cantidad}</span>
                      {item.precio && (
                        <span className="ml-2 text-black">${item.precio * item.cantidad}</span>
                      )}
                    </div>
                    <div className="flex items-center gap-2 text-black">
                      <input
                        type="number"
                        min={1}
                        value={item.cantidad}
                        onChange={e => updateQuantity(item.id, item.tipo, Number(e.target.value))}
                        className="w-12 border rounded px-1"
                      />
                      <button
                        className="text-red-500 hover:text-red-700"
                        onClick={() => removeFromCart(item.id, item.tipo)}
                      >
                        ✕
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            )}
            {cart.length > 0 && (
              <>
                <div className="mt-4 font-bold text-right text-black">
                  Total: ${cart.reduce((acc, item) => acc + (item.precio || 0) * item.cantidad, 0)}
                </div>
                <button
                  className="mt-4 w-full bg-[var(--color-primary)] text-white py-2 rounded hover:bg-[var(--color-terciary)]"
                  onClick={handlePedido}
                >
                  Realizar pedido
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default CartDropdown;
