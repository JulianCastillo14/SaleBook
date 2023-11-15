import { useContext, useState } from "react"
import { useEffect } from "react"
import { CarritoContext} from "../context/carrito"
import {Link} from "react-router-dom"
import "../catalogo.css"

export function Catalogo(){
    const [libros, SetLibros] = useState()
    const {carrito, setCarrito} = useContext(CarritoContext)

    useEffect(()=>{
        fetch("http://localhost:2020/api/libros/list")
        .then(res=>res.json())
        .then(res=>SetLibros(res))
    },[])

    function agregarCarrito(e){
        const values = []
        Array.from(e.target.parentElement.parentElement.children[1].children).forEach(element=>{
            values.push(element.textContent)
        })

        values[4] = values[4].split(" ")[1]
        values[5] = values[5].split("$")[1]

        const nuevoitem = {
            titulo: values[0],
            autor: values[1],
            editorial: values[2],
            categoria: values[3],
            stock: values[4],
            valor_unitario: values[5]
        }

        setCarrito([...carrito, nuevoitem])
    }

    return( 
        <section className="catalogo">
            {libros && libros.map(libro=>(
                 <div key={libro.isbn} className="catalogo-libro">
                    <img src="https://th.bing.com/th/id/R.ef5155287f4afccff22ba1f65fcdb9ed?rik=fz22Wn0xopZrLw&riu=http%3a%2f%2fcdn5.dibujos.net%2fdibujos%2fpintar%2fun-libro-abierto_163.png&ehk=S1mtnjWcEh7qk1EO2Ho8k%2fGEz2cQnOmyw62ggT5q10Q%3d&risl=&pid=ImgRaw&r=0" className="catalogo-libro-imagen"/>
                    <div className="catalogo-libro-info">
                        <p className="catalogo-info-titulo">{libro.titulo}</p>
                        <p className="catalogo-info-autor">{libro.autor}</p>
                        <p className="catalogo-info-editorial">{libro.editorial}</p>
                        <p className="catalogo-info-categoria">{libro.categoria}</p>
                        <p className="catalogo-info-disponible">Quedan {libro.stock} unidades</p>
                        <p className="catalogo-info-precio">Precio: ${libro.valor_unitario}</p>
                    </div>
                    <div className="catalogo-libro-opcion">
                        <button className="catalogo-opcion-agregar" onClick={(e)=>agregarCarrito(e)}>Agregar</button>
                        <Link to={`./detalles/${libro.isbn}`}><button className="catalogo-opcion-ver" id={libro.isbn}>Detalles</button></Link>
                    </div>
                 </div>
            ))}
        </section> 
    )
}