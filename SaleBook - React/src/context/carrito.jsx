import { useState, createContext } from "react";

export const CarritoContext = createContext()

export function CarritotProvider({children}){
    const [carrito, setCarrito] = useState([])

    return(
        <CarritoContext.Provider value={{
        carrito, 
        setCarrito
        }}>
            {children}
        </CarritoContext.Provider>
    )
}