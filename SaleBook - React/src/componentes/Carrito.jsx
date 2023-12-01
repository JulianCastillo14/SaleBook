import { useContext, useEffect, useState } from "react"
import { CarritoContext } from "../context/carrito"
import "../styles/Carrito.css"

export function Carrito(){
    const {carrito, setCarrito} = useContext(CarritoContext)
    const [total, setTotal] = useState()
    console.log(carrito)
    function eliminar(e){
        setCarrito([...carrito.filter(libro => libro.isbn != e.target.id)])
    }

    useEffect(()=>{
        if(carrito.length  > 0){
            let valueTotal = 0;
            carrito.forEach(elemento => {
                valueTotal +=  elemento.cantidad*elemento.valor_unitario
            });

            setTotal(valueTotal)
        }       
    },[carrito])

    function actualizarCantidad(e){        
        let carritoActualizado = carrito.map(libro=>{
            if(libro.isbn == e.target.id){
                libro.cantidad = e.target.value
            }
            
            return libro
        })
        
        setCarrito([...carritoActualizado])
    }

    return(
        <form>
            {carrito && carrito.map((item)=> (
                    <div className="item-info" key={item.isbn}>
                       <p className="item-info-titulo">{item.titulo}</p>
                       <p className="item-info-autor">{item.autor}</p>
                       <p className="item-info-editorial">{item.editorial}</p>
                       <p className="item-info-precio">Precio: ${item.valor_unitario}</p>
                       <select defaultValue={item.cantidad && item.cantidad} id={item.isbn} onChange={actualizarCantidad}>
                         <option value="1">1</option>
                         <option value="2">2</option>
                         <option value="3">3</option>
                         <option value="4">4</option>
                         <option value="5">5</option>
                         <option value="6">6</option>
                         <option value="7">7</option>
                         <option value="8">8</option>
                       </select>
                       <img onClick={eliminar} id={item.isbn} className="item-info-cierre" src="./cierre.svg"/>
                   </div>
            ))}
            <p>{total && total}</p>
            <input type="button" value="Comprar"/>
        </form>
        
    )
}