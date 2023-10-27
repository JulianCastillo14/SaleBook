import {Peticion} from "./Peticion.js"

async function obtenerLibros() {
    const tbody = document.querySelector(".tbody")
    const {status, respuesta: libros } = await Peticion("http://localhost:2020/api/libros/list","GET")
    let template = ``

    if(status){
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
        template = `<tr>
                        <td colspan="10">${libros}</td>
                    </tr>`
        tbody.innerHTML = template
    }
    console.log(libros)
}

async function obtenerLibrosISBN(isbn) {
    console.log(typeof(isbn))
    const tbody = document.querySelector(".tbody")
    const {status, respuesta: libro } = await Peticion(`http://localhost:2020/api/libros/list/${isbn}`,"GET")

    console.log(libro)
    console.log(status)
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
        template = `<tr>
                        <td colspan="10">${libro}</td>
                    </tr>`
        tbody.innerHTML = template
    }
    console.log(libro)
}

const btnISBN = document.querySelector(".btn-isbn")


btnISBN.addEventListener('click', () =>{
    const ISBN = document.querySelector(".input-isbn").value
    obtenerLibrosISBN(ISBN)
})

const btnAll = document.querySelector(".btn-all")

btnAll.addEventListener('click', obtenerLibros)

document.addEventListener('DOMContentLoaded', obtenerLibros)

