import {Peticion} from "./Peticion.js"

const btnEliminar = document.querySelector("#btn-eliminar")


async function eliminarEmpleadoDocumento(numeroDocumento){
    const {status, respuesta} = await Peticion(`http://localhost:2020/api/Empleados/${numeroDocumento}`,"DELETE")
    if(status){
        alert("Empleado eliminado correctamente")
        location.reload() 
    }
    else{
        alert("Ocurrio un error al eliminar el empleado")
    }
    console.log(status)
    console.log(respuesta)
}

btnEliminar.addEventListener('click', async () =>{
    const numeroDocumento = document.querySelector("#Documento-eliminar").value
    eliminarEmpleadoDocumento(numeroDocumento)
})