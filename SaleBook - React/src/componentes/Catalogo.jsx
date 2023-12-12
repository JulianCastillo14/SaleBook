import { useContext } from "react"
import { useEffect } from "react"
import { CarritoContext} from "../context/carrito"
import { CatalogoContext } from "../context/catalogo"
import {Link} from "react-router-dom"
import { Filtro } from "./Filtro"
import "../styles/catalogo.css"

export function Catalogo(){
    const {carrito, setCarrito} = useContext(CarritoContext)
    const {catalogo, setCatalogo} = useContext(CatalogoContext)

    useEffect(()=>{
        fetch("http://localhost:2020/api/libros/list")
        .then(res=>res.json())
        .then(res=>{
            setCatalogo(res.sort((a,b) => b.valor_unitario - a.valor_unitario))
        })
    },[])

    function agregarCarrito(e){

        if(carrito.some((libro) => libro.isbn == e.target.id)){
            let carritoActualizado = carrito.map(libro=>{
                if(libro.isbn == e.target.id){
                    libro.cantidad =  parseInt(libro.cantidad) + 1
                }     
                return libro
            })
            
            setCarrito([...carritoActualizado])
            return
        }

       
        const libro = catalogo.filter(libro=>libro.isbn == e.target.id)

        const nuevoitem = {
            ...libro[0],
            cantidad: 1
        }

            setCarrito([...carrito, nuevoitem])
    }


    return(
        <div id="container-catalogo">
            <Filtro></Filtro>
            <section className="catalogo">
                {catalogo && catalogo.map(libro=>(
                    <div key={libro.isbn} className="catalogo-libro">
                        <img src={libro.imagenes[0]?.url} className="catalogo-libro-imagen"/>
                        <div className="catalogo-libro-info">
                            <p className="catalogo-info-titulo">{libro.titulo}</p>
                            <p className="catalogo-info-autor">{libro.autor}</p>
                            <p className="catalogo-info-editorial">{libro.editorial}</p>
                            <p className="catalogo-info-categoria">{libro.categoria}</p>
                            <p className="catalogo-info-disponible">Quedan {libro.stock} unidades</p>
                            <p className="catalogo-info-precio">Precio: ${libro.valor_unitario}</p>
                        </div>
                        <div className="catalogo-libro-opcion">
                            <button className="catalogo-opcion-agregar" id={libro.isbn} onClick={(e)=>agregarCarrito(e)}>Agregar</button>
                            <Link to={`./detalles/${libro.isbn}`}><button className="catalogo-opcion-ver" id={libro.isbn}>Detalles</button></Link>
                        </div>
                    </div>
                ))}
            </section> 
        </div>
    )
}