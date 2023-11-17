import { useEffect, useRef, useState } from "react"
import "../styles/CrearLibro.css"

export function FormEditarLibro(){

    const FormLibro = useRef(null)
    const [listaIsbns, setListaIsbns] = useState()
    const [isbn, setIsbn] = useState("")
    const [libro, setLibro] = useState({})
    const [primerRender, setPrimerRender] = useState(false)


    useEffect(()=>{
        fetch("http://localhost:2020/api/libros/listIsbn")
        .then(res=>res.json())
        .then(res=>{
            setListaIsbns(res)
            setIsbn(res[0])
        })
    },[])

    useEffect(()=>{
        if(primerRender){
            fetch(`http://localhost:2020/api/libros/list/${isbn}`)
            .then(res=>res.json())
            .then(res=>setLibro(res))
        }else{
            setPrimerRender(true)
        }
    },[isbn])

    function enviarData(e) {
        e.preventDefault();
        
        const formData = new FormData(FormLibro.current);
        const data = Object.fromEntries(formData);
   
        console.log(data)
        fetch("http://localhost:2020/api/libros/",{
            method: "PUT",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res=>console.log(res))
    }

    return(
        <form ref={FormLibro} onSubmit={enviarData}>
            {listaIsbns && 
                <>
                    <div>
                        <label htmlFor="isbn">ISBN</label>
                        <select type="text"  name="isbn" onChange={(e)=>(setIsbn(e.target.value))}className="input-isbn" id="isbn">
                            {listaIsbns.map(isbn=>(
                                    <option value={isbn} key={isbn} name="isbn">{isbn}</option>
                                ))
                            }
                        </select>   
                    </div>
                    <div >
                        <label  htmlFor="titulo">Titulo</label>
                        <input type="text" name="titulo" className="input-titulo" id="titulo" defaultValue={libro && libro.titulo || ''}/>
                    </div>
                    <div>
                        <label  htmlFor="autor">Autor</label>
                        <input type="text" name="autor" className="input-autor" id="autor" defaultValue={libro &&  libro.autor || ''}/>
                    </div>
                    <div>
                        <label  htmlFor="categoria">Categoria</label>
                        <input type="text" name="categoria" className="input-categoria" id="categoria" defaultValue={libro &&  libro.categoria || ''}/>
                    </div>
                    <div>
                        <label  htmlFor="edicion">Edicion</label>
                        <input type="text" name="edicion" className="input-edicion" id="edicion" defaultValue={libro &&  libro.edicion || ''}/>
                    </div>
                    <div>
                        <label  htmlFor="editorial">Editorial</label>
                        <input type="text" name="editorial" className="input-editorial" id="editorial" defaultValue={libro &&  libro.editorial || ''}/>
                    </div>
                    <div>
                        <label  htmlFor="fecha_publicacion">Año Publicacion</label>
                        <input type="text" name="fecha_publicacion" className="input-publicacion" id="publicacion" defaultValue={libro &&  new Date(libro.fecha_publicacion).getFullYear() || ''}/>
                    </div>
                    <div>
                        <label  htmlFor="idioma">Idioma</label>
                        <input type="text"  name="idioma" className="input-idioma" id="idioma" defaultValue={libro &&  libro.idioma || ''}/>
                    </div>
                    <div>
                        <label  htmlFor="valor_unitario">Valor Unitario</label>
                        <input type="text" name="valor_unitario" className="input-valor" id="valor" defaultValue={libro &&  libro.valor_unitario || ''}/>
                    </div>
                    <div>
                        <label  htmlFor="stock">Stock</label>
                        <input type="text"  name="stock" className="input-stock" id="stock" defaultValue={libro && libro.stock || '' }/>
                    </div>
                    <button type="submit"  className="btn-crear">Editar</button>
                </>
            }
        </form>
    )
}