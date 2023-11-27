import React, { useState } from 'react';
import '../styles/CrearEmpleado.css';
import { Peticion } from '../js/Peticion';

const CrearEmpleado = () => {
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

  const crearEmpleado = async (e) => {
    e.preventDefault();

    const tipoDocumentoMap = {
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

    const data = {
      "numeroDocumento": numeroDocumento,
      "idTipoDocumento": tipoDocumentoMap[tipoDocumento],
      "primerNombre": primerNombre,
      "segundoNombre": segundoNombre,
      "primerApellido": primerApellido,
      "segundoApellido": segundoApellido,
      "fechaNacimiento": fechaNacimiento,
      "genero": genero,
      "correo": correo,
      "usuario": usuario,
      "password": password
    };

    const { status, respuesta: Empleados } = await Peticion("http://localhost:2020/api/Empleados/", "POST", data);

    if (status) {
      alert("Empleado creado correctamente");
    } else {
      alert("Ocurrio un error al crear el empleado");
    }
  };

  return (
    <div className='container-crearempleado'>
      <form onSubmit={crearEmpleado}>
        <div>
          <input className='input-ce' id="Primer-nombre" type="text" placeholder=" Primer nombre" value={primerNombre} onChange={(e) => setPrimerNombre(e.target.value)} />
          <input className='input-ce' id="Segundo-nombre" type="text" placeholder=" Segundo nombre" value={segundoNombre} onChange={(e) => setSegundoNombre(e.target.value)} />
          <input className='input-ce' id="Primer-apellido" type="text" placeholder=" Primer apellido" value={primerApellido} onChange={(e) => setPrimerApellido(e.target.value)} />
          <input className='input-ce' id="Segundo-apellido" type="text" placeholder=" Segundo apellido" value={segundoApellido} onChange={(e) => setSegundoApellido(e.target.value)} />
        </div>
        <div>
          <input className='input-ce' type="text" id="Documento" name="nombre" placeholder=" Documento" value={numeroDocumento} onChange={(e) => setNumeroDocumento(e.target.value)} />
          <select className='select-ce' id="Tipo-Documento" value={tipoDocumento} onChange={(e) => setTipoDocumento(e.target.value)}>
            <option value="" disabled selected>Selecciona un tipo de documento</option>
            <option value="TI">Tarjeta de identidad</option>
            <option value="CC">Cédula de ciudadanía </option>
            <option value="TI">Tarjeta de extranjería</option>
            <option value="CC">Cédula de extranjería </option>
          </select>
          <div id="Fecha-Nacimiento">
            Fecha de Nacimiento:
            <input className='input-ce' id="Fecha-nacimiento" type="date" value={fechaNacimiento} onChange={(e) => setFechaNacimiento(e.target.value)} />
          </div>
        </div>
        <div className='ajustar-div'>
          <select className='select-ce' id="Genero" name="genero" value={genero} onChange={(e) => setGenero(e.target.value)}>
            <option value="" disabled selected>Selecciona una identidad de género</option>
            <option value="Masculino">Masculino</option>
            <option value="Femenino">Femenino</option>
          </select>
          <input className='input-ce' id="Correo" type="email" placeholder=" Correo electrónico" value={correo} onChange={(e) => setCorreo(e.target.value)} />
        </div>
        <div className='ajustar-div'>
          <input className='input-ce' id="Usuario" type="text" placeholder=" Usuario" value={usuario} onChange={(e) => setUsuario(e.target.value)} />
          <input className='input-ce' id="Password" type="text" placeholder=" Contraseña" value={password} onChange={(e) => setPassword(e.target.value)} />
          <button className="btn-crear" type='submit'>Crear Empleado</button>
        </div>
      </form>
    </div>
  )
}

export default CrearEmpleado;