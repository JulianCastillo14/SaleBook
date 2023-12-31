import { useEffect, useState, useRef} from "react"
import "../styles/ConsultarLibros.css"

export function TablaListaLibros(){
    const [libros, setLibros] = useState(null)
    const [libro, setLibro] = useState(null)
    const [todosLibros, setTodosLibros] = useState(true)
    const [primerRender, setPrimerRender] = useState(false)
    const [eliminar, setEliminar] = useState(true)
    const input_isbn = useRef(null)
    const input_delete = useRef(null)

    useEffect(()=>{
        if(todosLibros){
            fetch("https://salebook-backend-production.up.railway.app/api/libros/list")
            .then(res=>res.json())
            .then(res=>{
              setLibros(res)
              setLibro(null)
            }) 
        }else if(!todosLibros){
            fetch(`https://salebook-backend-production.up.railway.app/api/libros/list/${input_isbn.current.value}`)
            .then(res=>res.json())
            .then(res=>{
              setLibro(res)
              setLibros(null)
            }) 
        }             
    },[todosLibros])

    useEffect(()=>{
        if(primerRender){
          fetch(`https://salebook-backend-production.up.railway.app/api/libros/${input_delete.current.value}`,{
            method: "DELETE"
          })
          .then(res=>console.log(res))
        }else{
          setPrimerRender(true) 
        }
    },[eliminar])

    return(
        <div>
         <table className="table-csl">
          <thead>
            <tr>
              <th scope="col">ISBN</th>
              <th scope="col">Titulo</th>
              <th scope="col">Autor</th>
              <th scope="col">Categoria</th>
              <th scope="col">Edicion</th>
              <th scope="col">Editorial</th>
              <th scope="col">Año Publicacion</th>
              <th scope="col">Idioma</th>
              <th scope="col">Valor Unitario</th>
              <th scope="col">Stock</th>
            </tr>
          </thead>
          <tbody className="tbody">
            {
                libros && libros.map(libro=>(
                    <tr key={libro.isbn}>
                        <th scope="row">{libro.isbn}</th>
                        <td>{libro.titulo}</td>
                        <td>{libro.autor}</td>
                        <td>{libro.categoria}</td>
                        <td>{libro.edicion}</td>
                        <td>{libro.editorial}</td>
                        <td>{new Date(libro.fecha_publicacion).getFullYear()}</td>
                        <td>{libro.idioma}</td>
                        <td>${libro.valor_unitario}</td>
                        <td>{libro.stock}</td>
                    </tr>
                ))
            }
            {
              libro &&  <tr key={libro.isbn}>
                          <th scope="row">{libro.isbn}</th>
                          <td>{libro.titulo}</td>
                          <td>{libro.autor}</td>
                          <td>{libro.categoria}</td>
                          <td>{libro.edicion}</td>
                          <td>{libro.editorial}</td>
                          <td>{new Date(libro.fecha_publicacion).getFullYear()}</td>
                          <td>{libro.idioma}</td>
                          <td>${libro.valor_unitario}</td>
                          <td>{libro.stock}</td>
                        </tr>
            }
          </tbody>
        </table>

        <form className="control_libros">
          <button className="btn-isbn button-csl" onClick={()=>{setTodosLibros(false)}} type="button">Buscar por ISBN</button>
          <input ref={input_isbn} type="text" className="input-isbn input-csl" placeholder="Ingresa un ISBN"/>
          <button className="btn-isbn-remove button-csl" onClick={()=>{setEliminar(!eliminar)}} type="button" >Borrar por ISBN</button>
          <input ref={input_delete} type="text" className="input-isbn-remove input-csl" placeholder="Ingresa un ISBN"/>
          <button className="btn-all button-csl" type="button" onClick={()=>{setTodosLibros(true)}} >Ver todo</button>
        </form>
        </div>
    )
}