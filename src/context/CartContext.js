import AsyncStorage from '@react-native-async-storage/async-storage';
import {createContext, useEffect, useState} from 'react';

export const CartContext = createContext();

export const CartProvider = ({children}) => {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    loadCartItems();
  }, []);

  const loadCartItems = async () => {
    try {
      const currentCart = await AsyncStorage.getItem('cart');
      if (currentCart) {
        setCart(JSON.parse(currentCart));
        totalSum(cart);
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
      totalSum(newCartItems);
    }
  };

  const deleteItem = async item => {
    const newItems = cart.filter(cart => cart.id !== item.id);
    setCart(newItems);
    await AsyncStorage.setItem('cart', JSON.stringify(newItems));
    totalSum(newItems);
  };

  const totalSum = cart => {
    const totalSum = cart
      .reduce((amount, item) => amount + item.price, 0)
      .toFixed(2);

    setTotalPrice(totalSum);
  };

  const value = {
    cart,
    addToCart,
    totalPrice,
    deleteItem
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
