import { useState, createContext } from "react";

export const CarritoContext = createContext()

export function CarritotProvider({children}){
    const [carrito, setCarrito] = useState([])
    console.log(carrito)

    return(
        <CarritoContext.Provider value={{
        carrito, 
        setCarrito
        }}>
            {children}
        </CarritoContext.Provider>
    )
}