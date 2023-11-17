import React, { useState, useEffect } from 'react';
import '../styles/EditarEmpleado.css';
import { Peticion } from '../js/Peticion';

const EditarEmpleado = () => {
  const [primerNombre, setPrimerNombre] = useState('');
  const [segundoNombre, setSegundoNombre] = useState('');
  const [primerApellido, setPrimerApellido] = useState('');
  const [segundoApellido, setSegundoApellido] = useState('');
  const [numeroDocumento, setNumeroDocumento] = useState('');
  const [tipoDocumento, setTipoDocumento] = useState('');
  const [fechaNacimiento, setFechaNacimiento] = useState('');
  const [genero, setGenero] = useState('');
  const [correo, setCorreo] = useState('');
  const [usuario, setUsuario] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    const obtenerEmpleado = async () => {
      if (numeroDocumento) {
        const { status, respuesta } = await Peticion(`http://localhost:2020/api/Empleados/${numeroDocumento}`, "GET");
        if (status) {
          const empleado = await respuesta.json();
          setPrimerNombre(empleado.primerNombre);
          setSegundoNombre(empleado.segundoNombre);
          setPrimerApellido(empleado.primerApellido);
          setSegundoApellido(empleado.segundoApellido);
          setNumeroDocumento(empleado.numeroDocumento);
          setTipoDocumento(empleado.tipoDocumento);
          setFechaNacimiento(empleado.fechaNacimiento);
          setGenero(empleado.genero);
          setCorreo(empleado.correo);
          setUsuario(empleado.usuario);
          setPassword(empleado.password);
        }
      }
    };

    obtenerEmpleado();
  }, [numeroDocumento]);

return (
    <div id='container-ediEmpleado'>
        <form>
            <div>
                <input className='input-ede' type="text" id="Documento" name="nombre" placeholder=" Documento"/>
                <input className='input-ede' id="Primer-nombre" type="text" placeholder=" Primer nombre"/>
                <input className='input-ede' id="Segundo-nombre" type="text" placeholder=" Segundo nombre"/>
                <input className='input-ede' id="Primer-apellido" type="text" placeholder=" Primer apellido"/>
            </div>
            <div>
                <input className='input-ede' id="Segundo-apellido" type="text" placeholder=" Segundo apellido"/>
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