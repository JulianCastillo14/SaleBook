import { Peticion } from "./Peticion.js";
import { ValidarMensaje } from "./ValidarMensaje.js";

document.querySelector(".login-btn").addEventListener("click", async (e) => {
    e.preventDefault()
    let usuario = document.querySelector(".input-usuario").value
    let contraseña = document.querySelector(".input-contraseña").value

    const data = {
        "usuario": usuario,
        "contraseña": contraseña
    }

    const { status, respuesta } = await Peticion("http://localhost:2020/login", "POST", data)

    let ingreso = await respuesta.json()

    if (status) {   
        if(ingreso == 1){
            window.location.href = "./ModuloLibros.html"  
        }else{
            ValidarMensaje("Usuario o contraseña incorrectos",  "red")
        }
    } else {
        ValidarMensaje("Ocurrio un error al conectar", "red")
    }
})  


document.querySelector(".login-invisible").addEventListener("click", async (e) => {
    e.preventDefault()
    let input = document.querySelector(".input-contraseña")
    let img =  document.querySelector(".login-invisible")
    if(input.getAttribute("type") == "text"){
        input.setAttribute("type", "password")
        img.setAttribute("src", "./assets/img/invisible.png")
        return
    }

    input.setAttribute("type", "text")
    img.setAttribute("src", "./assets/img/ojo.png")
})