import React, { createContext, useContext, useState, useEffect } from 'react';

export type CartItem = {
  id: number;
  tipo: 'articulo' | 'pieza'; // Nuevo campo para distinguir entre artículos y piezas
  nombre?: string;
  descripcion?: string;
  codigo?: string; // Para artículos
  precio?: number;
  cantidad: number;
};

interface CartContextType {
  cart: CartItem[];
  addToCart: (item: Omit<CartItem, 'cantidad'>, cantidad?: number) => void;
  removeFromCart: (id: number, tipo: 'articulo' | 'pieza') => void;
  updateQuantity: (id: number, tipo: 'articulo' | 'pieza', cantidad: number) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error('useCart debe usarse dentro de CartProvider');
  return context;
};

const getUserId = () => {
  const user = localStorage.getItem('user');
  try {
    return user ? JSON.parse(user).id : null;
  } catch {
    return null;
  }
};

const getCartKey = () => {
  const userId = getUserId();
  return userId ? `cart_${userId}` : 'cart_guest';
};

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem(getCartKey());
    if (saved) setCart(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem(getCartKey(), JSON.stringify(cart));
  }, [cart]);

  const addToCart = (item: Omit<CartItem, 'cantidad'>, cantidad: number = 1) => {
    setCart(prev => {
      // Buscar por id Y tipo para evitar conflictos entre artículos y piezas
      const found = prev.find(i => i.id === item.id && i.tipo === item.tipo);
      if (found) {
        return prev.map(i => 
          i.id === item.id && i.tipo === item.tipo 
            ? { ...i, cantidad: i.cantidad + cantidad } 
            : i
        );
      }
      return [...prev, { ...item, cantidad }];
    });
  };

  const removeFromCart = (id: number, tipo: 'articulo' | 'pieza') => {
    setCart(prev => prev.filter(i => !(i.id === id && i.tipo === tipo)));
  };

  const updateQuantity = (id: number, tipo: 'articulo' | 'pieza', cantidad: number) => {
    setCart(prev => prev.map(i => 
      i.id === id && i.tipo === tipo 
        ? { ...i, cantidad } 
        : i
    ));
  };

  const clearCart = () => setCart([]);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};


export { CartContext };