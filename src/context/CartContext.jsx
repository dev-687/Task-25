import { useState, createContext, useContext, useMemo } from "react";

export const CartContext = createContext(null); 

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems((prevCartItems) => {
      const existingProduct = prevCartItems.find((item) => item.id === product.id);
      if (existingProduct) {
        return prevCartItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevCartItems, { ...product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (id) => {
    setCartItems((prevCartItems) => {
        const existingProduct = prevCartItems.find(item => item.id === id);
    
        if (existingProduct) {
          if (existingProduct.quantity > 1) {
            return prevCartItems.map(item =>
              item.id === id
                ? { ...item, quantity: item.quantity - 1 }
                : item
            );
          } else {
            return prevCartItems.filter(item => item.id !== id);
          }
        } else {
          return prevCartItems;
        }
      });
  };

  const contextValue = useMemo(() => ({ cartItems, addToCart, removeFromCart }), [cartItems]);

  return <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>;
};

// Custom Hook
export default function useItems() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useItems must be used within a CartProvider");
  }
  return context;
}
