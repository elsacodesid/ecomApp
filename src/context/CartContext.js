import { createContext, useState } from "react"

export const CartContext = createContext()

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([1, 2, 3])

    const value = {
        cart,
    }
    return (<CartContext.Provider value={value}>{children}</CartContext.Provider>)
}