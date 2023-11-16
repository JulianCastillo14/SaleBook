import React from 'react'
import '../styles/EditarEmpleado.css'
const EditarEmpleado = () => {
  return (
    <div id='container-ediEmpleado'>
        <form>
            <div>
                <input className='input-ede' id="Primer-nombre" type="text" placeholder=" Primer nombre"/>
                <input className='input-ede' id="Segundo-nombre" type="text" placeholder=" Segundo nombre"/>
                <input className='input-ede' id="Primer-apellido" type="text" placeholder=" Primer apellido"/>
                <input className='input-ede' id="Segundo-apellido" type="text" placeholder=" Segundo apellido"/>
            </div>
            <div>
                <input className='input-ede' type="text" id="Documento" name="nombre" placeholder=" Documento"/>
                <select className='select-ede' id="Tipo-Documento">
                    <option value="" disabled selected>Selecciona un tipo de documento</option>
                    <option value="TI">Tarjeta de identidad</option>
                    <option value="CC">Cédula de ciudadanía </option>
                    <option value="TI">Tarjeta de extranjería</option>
                    <option value="CC">Cédula de extranjería </option>
                </select>
                <div id="Fecha-Nacimiento">
                    Fecha de Nacimiento:
                    <input className='input-ede' id="Fecha-nacimiento" type="date"/>
                </div>
            </div>
            <div className='ajustar-div-ede'>
                <select className='select-ede' id="Genero" name="genero">
                    <option value="" disabled selected>Selecciona una identidad de género</option>
                    <option value="Masculino">Masculino</option>
                    <option value="Femenino">Femenino</option>
                </select>
                <input className='input-ede' id="Correo" type="email" placeholder=" Correo electrónico"/>
            </div>
            <div className='ajustar-div-ede'>
                <input className='input-ede' id="Usuario" type="text" placeholder=" Usuario"/>
                <input className='input-ede' id="Password" type="text" placeholder=" Contraseña"/>
                <button className="btn-editar">Editar Empleado</button>
            </div>
        </form>
    </div>
  )
}

export default EditarEmpleado