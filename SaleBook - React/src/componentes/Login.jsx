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
                        <img className="loginCliente-logos" src="../../public/usuario.png"/>    
                        <input htmlFor="correo" name="correo" className="input-correo" type="text" placeholder="Correo"/>
                    </div>
                    <div  className="loginCliente-contraseña">
                        <img className="loginCliente-logos" src="../../public/bloquear.png"/>
                        <input htmlFor="contraseña" name="contraseña" className="input-contraseña" type={bloqueado ? "password" : "text"} placeholder="Contraseña"/>
                        <img className="loginCliente-logos loginCliente-invisible" onClick={()=>setBloqueado(!bloqueado)} src={bloqueado ? "../../public/ojo.png" : "../../public/invisible.png"}/>
                    </div>
                    <input type="submit" className="loginCliente-btn" value="Ingresar"/>
                </form>
            </section>
        </article>
        </>
    )
}

export default Login;