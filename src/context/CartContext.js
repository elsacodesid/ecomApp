import {createContext, useState} from 'react';

export const CartContext = createContext();

export const CartProvider = ({children}) => {
  const [cart, setCart] = useState([]);

  const addToCart = item => {
    const itemExists = cart.findIndex(prod => prod.id === item.id);
    if (itemExists === -1) {
      setCart([...cart, item]);
    }
  };

  const value = {
    cart,
    addToCart,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
