import {Peticion} from "./Peticion.js"

document.querySelector(".btn-editar").addEventListener("click",  async (e) => {
    e.preventDefault()

    let primerNombre = document.querySelector("#Primer-nombre").value
    let segundoNombre = document.querySelector("#Segundo-nombre").value
    let primerApellido = document.querySelector("#Primer-apellido").value
    let segundoApellido = document.querySelector("#Segundo-apellido").value
    let numeroDocumento = document.querySelector("#Documento").value
    let tipoDocumentoMap = {
        "TI": {
            "idTipoDocumento": 1,
            "abreviatura": "TI",
            "descripcion": "TARJETA DE IDENTIDAD"
        },
        "CC": {
            "idTipoDocumento": 2,
            "abreviatura": "CC",
            "descripcion": "CEDULA DE CIUDADANIA"
        },
        "TE": {
            "idTipoDocumento": 3,
            "abreviatura": "TE",
            "descripcion": "TARJETA DE EXTRANJERIA"
        },
        "CE": {
            "idTipoDocumento": 4,
            "abreviatura": "CE",
            "descripcion": "CEDULA DE EXTRANJERIA"
        }
    };
    let tipoDocumento = document.querySelector("#Tipo-Documento").value
    let tipoDocumentoData = tipoDocumentoMap[tipoDocumento];
    let fechaNacimiento = document.querySelector("#Fecha-nacimiento").value
    let fechaNacimiento2 = new Date(fechaNacimiento);
    let fechaNacimientoData = fechaNacimiento2.toISOString().split('T')[0];
    let genero = document.querySelector("#Genero").value
    let correo = document.querySelector("#Correo").value
    let usuario = document.querySelector("#Usuario").value
    let password = document.querySelector("#Password").value
    const data = {
        "numeroDocumento": numeroDocumento,
        "idTipoDocumento": tipoDocumentoData,
        "primerNombre": primerNombre,
        "segundoNombre": segundoNombre,
        "primerApellido": primerApellido,
        "segundoApellido": segundoApellido,
        "fechaNacimiento": fechaNacimientoData,
        "genero": genero,
        "correo": correo,
        "usuario": usuario,
        "password": password
    }  

    const {status, respuesta: Empleados } = await Peticion("http://localhost:2020/api/Empleados/","PUT",data)
    
    if(status){
        alert("Empleado editado correctamente")
    }else{
        alert("Ocurrio un error al editar el empleado")
    }
    console.log(status)
    console.log(data)
})