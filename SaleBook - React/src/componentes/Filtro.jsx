import { useContext, useEffect, useRef, useState } from "react"
import { CatalogoContext } from "../context/catalogo.jsx"


export function Filtro(){
    const {catalogo, setCatalogo} = useContext(CatalogoContext)
    const [catalogoCopia, setCatalogoCopia] = useState(null)
    
    const FormFiltro = useRef(null)

    function filtrar(){
        if(catalogoCopia == null){
            setCatalogoCopia(catalogo)
            const formData = new FormData(FormFiltro.current);
            const data = Object.fromEntries(formData);
            
            if(data.orden != null){
                if(data.orden == "mayor"){
                    setCatalogo([...catalogo.sort((a,b) => a.valor_unitario - b.valor_unitario)])
                }else{
                    setCatalogo([...catalogo.sort((a,b) => a.valor_unitario - b.valor_unitario)])
                }
            }

            if(data.editorial != null){
                setCatalogo(catalogo.filter(libro=> 
                    libro.editorial.toLowerCase().trim() == data.editorial.toLowerCase().trim()))
            }

            if(data.categoria != null){
                setCatalogo(catalogo.filter(libro=> 
                    libro.categoria.toLowerCase().trim().normalize("NFD").replace(/[\u0300-\u036f]/g, "") == data.categoria.toLowerCase().trim().normalize("NFD").replace(/[\u0300-\u036f]/g, "")))
            }
            
            
            return
        }

        const formData = new FormData(FormFiltro.current);
        const data = Object.fromEntries(formData);

        if(data.orden != null){
            if(data.orden == "mayor"){
                setCatalogo([...catalogoCopia.sort((a,b) => b.valor_unitario - a.valor_unitario)])
            }else{
                setCatalogo([...catalogoCopia.sort((a,b) => a.valor_unitario - b.valor_unitario)])
            }
        }

        if(data.editorial != null){
            setCatalogo(catalogoCopia.filter(libro=> 
                libro.editorial.toLowerCase().trim() == data.editorial.toLowerCase().trim()))
        }

        if(data.categoria != null){
            setCatalogo(catalogo.filter(libro=>
                libro.categoria.toLowerCase().trim().normalize("NFD").replace(/[\u0300-\u036f]/g, "") == data.categoria.toLowerCase().trim().normalize("NFD").replace(/[\u0300-\u036f]/g, "")))
        }
    }



    return(
        <form ref={FormFiltro}  onChange={filtrar}>
            <div>
                <h2>Editorial</h2>
                <input type="checkbox" name="editorial" value="Alma"  />
                <label htmlFor="editorial">Alma</label>
                <input type="checkbox" name="editorial" value="Debolsillo" />
                <label htmlFor="editorial">Debolsillo</label>
                <input type="checkbox" name="editorial" value="Planeta" />
                <label htmlFor="editorial">Planeta</label>
            </div>
            <div>
                <h2>categoria</h2>
                <input type="checkbox" name="categoria" value="ficcion moderna"  />
                <label htmlFor="categoria">Ficción Moderna</label>
                <input type="checkbox" name="categoria" value="ficcion clasica" />
                <label htmlFor="categoria">Ficción Clásica</label>
                <input type="checkbox" name="categoria" value="terror" />
                <label htmlFor="categoria">Terror</label>
            </div>
            <div>
                <h2>Precio</h2>
                <label>Ordenar</label>
                <select htmlFor="orden" name="orden">
                    <option value="mayor">Mas Costosos</option>
                    <option value="menor">Mas baratos</option>
                </select>
            </div>

        </form>
    )
}