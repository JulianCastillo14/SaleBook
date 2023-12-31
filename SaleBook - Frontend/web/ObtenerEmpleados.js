import {Peticion} from "./Peticion.js"

async function obtenerEmpleados() {
    const tbody = document.querySelector("#tbody")
    const {status, respuesta } = await Peticion("http://localhost:2020/api/Empleados/list","GET")
    let template = ``
    let Empleados = await respuesta.json()

    if(status){
        Empleados.forEach(Empleado => {
            template += ` <tr>
                            <th scope="row">${Empleado.numeroDocumento}</th>
                            <td>${Empleado.idTipoDocumento.descripcion}</td>
                            <td>${Empleado.primerNombre}  ${Empleado.segundoNombre} ${Empleado.primerApellido} ${Empleado.segundoApellido}</td>
                            <td>${Empleado.fechaNacimiento}</td>
                            <td>${Empleado.genero}</td>
                            <td>${Empleado.correo}</td>
                            <td>${Empleado.usuario}</td>
                            <td>${Empleado.password}</td>
                        </tr>`
        });
        tbody.innerHTML = template
    }else{
        tbody = `<tr>
                        <td colspan="10">${Empleados}</td>
                    </tr>`
        tbody.innerHTML = template
    }
    console.log(Empleados)
}

async function obtenerEmpleadosDocumento(numeroDocumento) {
    console.log(typeof(numeroDocumento))
    const tbody = document.querySelector("#tbody")
    const {status, respuesta} = await Peticion(`http://localhost:2020/api/Empleados/list/${numeroDocumento}`,"GET")
    let Empleado = await respuesta.json()
    if(status){     
        let template = ` <tr>
                            <th scope="row">${Empleado.numeroDocumento}</th>
                            <td>${Empleado.idTipoDocumento.descripcion}</td>
                            <td>${Empleado.primerNombre}  ${Empleado.segundoNombre} ${Empleado.primerApellido} ${Empleado.segundoApellido}</td>
                            <td>${Empleado.fechaNacimiento}</td>
                            <td>${Empleado.genero}</td>
                            <td>${Empleado.correo}</td>
                            <td>${Empleado.usuario}</td>
                            <td>${Empleado.password}</td>
                        </tr>`
        tbody.innerHTML = template
    }else{
        tbody = `<tr>
                        <td colspan="10">${Empleado}</td>
                    </tr>`
        tbody.innerHTML = template
    }
    console.log(Empleado)
}

const btnConsultar = document.querySelector("#btn-consultar")
btnConsultar.addEventListener('click', () =>{
    const numeroDocumento = document.querySelector("#Documento").value
    obtenerEmpleadosDocumento(numeroDocumento)
})

const btnAll = document.querySelector("#btn-all")

btnAll.addEventListener('click', obtenerEmpleados)

document.addEventListener('DOMContentLoaded', obtenerEmpleados)