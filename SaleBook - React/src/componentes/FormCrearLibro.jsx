import { useRef } from "react"
import "../styles/CrearLibro.css"

export function FormCrearLibro(){

    const FormLibro = useRef(null)

    function enviarData(e) {
        e.preventDefault();
        
        const formData = new FormData(FormLibro.current);
        const data = Object.fromEntries(formData);
   
        console.log(data)
        fetch("http://localhost:2020/api/libros/",{
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res=>console.log(res))
    }

    return(
        <form ref={FormLibro} onSubmit={enviarData}>
          <div>
            <label htmlFor="isbn" >ISBN</label>
            <input type="text" name="isbn" className="input-isbn" id="isbn"/>
          </div>
          <div >
            <label  htmlFor="titulo">Titulo</label>
            <input type="text" name="titulo" className="input-titulo" id="titulo"/>
          </div>
          <div >
            <label  htmlFor="autor">Autor</label>
            <input type="text" name="autor" className="input-autor" id="autor"/>
          </div>
          <div >
            <label  htmlFor="categoria">Categoria</label>
            <input type="text" name="categoria" className="input-categoria" id="categoria"/>
          </div>
          <div >
            <label  htmlFor="edicion">Edicion</label>
            <input type="text" name="edicion" className="input-edicion" id="edicion"/>
          </div>
          <div >
            <label  htmlFor="editorial">Editorial</label>
            <input type="text" name="editorial" className="input-editorial" id="editorial"/>
          </div>
          <div >
            <label  htmlFor="fecha_publicacion">Año Publicacion</label>
            <input type="text" name="fecha_publicacion" className="input-publicacion" id="publicacion"/>
          </div>
          <div >
            <label  htmlFor="idioma">Idioma</label>
            <input type="text"  name="idioma" className="input-idioma" id="idioma"/>
          </div>
          <div >
            <label  htmlFor="valor_unitario">Valor Unitario</label>
            <input type="text" name="valor_unitario" className="input-valor" id="valor"/>
          </div>
          <div >
            <label  htmlFor="stock">Stock</label>
            <input type="text"  name="stock" className="input-stock" id="stock"/>
          </div>
          <button type="submit"  className="btn-crear">Crear</button>
        </form>
    )
}