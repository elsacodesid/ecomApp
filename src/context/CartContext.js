import AsyncStorage from '@react-native-async-storage/async-storage';
import {createContext, useEffect, useState} from 'react';

export const CartContext = createContext();

export const CartProvider = ({children}) => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    loadCartItems();
  }, []);
  
  const loadCartItems = async () => {
    try {
      const currentCart = await AsyncStorage.getItem('cart');
      if (currentCart) {
        setCart(JSON.parse(currentCart));
      }
    } catch (error) {
      console.error('Error loading cart items:', error);
    }
  };

  const addToCart = async item => {
    const itemExists = cart.findIndex(prod => prod.id === item.id);

    if (itemExists === -1) {
      const newCartItems = [...cart, item];
      await AsyncStorage.setItem('cart', JSON.stringify(newCartItems));
      setCart(newCartItems);
    }
  };

  const value = {
    cart,
    addToCart,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
