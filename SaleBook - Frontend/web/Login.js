import { Peticion } from "./Peticion.js";

document.querySelector(".login-btn").addEventListener("click", async (e) => {
    e.preventDefault()
    let usuario = document.querySelector(".input-usuario").value
    let contraseña = document.querySelector(".input-contraseña").value

    const data = {
        "usuario": usuario,
        "contraseña": contraseña
    }

    const { status, respuesta } = await Peticion("http://localhost:2020/login", "POST", data)

    if (status) {   
        if(respuesta == 1){
            window.location.href = "./inicio.html"  
        }else{
            alert("Usuario o contraseña incorrectos")
        }
    } else {
        alert("Ocurrio un error al iniciar sesion")
    }
    console.log(status)
    console.log(respuesta)
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