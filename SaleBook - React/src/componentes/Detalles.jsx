import { useEffect } from "react";
import { useState } from "react";
import { useParams } from 'react-router-dom'
import "../styles/detalles.css"
import { useContext } from "react";
import { CarritoContext } from "../context/carrito";
import {Link} from "react-router-dom"
import { CatalogoContext } from "../context/catalogo";

export function Detalles(){
    const [detalles, setDetalles] = useState()
    const {carrito, setCarrito} = useContext(CarritoContext)
    const {catalogo, setCatalogo} = useContext(CatalogoContext)
    const {isbn} = useParams()

    useEffect(()=>{
        fetch(`http://localhost:2020/api/libros/list/${isbn}`)
        .then(res=>res.json())
        .then(res=>setDetalles(res))
    },[detalles])

    function comprar(e){
        let cantidad = e.target.parentElement.parentElement.children[1].value

        if(carrito.some((libro) => libro.isbn == e.target.id)){
            let carritoActualizado = carrito.map(libro=>{
                if(libro.isbn == e.target.id){
                    libro.cantidad =  cantidad
                }     
                return libro
            })
            
            setCarrito([...carritoActualizado])
            return
        }


        const libro = catalogo.filter(libro=>libro.isbn == e.target.id)

        const nuevoitem = {
            ...libro[0],
            cantidad: parseInt(cantidad)
        }

    
        setCarrito([...carrito, nuevoitem])
    }

    return(
       (detalles && <section className="detalles">
                        <div className="detalles-info">
                            <img src={detalles.imagenes[0]?.url} className="detalles-info-img"/>
                            <div className="detalles-info-texto">
                                <p className="cp">Autor</p>
                                <p>{detalles.autor}</p>
                                <p className="cp">Editorial</p>
                                <p>{detalles.editorial}</p>
                                <p className="cp">Categoria</p>
                                <p>{detalles.categoria}</p>
                                <p className="cp">Año</p>
                                <p>{ new Date(detalles.fecha_publicacion).getFullYear()}</p>
                                <p className="cp">Idioma</p>
                                <p>{detalles.idioma}</p>
                                <p className="cp">ISBN</p>
                                <p>{detalles.isbn}</p>
                                <p className="cp">Edicion</p>
                                <p>{detalles.edicion}</p>
                            </div>
                        </div>
                        <div className="detalles-valor">
                            <h1 className="detalles-valor-titulo">{detalles.titulo}</h1><br />
                            <p className="detalles-valor-autor">{detalles.autor} - {detalles.editorial}</p><br />
                            <p className="detalles-valor-stock">Quedan {detalles.stock} unidades</p>
                            <div className="detalles-valor-compra">
                                <p className="detalles-valor-precio">Precio: {detalles.valor_unitario}</p>
                                <select className="detalles-valor-cantidad">
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                </select>
                                <Link to="/carrito"><button className="detalles-valor-comprar" id={detalles.isbn} onClick={(e)=>comprar(e)}>Comprar</button></Link>
                            </div>           
                        </div>
                    </section>
        ))
}