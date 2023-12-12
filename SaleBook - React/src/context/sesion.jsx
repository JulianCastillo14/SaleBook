import { createContext, useState } from "react";

export const SesionContext = createContext()

export function SesionProvider({children}){
    const [sesion, setSesion] = useState(JSON.parse(localStorage.getItem("sesion")) || null)
    
    return (<SesionContext.Provider value={{
        sesion,
        setSesion}
    }>
        {children}
    </SesionContext.Provider>)
}