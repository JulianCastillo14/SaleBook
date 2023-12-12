import { useContext, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { SesionContext } from "../context/sesion"

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
        <>
        <h2>Tu Perfil</h2>
        <aside>
            <ul>
                <li onClick={()=>setVista(true)}>Datos Personales</li>
                <li onClick={()=>setVista(false)}>Datos de la Cuenta</li>
            </ul>
        </aside>
        { vista ? 
            <section>
                {perfil && <ul>
                    <li>Primer Nombre</li>
                    <li>{perfil.primerNombre}</li>
                    <li>Segundo Nombre</li>
                    <li>{perfil.segundoNombre}</li>
                    <li>Primer Apellido</li>
                    <li>{perfil.primerApellido}</li>
                    <li>Segundo Apellido</li>
                    <li>{perfil.segundoApellido}</li>
                    <li>Genero</li>
                    <li>{perfil.genero}</li>
                    <li>Fecha Nacimiento</li>
                    <li>{perfil.fechaNacimiento}</li>
                </ul>}
            </section>
            :
            <section>
                {perfil && <ul>
                    <li>Correo</li>
                    <li>{perfil.correo}</li>
                    <li>Contraseña</li>
                    <li>{perfil.password}</li>
                    <li>Tus Compras</li>
                    <li>
                        <ul>
                            {facturas && facturas.map(factura => (
                                    <li key={factura.factura.idFactura}>
                                        <h3>No Factura{factura.factura.idFactura}</h3>
                                        <h3>Libros Comprados:</h3>
                                        {factura.libros && factura.libros.map((libro, index) => (
                                            <div>
                                                <img src={libro.imagenes[0]?.url}  />
                                                <h4>Titulo: {libro.titulo}</h4>
                                                <p>Categoria: {libro.categoria}</p>
                                                <p>Editorial: {libro.editorial}</p>
                                                <p>Idioma: {libro.idioma}</p>
                                                <p>Valor Unitario: {libro.valor_unitario}</p>
                                                <p>Cantidad: {factura.cantidades && factura.cantidades[index]}</p>
                                                <p>Valor: {factura.cantidades && libro.valor_unitario*factura.cantidades[index]}</p>
                                            </div>
                                            ))
                                        }
                                    </li>  
                                ))
                            }
                            
                        </ul>
                    </li>
                </ul>}
            </section>
        }
        <Link to="../"><button onClick={()=>{
            localStorage.removeItem("sesion"); 
            setSesion(null)}}
        >Cerrar Sesion</button></Link>
        </>
    )
}