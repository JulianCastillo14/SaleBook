import { useRef } from "react"
import "../styles/CrearLibro.css"

export function FormCrearLibro(){

    const FormLibro = useRef(null)

    function enviarData(e) {
        e.preventDefault();
        
        const formData = new FormData(FormLibro.current);
        const data = Object.fromEntries(formData);
   
        console.log(data)
        fetch("https://salebook-backend-production.up.railway.app/api/libros/",{
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res=>console.log(res))
    }

    return(
        <form className="fromLibro" ref={FormLibro} onSubmit={enviarData}>
          <div>
            <label htmlFor="isbn" >ISBN</label>
            <input type="text" name="isbn" className="input-cl input-isbn" id="isbn"/>
          </div>
          <div >
            <label  htmlFor="titulo">Titulo</label>
            <input type="text" name="titulo" className="input-cl input-titulo" id="titulo"/>
          </div>
          <div >
            <label  htmlFor="autor">Autor</label>
            <input type="text" name="autor" className="input-cl input-autor" id="autor"/>
          </div>
          <div >
            <label  htmlFor="categoria">Categoria</label>
            <input type="text" name="categoria" className="input-cl input-categoria" id="categoria"/>
          </div>
          <div >
            <label  htmlFor="edicion">Edicion</label>
            <input type="text" name="edicion" className="input-cl input-edicion" id="edicion"/>
          </div>
          <div >
            <label  htmlFor="editorial">Editorial</label>
            <input type="text" name="editorial" className="input-cl input-editorial" id="editorial"/>
          </div>
          <div >
            <label  htmlFor="fecha_publicacion">Año Publicacion</label>
            <input type="text" name="fecha_publicacion" className="input-cl input-publicacion" id="publicacion"/>
          </div>
          <div >
            <label  htmlFor="idioma">Idioma</label>
            <input type="text"  name="idioma" className="input-cl input-idioma" id="idioma"/>
          </div>
          <div >
            <label  htmlFor="valor_unitario">Valor Unitario</label>
            <input type="text" name="valor_unitario" className="input-cl input-valor" id="valor"/>
          </div>
          <div >
            <label  htmlFor="stock">Stock</label>
            <input type="text"  name="stock" className="input-cl input-stock" id="stock"/>
          </div>
          <button type="submit"  className="button-cl btn-crear">Crear</button>
        </form>
    )
}