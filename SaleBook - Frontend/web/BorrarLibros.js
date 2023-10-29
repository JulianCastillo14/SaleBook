import {Peticion} from "./Peticion.js"
import { ValidarMensaje } from "./ValidarMensaje.js"

const btnISBN = document.querySelector(".btn-isbn-remove")


async function eliminarLibrosISBN(isbn){
    if(isbn == null || isbn == "" || isbn == undefined){
        ValidarMensaje("El campo ISBN es obligatorio", "red")
        return
    }

    const {status, respuesta} = await Peticion(`http://localhost:2020/api/libros/${isbn}`,"DELETE")

    let mensaje = await respuesta.json()

    if(status){
        ValidarMensaje("Libro eliminado correctamente", "#e04646")
    }
    else{
        ValidarMensaje(mensaje.mensaje, "red")
    }
}

btnISBN.addEventListener('click', async () =>{
    const ISBN = document.querySelector(".input-isbn-remove").value
    eliminarLibrosISBN(ISBN)
})
