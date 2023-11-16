import React from 'react'
import '../styles/CrearEmpleado.css'

const CrearEmpleado = () => {
  return (
    <div className='container-crearempleado'>
        <form>
            <div>
                <input className='input-ce' id="Primer-nombre" type="text" placeholder=" Primer nombre"/>
                <input className='input-ce' id="Segundo-nombre" type="text" placeholder=" Segundo nombre"/>
                <input className='input-ce' id="Primer-apellido" type="text" placeholder=" Primer apellido"/>
                <input className='input-ce' id="Segundo-apellido" type="text" placeholder=" Segundo apellido"/>
            </div>
            <div>
                <input className='input-ce' type="text" id="Documento" name="nombre" placeholder=" Documento"/>
                <select className='select-ce' id="Tipo-Documento">
                    <option value="" disabled selected>Selecciona un tipo de documento</option>
                    <option value="TI">Tarjeta de identidad</option>
                    <option value="CC">Cédula de ciudadanía </option>
                    <option value="TI">Tarjeta de extranjería</option>
                    <option value="CC">Cédula de extranjería </option>
                </select>
                <div id="Fecha-Nacimiento">
                    Fecha de Nacimiento:
                    <input className='input-ce' id="Fecha-nacimiento" type="date"/>
                </div>
            </div>
            <div className='ajustar-div'>
                <select className='select-ce' id="Genero" name="genero">
                    <option value="" disabled selected>Selecciona una identidad de género</option>
                    <option value="Masculino">Masculino</option>
                    <option value="Femenino">Femenino</option>
                </select>
                <input className='input-ce' id="Correo" type="email" placeholder=" Correo electrónico"/>
            </div>
            <div className='ajustar-div'>
                <input className='input-ce' id="Usuario" type="text" placeholder=" Usuario"/>
                <input className='input-ce' id="Password" type="text" placeholder=" Contraseña"/>
                <button class="btn-crear">Crear Empleado</button>
            </div>
        </form>
    </div>
  )
}

export default CrearEmpleado