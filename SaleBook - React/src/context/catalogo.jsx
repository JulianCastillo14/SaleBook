import { useState, createContext } from "react";

export const CatalogoContext = createContext()

export function CatalogoProvider({children}){
    const [catalogo, setCatalogo] = useState([])
    
    return(
        <CatalogoContext.Provider value={{
        catalogo, 
        setCatalogo
        }}>
            {children}
        </CatalogoContext.Provider>
    )
}