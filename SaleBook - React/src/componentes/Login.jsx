import { useContext, useEffect, useRef, useState } from "react"
import "../styles/LoginCliente.css"
import { SesionContext } from "../context/sesion"
import { useNavigate } from "react-router-dom"

export function Login(){
    const {sesion, setSesion} = useContext(SesionContext)
    const [bloqueado, setBloqueado] = useState(true)
    const FormLogin = useRef(null)
    const navigate = useNavigate()

    function enviarData(e) {
        e.preventDefault();
        
        const formData = new FormData(FormLogin.current);
        const data = Object.fromEntries(formData);
        
        
        fetch("https://salebook-backend-production.up.railway.app/api/clientes/login",{
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res=>res.json())
        .then(res=>{
            setSesion({login : res, perfil: data.correo})
        })
    }

    useEffect(()=>{
        if(sesion != null){
            if(sesion.login == 1){
                localStorage.setItem("sesion", JSON.stringify(sesion))
                navigate("../")
            }
        }
           
    }, [sesion])


    return(
        <>
        <article className="content-loginCliente">
            <section className="loginCliente">
                <h2 className="loginCliente-titulo">Inicia Sesion</h2>
                <form  ref={FormLogin} onSubmit={enviarData} className="loginCliente-form">
                    <div className="loginCliente-correo">
                    <svg xmlns="http://www.w3.org/2000/svg" width="1.3em" height="1.3em" viewBox="0 0 24 24"><path fill="#000000" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zM7.35 18.5C8.66 17.56 10.26 17 12 17s3.34.56 4.65 1.5c-1.31.94-2.91 1.5-4.65 1.5s-3.34-.56-4.65-1.5zm10.79-1.38a9.947 9.947 0 0 0-12.28 0A7.957 7.957 0 0 1 4 12c0-4.42 3.58-8 8-8s8 3.58 8 8c0 1.95-.7 3.73-1.86 5.12z"/><path fill="#000000" d="M12 6c-1.93 0-3.5 1.57-3.5 3.5S10.07 13 12 13s3.5-1.57 3.5-3.5S13.93 6 12 6zm0 5c-.83 0-1.5-.67-1.5-1.5S11.17 8 12 8s1.5.67 1.5 1.5S12.83 11 12 11z"/></svg>    
                        <input htmlFor="correo" name="correo" className="input-correo" type="text" placeholder="Correo"/>
                    </div>
                    <div  className="loginCliente-contraseña">
                    <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 14 14"><g fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round"><path d="M11 5.5H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1Zm-.5 0V4a3.5 3.5 0 1 0-7 0v1.5"/><path d="M7 10a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1Z"/></g></svg>
                        <input htmlFor="contraseña" name="contraseña" className="input-contraseña" type={bloqueado ? "password" : "text"} placeholder="Contraseña"/>
                        <img className="loginCliente-logos loginCliente-invisible" onClick={()=>setBloqueado(!bloqueado)} src={bloqueado ? "/ojo.png" : "/invisible.png"}/>
                    </div>
                    <input type="submit" className="loginCliente-btn" value="Ingresar"/>
                </form>
            </section>
        </article>
        </>
    )
}

export default Login;