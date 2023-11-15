import { useContext } from "react"
import { CarritoContext } from "../context/carrito"

export function Carrito(){
    const {carrito} = useContext(CarritoContext)


    return(
        <>
            {carrito && carrito.map((item, index)=> (
                    <div className="item-info" key={index}>
                       <p className="item-info-titulo">{item.titulo}</p>
                       <p className="item-info-autor">{item.autor}</p>
                       <p className="item-info-editorial">{item.editorial}</p>
                       <p className="item-info-precio">Precio: ${item.valor_unitario}</p>
                       <select>
                         <option value="1">1</option>
                         <option value="2">2</option>
                         <option value="3">3</option>
                         <option value="4">4</option>
                         <option value="5">5</option>
                         <option value="6">6</option>
                         <option value="7">7</option>
                         <option value="8">8</option>
                       </select>
                   </div>
            ))}
        </>
        
    )
}