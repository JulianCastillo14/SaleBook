import {Peticion} from "./Peticion.js"
import {ValidarMensaje} from "./ValidarMensaje.js"

async function obtenerLibros() {
    const tbody = document.querySelector(".tbody")
    const {status, respuesta } = await Peticion("http://localhost:2020/api/libros/list","GET")
    let template = ``
    let libros = await respuesta.json()
    if(status){
        if(libros.length == 0){
            ValidarMensaje("No hay libros disponibles", "red")
            return
        }
        
        libros.forEach(libro => {
            template += ` <tr>
                            <th scope="row">${libro.isbn}</th>
                            <td>${libro.titulo}</td>
                            <td>${libro.autor}</td>
                            <td>${libro.categoria}</td>
                            <td>${libro.edicion}</td>
                            <td>${libro.editorial}</td>
                            <td>${new Date(libro.fecha_publicacion).getFullYear()}</td>
                            <td>${libro.idioma}</td>
                            <td>${libro.valor_unitario}</td>
                            <td>${libro.stock}</td>
                        </tr>`
        });
        tbody.innerHTML = template
    }else{
        ValidarMensaje("Ocurrio un error al conectar", "red")
    }
}

async function obtenerLibrosISBN(isbn) {
    if(isbn == null || isbn == "" || isbn == undefined){
        ValidarMensaje("El campo ISBN es obligatorio", "red")
        return
    }

    const tbody = document.querySelector(".tbody")
    const {status, respuesta} = await Peticion(`http://localhost:2020/api/libros/list/${isbn}`,"GET")

    let libro = await respuesta.json()
   
    if(status){
            let template = ` <tr>
                            <th scope="row">${libro.isbn}</th>
                            <td>${libro.titulo}</td>
                            <td>${libro.autor}</td>
                            <td>${libro.categoria}</td>
                            <td>${libro.edicion}</td>
                            <td>${libro.editorial}</td>
                            <td>${new Date(libro.fecha_publicacion).getFullYear()}</td>
                            <td>${libro.idioma}</td>
                            <td>${libro.valor_unitario}</td>
                            <td>${libro.stock}</td>
                        </tr>`
        tbody.innerHTML = template
    }else{
        ValidarMensaje(libro.mensaje, "red")
    }
}

const btnISBN = document.querySelector(".btn-isbn")


btnISBN.addEventListener('click', () =>{
    const ISBN = document.querySelector(".input-isbn").value
    obtenerLibrosISBN(ISBN)
})

const btnAll = document.querySelector(".btn-all")

btnAll.addEventListener('click', obtenerLibros)

document.addEventListener('DOMContentLoaded', obtenerLibros)

