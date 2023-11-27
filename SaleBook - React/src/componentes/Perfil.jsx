import { useContext, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { SesionContext } from "../context/sesion"

export function Perfil(){

    const {sesion, setSesion} = useContext(SesionContext)
    const [perfil, setPerfil] = useState()
    const [vista, setVista] = useState(true)

    useEffect(()=>{
        fetch(`http://localhost:2020/api/clientes/list/correo/${sesion.perfil}`)
        .then(res=>res.json())
        .then(res=>setPerfil(res))
    },[])



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