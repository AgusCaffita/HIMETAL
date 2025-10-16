import React, { createContext, useContext, useState, useEffect } from 'react';

export type CartItem = {
  id: number;
  nombre?: string;
  descripcion?: string;
  precio?: number;
  cantidad: number;
};

interface CartContextType {
  cart: CartItem[];
  addToCart: (item: Omit<CartItem, 'cantidad'>, cantidad?: number) => void;
  removeFromCart: (id: number) => void;
  updateQuantity: (id: number, cantidad: number) => void;
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
      const found = prev.find(i => i.id === item.id);
      if (found) {
        return prev.map(i => i.id === item.id ? { ...i, cantidad: i.cantidad + cantidad } : i);
      }
      return [...prev, { ...item, cantidad }];
    });
  };

  const removeFromCart = (id: number) => {
    setCart(prev => prev.filter(i => i.id !== id));
  };

  const updateQuantity = (id: number, cantidad: number) => {
    setCart(prev => prev.map(i => i.id === id ? { ...i, cantidad } : i));
  };

  const clearCart = () => setCart([]);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};


export { CartContext };