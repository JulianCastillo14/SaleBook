import { useEffect, useRef, useState } from "react"
import "../styles/LoginAdministracion.css"

export function LoginAdministracion(){

    const [login, setLogin] = useState()
    const [bloqueado, setBloqueado] = useState(true)
    const FormLogin = useRef(null)

    function enviarData(e) {
        e.preventDefault();
        
        const formData = new FormData(FormLogin.current);
        const data = Object.fromEntries(formData);
   
        console.log(data)
        fetch("http://localhost:2020/api/Empleados/login",{
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res=>res.json())
        .then(res=>setLogin(res))
    }

    useEffect(()=>{
        if(login == 1){
            window.location.href = "./Administracion"
        }
    }, [login])


    return(
        <>
        <article className="content-login">
            <img src="../../public/Fondo-login.png" />
            <section className="login">
                <h2 className="login-titulo">Bienvenidos a SaleBook</h2>
                <form  ref={FormLogin} onSubmit={enviarData} className="login-form">
                    <div className="login-usuario">
                        <img className="login-logos" src="../../public/usuario.png"/>    
                        <input htmlFor="usuario" name="usuario" className="input-usuario" type="text" placeholder="Usuario"/>
                    </div>
                    <div  className="login-contraseña">
                        <img className="login-logos" src="../../public/bloquear.png"/>
                        <input htmlFor="contraseña" name="contraseña" className="input-contraseña" type={bloqueado ? "password" : "text"} placeholder="Contraseña"/>
                        <img className="login-logos login-invisible" onClick={()=>setBloqueado(!bloqueado)} src={bloqueado ? "../../public/ojo.png" : "../../public/invisible.png"}/>
                    </div>
                    <input type="submit" className="login-btn" value="Iniciar Sesion"/>
                </form>
            </section>
        </article>
        </>
    )
}