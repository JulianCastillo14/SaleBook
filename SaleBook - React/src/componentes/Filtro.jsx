import { useContext, useEffect, useRef, useState } from "react"
import { CatalogoContext } from "../context/catalogo.jsx"
import "../styles/Filtro.css"


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
        <form id="filtros-form" ref={FormFiltro}  onChange={filtrar}>
            <h2 className="blanco border-l">Filtrar por: </h2>
            <div className="tipo-filtro">
                <h3 className="blanco mb">Editorial</h3>
                <input className="espacio" type="checkbox" name="editorial" value="Alma"  />
                <label className="espacio c-label" htmlFor="editorial">Alma</label><br />
                <input className="espacio" type="checkbox" name="editorial" value="Debolsillo" />
                <label className="espacio c-label" htmlFor="editorial">Debolsillo</label><br />
                <input className="espacio" type="checkbox" name="editorial" value="Planeta" />
                <label className="espacio c-label" htmlFor="editorial">Planeta</label>
            </div>
            <div className="tipo-filtro">
                <h3 className="blanco mb">Categoria</h3>
                <input className="espacio" type="checkbox" name="categoria" value="ficcion moderna"  />
                <label className="espacio c-label" htmlFor="categoria">Ficción Moderna</label><br />
                <input className="espacio" type="checkbox" name="categoria" value="ficcion clasica" />
                <label className="espacio c-label" htmlFor="categoria">Ficción Clásica</label><br />
                <input className="espacio" type="checkbox" name="categoria" value="terror" />
                <label className="espacio c-label" htmlFor="categoria">Terror</label>
            </div>
            <div className="tipo-filtro">
                <h3 className="blanco mb">Precio</h3>
                <label className="espacio c-label">Ordenar de:</label><br />
                <select id="sel" htmlFor="orden" name="orden">
                    <option value="mayor">Mayor a menor</option>
                    <option value="menor">Menor a mayor</option>
                </select>
            </div>

        </form>
    )
}