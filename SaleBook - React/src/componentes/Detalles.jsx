import { useEffect } from "react";
import { useState } from "react";
import { useParams } from 'react-router-dom'
import "../styles/detalles.css"
import { useContext } from "react";
import { CarritoContext } from "../context/carrito";
import {Link} from "react-router-dom"

export function Detalles(){
    const [detalles, setDetalles] = useState()
    const {carrito, setCarrito} = useContext(CarritoContext)
    const {isbn} = useParams()

    useEffect(()=>{
        fetch(`http://localhost:2020/api/libros/list/${isbn}`)
        .then(res=>res.json())
        .then(res=>setDetalles(res))
    },[detalles])

    function comprar(e){
        let precio = e.target.parentElement.parentElement.children[0].textContent
        let cantidad = e.target.parentElement.parentElement.children[1].value
        let titulo = e.target.parentElement.parentElement.parentElement.children[0].textContent
        let stock = e.target.parentElement.parentElement.parentElement.children[2].textContent
        let autor = e.target.parentElement.parentElement.parentElement.parentElement.children[0].children[1].children[1].textContent
        let editorial = e.target.parentElement.parentElement.parentElement.parentElement.children[0].children[1].children[3].textContent
        let categoria = e.target.parentElement.parentElement.parentElement.parentElement.children[0].children[1].children[5].textContent
        
        const nuevoitem = {
            titulo: titulo,
            autor: autor,
            editorial: editorial,
            categoria: categoria,
            stock: stock,
            cantidad: String(cantidad),
            valor_unitario: precio
        }

        setCarrito([...carrito, nuevoitem])
    }

    return(
       (detalles && <section className="detalles">
                        <div className="detalles-info">
                            <img src="https://th.bing.com/th/id/R.ef5155287f4afccff22ba1f65fcdb9ed?rik=fz22Wn0xopZrLw&riu=http%3a%2f%2fcdn5.dibujos.net%2fdibujos%2fpintar%2fun-libro-abierto_163.png&ehk=S1mtnjWcEh7qk1EO2Ho8k%2fGEz2cQnOmyw62ggT5q10Q%3d&risl=&pid=ImgRaw&r=0" className="detalles-info-img"/>
                            <div className="detalles-info-texto">
                                <p>Autor</p>
                                <p>{detalles.autor}</p>
                                <p>Editorial</p>
                                <p>{detalles.editorial}</p>
                                <p>Categoria</p>
                                <p>{detalles.categoria}</p>
                                <p>Año</p>
                                <p>{detalles.fecha_publicacion}</p>
                                <p>Idioma</p>
                                <p>{detalles.idioma}</p>
                                <p>ISBN</p>
                                <p>{detalles.isbn}</p>
                                <p>Edicion</p>
                                <p>{detalles.edicion}</p>
                            </div>
                        </div>
                        <div className="detalles-valor">
                            <h1 className="detalles-valor-titulo">{detalles.titulo}</h1>
                            <p className="detalles-valor-autor">{detalles.autor} - {detalles.editorial}</p>
                            <p className="detalles-valor-stock">Quedan {detalles.stock} unidades</p>
                            <div className="detalles-valor-compra">
                                <p className="detalles-valor-precio">Precio: {detalles.valor_unitario}</p>
                                <select className="detalles-valor-cantidad">
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                </select>
                                <Link to="/carrito"><button className="detalles-valor-comprar" onClick={(e)=>comprar(e)}>Comprar</button></Link>
                            </div>           
                        </div>
                    </section>
        ))
}