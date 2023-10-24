/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Other/javascript.js to edit this template
 */

async function Peticion(url, metodo, datos) {
     const respuesta =  await fetch(url,{
        method: metodo,
        body: JSON.stringify(datos),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    
    return {respuesta: await respuesta.json(), status: await respuesta.ok}
}

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
                        <td colspan="10">No hay libros registrados</td>
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
                        <td colspan="10">No hay libros registrados</td>
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

document.addEventListener('DOMContentLoaded', obtenerLibros)