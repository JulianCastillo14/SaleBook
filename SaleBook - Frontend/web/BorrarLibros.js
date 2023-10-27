import {Peticion} from "./Peticion.js"

const btnISBN = document.querySelector(".btn-isbn-remove")


async function eliminarLibrosISBN(isbn){
    const {status, respuesta} = await Peticion(`http://localhost:2020/api/libros/${isbn}`,"DELETE")
    if(status){
        alert("Libro eliminado correctamente")
        location.reload() 
    }
    else{
        alert("Ocurrio un error al eliminar el libro")
    }
    console.log(status)
    console.log(respuesta)
}

btnISBN.addEventListener('click', async () =>{
    const ISBN = document.querySelector(".input-isbn-remove").value
    eliminarLibrosISBN(ISBN)
})
