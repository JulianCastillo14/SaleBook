import { useContext, useEffect, useState } from "react"
import { CarritoContext } from "../context/carrito"
import "../styles/Carrito.css"
import { SesionContext } from "../context/sesion"

export function Carrito(){
    const {carrito, setCarrito} = useContext(CarritoContext)
    const {sesion} = useContext(SesionContext)
    const [total, setTotal] = useState()
    const [descuento] = useState(0)
    const [modal, setModal] = useState(false)
    const [tuCompra, setTuCompra] = useState(false)

    function eliminar(e){
        setCarrito([...carrito.filter(libro => libro.isbn != e.target.id)])
    }
    console.log(carrito)

    useEffect(()=>{
        if(carrito.length  > 0){
            let valueTotal = 0;
            carrito.forEach(elemento => {
                valueTotal +=  elemento.cantidad*elemento.valor_unitario
            });

            setTotal(valueTotal)
        }else{
            setTotal(0)
        }      
    },[carrito])

    function actualizarCantidad(e){  
        e.preventDefault()
    
        let carritoActualizado = carrito.map(libro=>{
            if(libro.isbn == e.target.id){
                libro.cantidad = e.target.value
            }
            
            return libro
        })
        
        setCarrito([...carritoActualizado])
    }

    function comprar(factura){
     

        const cantidades = carrito.map(libro=>libro.cantidad)
        const libros = carrito.map(libro=> libro)

        const data = {
            "cantidades": cantidades,
            "libros": libros,
            "factura": factura
        }

        console.log(data)
        console.log(carrito)
        fetch("http://localhost:2020/api/facturas/",{
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res=>res.json())
        .then(res=>{
            setTuCompra(res)
        })
        .catch(error=>console.log(error))
    }

    function usuarioPeticion(e){
        e.preventDefault()
        

        fetch(`http://localhost:2020/api/clientes/list/correo/${sesion.perfil}`)
        .then(res=>res.json())
        .then(res=>{
            comprar({
                "idFactura": Math.random()*1000000,
                "fecha": new Date(Date.now()).toISOString(),
                "numeroDocumento": res,
                "subTotal": total,
                "descuento": descuento , 
                "valorTotal": total - total*descuento, 
            })
        })
    }

    function limpiar(){
        setTuCompra(false)
        setCarrito([])
        setModal(false)
    }

    return(
        <form>
            {carrito && carrito.map((item)=> (
                    <div className="item-info" key={item.isbn}>
                       <img src={item.imagenes[0]?.url}/>
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
            {
                carrito.length > 0 ? 
                <>
                    <p>Descuento: ${descuento}</p>
                    <p>Total: ${total && total}</p>
                    <input type="button" value="Comprar" onClick={()=>setModal(true)} />
                </>:
                <p>No has Añadido nada al carrito</p>
            }
            
            {modal &&
                <div className="modal_compra">
                    <p className="modal_compra_memsaje">¿Seguro que deseas hacer esta compra?</p>
                    <button className="modal_compra_aceptar" onClick={usuarioPeticion} >Aceptar</button>
                    <button className="modal_compra_cancelar" onClick={()=>setModal(false)}>Cancelar</button>
                </div>
            }
            {
                tuCompra && 
                <div>
                    <h2>Felicitaciones Tu Compra Ha sido Exitosa</h2>
                     <ul>
                        <li key={tuCompra.factura.idFactura}>
                            <h3>No Factura{tuCompra.factura.idFactura}</h3>
                            <h3>Libros Comprados:</h3>
                            {tuCompra.libros && tuCompra.libros.map((libro, index) => (
                                <div>
                                    <img src={libro.imagenes[0]?.url} />
                                    <h4>Titulo: {libro.titulo}</h4>
                                    <p>Categoria: {libro.categoria}</p>
                                    <p>Editorial: {libro.editorial}</p>
                                    <p>Idioma: {libro.idioma}</p>
                                    <p>Valor Unitario: {libro.valor_unitario}</p>
                                    <p>Cantidad: {tuCompra.cantidades && tuCompra.cantidades[index]}</p>
                                    <p>Valor: {tuCompra.cantidades && libro.valor_unitario*tuCompra.cantidades[index]}</p>
                                </div>
                                ))
                            }
                            <p>Descuento: {tuCompra.factura.descuento}</p>
                            <p>Toatal sin Descuento: {tuCompra.factura.subTotal}</p>
                            <p>Total Final: {tuCompra.factura.valorTotal}</p>
                        </li>       
                    </ul>
                    <button onClick={limpiar}>Cerrar</button>
                </div>
            }
        </form>
    )
}