import { useContext, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { SesionContext } from "../context/sesion"
import "../styles/Perfil.css"

export function Perfil(){

    const {sesion, setSesion} = useContext(SesionContext)
    const [perfil, setPerfil] = useState(null)
    const [vista, setVista] = useState(true)
    const [facturas, setFacturas] = useState()

    useEffect(()=>{
        fetch(`http://localhost:2020/api/clientes/list/correo/${sesion.perfil}`)
        .then(res=>res.json())
        .then(res=>setPerfil(res))
    },[])


    useEffect(()=>{
        if(perfil != null){
            fetch("http://localhost:2020/api/facturas/list",{
                method: "POST",
                body: JSON.stringify(perfil),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(res=>res.json())
            .then(res=>{
                setFacturas(res);
                console.log(res)
            })
        }
    },[perfil])

    return(
        <div id="Container-perfil">
        <div>
            <h2 id="TuPerfil">
                <svg id="i-cuenta" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M12 11q.825 0 1.413-.588Q14 9.825 14 9t-.587-1.413Q12.825 7 12 7q-.825 0-1.412.587Q10 8.175 10 9q0 .825.588 1.412Q11.175 11 12 11Zm0 2q-1.65 0-2.825-1.175Q8 10.65 8 9q0-1.65 1.175-2.825Q10.35 5 12 5q1.65 0 2.825 1.175Q16 7.35 16 9q0 1.65-1.175 2.825Q13.65 13 12 13Zm0 11q-2.475 0-4.662-.938q-2.188-.937-3.825-2.574Q1.875 18.85.938 16.663Q0 14.475 0 12t.938-4.663q.937-2.187 2.575-3.825Q5.15 1.875 7.338.938Q9.525 0 12 0t4.663.938q2.187.937 3.825 2.574q1.637 1.638 2.574 3.825Q24 9.525 24 12t-.938 4.663q-.937 2.187-2.574 3.825q-1.638 1.637-3.825 2.574Q14.475 24 12 24Zm0-2q1.8 0 3.375-.575T18.25 19.8q-.825-.925-2.425-1.612q-1.6-.688-3.825-.688t-3.825.688q-1.6.687-2.425 1.612q1.3 1.05 2.875 1.625T12 22Zm-7.7-3.6q1.2-1.3 3.225-2.1q2.025-.8 4.475-.8q2.45 0 4.463.8q2.012.8 3.212 2.1q1.1-1.325 1.713-2.95Q22 13.825 22 12q0-2.075-.788-3.887q-.787-1.813-2.15-3.175q-1.362-1.363-3.175-2.151Q14.075 2 12 2q-2.05 0-3.875.787q-1.825.788-3.187 2.151Q3.575 6.3 2.788 8.113Q2 9.925 2 12q0 1.825.6 3.463q.6 1.637 1.7 2.937Z"/>
                </svg>Tu Perfil
            </h2>
            <aside>
                <ul id="Tipo-Datos">
                    <li onClick={()=>setVista(true)}>Datos Personales</li>
                    <li onClick={()=>setVista(false)}>Datos de la Cuenta</li>
                </ul>
            </aside>

            <Link to="../">
                <button id="Cerrar-Sesion" onClick={()=>{localStorage.removeItem("sesion"); setSesion(null)}}>
                    <svg xmlns="http://www.w3.org/2000/svg" id="i-salir" viewBox="0 0 24 24">
                        <g fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5">
                            <path d="M9.002 7c.012-2.175.109-3.353.877-4.121C10.758 2 12.172 2 15 2h1c2.829 0 4.243 0 5.122.879C22 3.757 22 5.172 22 8v8c0 2.828 0 4.243-.878 5.121C20.242 22 18.829 22 16 22h-1c-2.828 0-4.242 0-5.121-.879c-.768-.768-.865-1.946-.877-4.121" opacity=".5"/>
                            <path strokeLinejoin="round" d="M15 12H2m0 0l3.5-3M2 12l3.5 3"/>
                        </g>
                    </svg>Cerrar Sesion
                </button>
            </Link>

        </div>
        <div id="Datos-sel">
        { vista ? 
            <section>
                {perfil && <ul>
                    <div className="union">
                        <div className="mw20">
                            <li className="c-verde">Nombres</li>
                            <div className="flex-class">     
                                <li className="mr10">{perfil.primerNombre}</li>
                                <li>{perfil.segundoNombre}</li>
                            </div>
                        </div>
                        <div className="mw20">
                            <li className="c-verde">Apellidos</li>
                            <div className="flex-class">
                                <li className="mr10">{perfil.primerApellido}</li>
                                <li>{perfil.segundoApellido}</li>
                            </div>
                        </div>
                    </div>
                    <div className="union">
                        <div className="flex-class-column mw20">
                            <li className="c-verde">Genero</li>
                            <li>{perfil.genero}</li>
                        </div>
                        <div className="flex-class-column mw80">
                        <li className="c-verde">Fecha Nacimiento</li>
                        <li>{perfil.fechaNacimiento}</li>
                        </div>
                    </div>
                    
                </ul>}
            </section>
            :
            <section>
                {perfil && <ul>
                    <div className="union">
                        <div className="flex-class-column mw20">
                        <li className="c-verde">Correo</li>
                        <li>{perfil.correo}</li>
                        </div>
                        <div className="flex-class-column mw20">
                            <li className="c-verde">Contraseña</li>
                            <li>{perfil.password}</li>
                        </div>
                    </div>
                    <li className="c-verde mt10  mw20">Tus Compras</li>
                    <div>
                        
                    </div>
                    <div className="container-factura">
                    <li>
                        <ul>
                            {facturas && facturas.map(factura => (
                                    <div id="fac">
                                        <li key={factura.factura.idFactura}>
                                            <div className="flex-class-column mw20 mt10 border-linea">
                                                <h3>No Factura{factura.factura.idFactura}</h3>
                                            </div>
                                            <div className="flex-class-column mw20 mt10">
                                                <h3>Libros Comprados:</h3>
                                                {factura.libros && factura.libros.map((libro, index) => (
                                                    <div className="container-dat-fac">
                                                        <div id="img-libro">
                                                            <img src={libro.imagenes[0]?.url}  />
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
                                                                    <p> {factura.cantidades && factura.cantidades[index]}</p>
                                                                </div>
                                                            </div>
                                                            
                                                            <div className="container-dat-fac vt">
                                                                <p className="mr5">Valor:</p>
                                                                <p> {factura.cantidades && libro.valor_unitario*factura.cantidades[index]}</p>
                                                            </div>
                                                        </div>
                                                        
                                                    </div>
                                                    ))
                                                }
                                            </div>
                                            
                                        </li> 
                                    </div>
                                ))
                            }
                            
                        </ul>
                    </li>

                    </div>
                    
                </ul>}
            </section>
        }
        </div>       
        
        </div>
    )
}