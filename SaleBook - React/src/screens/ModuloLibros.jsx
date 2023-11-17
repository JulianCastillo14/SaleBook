import { useState } from "react"
import { FormCrearLibro} from "../componentes/FormCrearLibro.jsx"
import { FormEditarLibro } from "../componentes/FormEditarLibro.jsx"
import { TablaListaLibros} from "../componentes/TablaListaLibros.jsx"
import "../styles/ModuloLibros.css"

export function MooduloLibros(){
    const [seccion, setSeccion] = useState("crear")

    return(
        <div className="modulo_libros">
            <section>
                {seccion === "crear" && <FormCrearLibro/> }
                {seccion === "consultar" && <TablaListaLibros/> }
                {seccion === "actualizar" && <FormEditarLibro/>}
            </section>
            <nav className="navbar">
                <a onClick={()=>setSeccion("crear")}>Crear</a>
                <a onClick={()=>setSeccion("consultar")}>Consultar</a>
                <a onClick={()=>setSeccion("actualizar")}>Actualizar</a>
            </nav>
        </div>
    )
}