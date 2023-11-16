import React from 'react'
import '../styles/ConsultarEmpleado.css'
const ConsultarEmpleado = () => {
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

          </tbody>
      </table>
      <section id='opciones-cse'>
          <form action="">
              <input className='input-cse' id="Documento" type="text" placeholder="Número de documento"/>
              <button className='btn-cse' id="btn-consultar" type="button">Consultar</button><br/>
              <input className='input-cse' id="Documento-eliminar" type="text" placeholder="Número de documento"/>
              <button className='btn-cse' id="btn-eliminar"  type="button">Eliminar</button><br/>
              <button className='btn-cse' id="btn-all" type="button" >Ver todo</button>
          </form>
      </section>
  </div>
  )
}

export default ConsultarEmpleado
