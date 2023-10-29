import {Peticion} from "./Peticion.js"
import { ValidarMensaje } from "./ValidarMensaje.js"

document.querySelector(".btn-editar").addEventListener("click",  async (e) => {
    e.preventDefault()
    let isbn = document.querySelector(".input-isbn").value
    let titulo = document.querySelector(".input-titulo").value
    let autor = document.querySelector(".input-autor").value
    let categoria = document.querySelector(".input-categoria").value
    let edicion = document.querySelector(".input-edicion").value
    let editorial = document.querySelector(".input-editorial").value
    let publicacion = document.querySelector(".input-publicacion").value
    let idioma = document.querySelector(".input-idioma").value
    let valor = document.querySelector(".input-valor").value
    let stock = document.querySelector(".input-stock").value

    const data = {
        "isbn":  isbn,
        "titulo": titulo,
        "autor": autor,
        "edicion": edicion,
        "categoria": categoria,
        "fecha_publicacion": `${publicacion}-01-01`,
        "editorial": editorial,
        "idioma": idioma,
        "valor_unitario": parseFloat(valor),
        "stock": parseInt(stock)
    }   

    for (const key in data) {
        if(data[key] == null || data[key] == "" || data[key] == undefined){
            ValidarMensaje("Todos los campos son obligatorios", "red")
            return
        }     
    }

    const {status, respuesta} = await Peticion("http://localhost:2020/api/libros/","PUT",data)

    
    let mensaje = await respuesta.json()
    if(status){
        ValidarMensaje("Libro editado correctamente", "#2c8069")
    }else{
        ValidarMensaje(mensaje.mensaje, "red")
    }
})