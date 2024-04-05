import { createContext, useState } from "react";

export const ProdContext = createContext()

export function ProdProvider({ children }) {
    const [qnt, setQnt] = useState(0)
    const [cart, setCart] = useState([])

    function addProd (prod) {
        setQnt(qnt+1)
        let newCart = cart;
        newCart.push(prod)
        setCart(newCart)
    }

    function removeProd (prod) {
        setQnt(qnt-1)
        let newCart = cart;
        newCart.pop(prod)
        setCart(newCart)
    }
    return (
    <ProdContext.Provider value={{qnt, cart, addProd, setCart, setQnt}}>
        { children }

    </ProdContext.Provider>
)}