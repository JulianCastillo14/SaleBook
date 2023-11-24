import React, { useEffect, useState } from 'react';
import '../styles/ConsultarEmpleado.css';
import { Peticion } from '../js/Peticion';

const ConsultarEmpleado = () => {
  const [empleados, setEmpleados] = useState([]);
  const [documento, setDocumento] = useState('');
  const [documentoEliminar, setDocumentoEliminar] = useState('');

  const obtenerEmpleados = async () => {
    const { status, respuesta } = await Peticion("http://localhost:2020/api/Empleados/list","GET");
    if (status) {
      const Empleados = await respuesta.json();
      setEmpleados(Empleados);
    }
  };

  const obtenerEmpleadosDocumento = async (numeroDocumento) => {
    const { status, respuesta } = await Peticion(`http://localhost:2020/api/Empleados/list/${numeroDocumento}`,"GET");
    if (status) {
      const Empleado = await respuesta.json();
      setEmpleados([Empleado]);
    }
  };

  const eliminarEmpleadoDocumento = async (numeroDocumento) => {
    const { status, respuesta } = await Peticion(`http://localhost:2020/api/Empleados/${numeroDocumento}`,"DELETE");
    if (status) {
      alert("Empleado eliminado correctamente");
      obtenerEmpleados();
    } else {
      alert("Ocurrio un error al eliminar el empleado");
    }
  };

  useEffect(() => {
    obtenerEmpleados();
  }, []);

  return (
    <div id='container-conEmpleado'>
        <table className="table-cse">
          <thead>
              <tr>
                  <th className='th-cse' scope="col">N° Documento</th>
                  <th className='th-cse' scope="col">Tipo</th>
                  <th className='th-cse' scope="col">Nombre completo</th>
                  <th className='th-cse' scope="col">Fecha de nacimiento</th>
                  <th className='th-cse' scope="col">Género</th>
                  <th className='th-cse' scope="col">Correo</th>
                  <th className='th-cse' scope="col">Usuario</th>
                  <th className='th-cse' scope="col">Contraseña</th>
              </tr>
          </thead>
          <tbody id="tbody">
            {empleados.map((empleado) => (
              <tr key={empleado.numeroDocumento}>
                <th scope="row">{empleado.numeroDocumento}</th>
                <td>{empleado.idTipoDocumento.descripcion}</td>
                <td>{empleado.primerNombre} {empleado.segundoNombre} {empleado.primerApellido} {empleado.segundoApellido}</td>
                <td>{empleado.fechaNacimiento}</td>
                <td>{empleado.genero}</td>
                <td>{empleado.correo}</td>
                <td>{empleado.usuario}</td>
                <td>{empleado.password}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <section id='opciones-cse'>
          <form action="">
            <input className='input-cse' id="Documento" type="text" placeholder="Número de documento" value={documento} onChange={(e) => setDocumento(e.target.value)} />
            <button className='btn-cse' id="btn-consultar" type="button" onClick={() => obtenerEmpleadosDocumento(documento)}>Consultar</button><br/>
            <input className='input-cse' id="Documento-eliminar" type="text" placeholder="Número de documento" value={documentoEliminar} onChange={(e) => setDocumentoEliminar(e.target.value)} />
            <button className='btn-cse' id="btn-eliminar"  type="button" onClick={() => eliminarEmpleadoDocumento(documentoEliminar)}>Eliminar</button><br/>
            <button className='btn-cse' id="btn-all" type="button" onClick={obtenerEmpleados}>Ver todo</button>
          </form>
        </section>
    </div>
  )
}

export default ConsultarEmpleado;
