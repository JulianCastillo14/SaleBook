import { useContext, useEffect, useState } from "react"
import { CarritoContext } from "../context/carrito"
import "../styles/Carrito.css"
import { SesionContext } from "../context/sesion"
import { useNavigate } from "react-router-dom"

export function Carrito(){
    
    const navigate = useNavigate()
    const {carrito, setCarrito} = useContext(CarritoContext)
    const {sesion} = useContext(SesionContext)
    const [total, setTotal] = useState()
    const [descuento] = useState(0)
    const [modal, setModal] = useState(false)
    const [tuCompra, setTuCompra] = useState({})
    const [procesando, setProcesando] = useState(3)

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
        fetch("https://salebook-backend-production.up.railway.app/api/facturas/",{
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res=>res.json())
        .then(res=>{
            setTuCompra(res)
            setProcesando(0)
        })
        .catch(error=>console.log(error))
    }

    function usuarioPeticion(e){
        e.preventDefault()
        
        if(sesion == null){
            navigate("../login")
            return
        }

        setProcesando(1)
        fetch(`https://salebook-backend-production.up.railway.app/api/clientes/list/correo/${sesion.perfil}`)
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
        setTuCompra({})
        setCarrito([])
        setModal(false)
        setProcesando(3)
    }

    return(
        <form id="Formulario-Carrito">
            <div>
                <div id="container-global-items">
                    <div>  
                    {carrito && carrito.map((item)=> (
                        <div className="item-info" key={item.isbn}>
                            <div>
                                <div id="Containter-productos">
                                    <div>
                                        <img id="img-item" src={item.imagenes[0]?.url}/>
                                    </div>
                                    <div>
                                        <p className="item-info-titulo mt">{item.titulo}</p>
                                        <p className="item-info-autor mt">{item.autor}</p>
                                        <p className="item-info-editorial mt">{item.editorial}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="mt ml">
                                <p>Precio</p>
                                <p className="item-info-precio pt"> ${item.valor_unitario}</p>
                            </div>
                            <div className="mt">
                                <p>Cantidad</p>
                                <select className="mt20 sel" defaultValue={item.cantidad && item.cantidad} id={item.isbn} onChange={actualizarCantidad}>
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
                            <div id="item-container">
                                <img onClick={eliminar} id={item.isbn} className="item-info-cierre " src="./cierre.svg"/>
                            </div>
                        </div>      
                    ))}
                    </div>
                    <div id="container-comprase">
                        <div>
                        {
                            carrito.length > 0 ? 
                            
                            <div id="container-compra">
                                <p>Descuento: ${descuento}</p>
                                <div className="Total mt20">
                                    <p className="mr5p">Total:</p>
                                    <p> ${total && total}</p>
                                </div>
                                <input type="button" id="comprar-btn" value="Comprar" onClick={()=>setModal(true)} />
                            </div>:
                            <p id="Carrito-Vacio">Tu carrito esta vacio.</p>
                        }
                        </div>
                        <div>
                            {modal &&
                                <div className="modal_compra">
                                    <p className="modal_compra_memsaje">Confirmar compra</p>
                                    <button className="modal_compra_aceptar btn-CoC" onClick={usuarioPeticion} >Confirmar</button>
                                    <button className="modal_compra_cancelar btn-CoC" onClick={()=>setModal(false)}>Cancelar</button>
                                </div>
                            }
                        </div>
                    </div>
                </div>
                <div>
                <div id="container-procesando">
                    {
                        procesando == 1 ? 
                        <div>
                            <img src="../../public/Spinner-1s-200px.svg"/>
                            <p>Estamos procesando tu compra...</p>
                        </div>

                        : procesando == 0 ? 
                        <div className="container-ce">
                            <h2  className="mt20">¡Felicitaciones! Tu compra ha sido exitosa.</h2>
                            <ul>
                                <li key={tuCompra.factura.idFactura}>
                                    <div className="flex-class-column mw20 mt10 border-linea">
                                        <h3>No Factura{tuCompra.factura.idFactura}</h3>
                                    </div>
                                    <div className="flex-class-column mw20 mt10">
                                        <h3>Libros Comprados:</h3>
                                        {tuCompra.libros && tuCompra.libros.map((libro, index) => (
                                            <div className="container-dat-fac mgb20">
                                                <div id="img-libro">
                                                    <img src={libro.imagenes[0]?.url} />
                                                </div>
                                                <div className="flex-class-column alineacion">
                                                    <div className="container-dat-fac">
                                                        <h4 className="c2-verde mr5">Titulo:</h4>
                                                        <p> {libro.titulo}</p>
                                                    </div>
                                                    <div className="container-dat-fac">
                                                                    <p className="mr5">Categoria:</p>
                                                                    <p> {libro.categoria}</p>
                                                                </div>
                                                                <div className="container-dat-fac">
                                                                    <p className=" mr5">Editorial:</p>
                                                                    <p> {libro.editorial}</p>
                                                                </div>
                                                                <div className="container-dat-fac">
                                                                    <p className="mr5">Idioma:</p>
                                                                    <p> {libro.idioma}</p>
                                                                </div>

                                                </div>
                                                <div className="flex-class-column valores">
                                                    <div className="can-uni">
                                                        <div className="container-dat-fac">
                                                            <p className="mr5">Valor Unitario:</p>
                                                            <p> {libro.valor_unitario}</p>
                                                        </div>
                                                        <div className="container-dat-fac">
                                                            <p className="mr5">Cantidad:</p>
                                                            <p> {tuCompra.cantidades && tuCompra.cantidades[index]}</p>
                                                        </div>
                                                    </div>
                                                    <div className="container-dat-fac vt">
                                                        <p className="mr5">Valor:</p>
                                                        <p>{tuCompra.cantidades && libro.valor_unitario*tuCompra.cantidades[index]}</p>
                                                    </div>
                                                </div>
                                                
                                            </div>
                                            ))
                                        }

                                    </div>

                                    <div className="flex-class-column mw20">
                                        <h4>Descuento: {tuCompra.factura.descuento}</h4>
                                        <h4>Total sin Descuento: {tuCompra.factura.subTotal}</h4>
                                        <h4>Total Final: {tuCompra.factura.valorTotal}</h4>
                                    </div>
                                    
                                    
                                </li>       
                            </ul>
                            <button className="cerrar-compra-btn mw20 mt10" onClick={limpiar}>Cerrar</button>
                        </div>
                        :
                        <></>
                    }
                    </div>
                    
                </div>
            </div>
        </form>
    )
}