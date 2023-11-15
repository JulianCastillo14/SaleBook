import React from 'react'
import '../styles/empleado.css'

const Empleado = () => {
  return (
    <div id='container-empleado'>
        <iframe src="./ConsultarEmpleado.html" name="iframe_2" frameborder="0"></iframe>
        <nav className="navbar">
        <a href="./CrearEmpleado.html" target="iframe_2">Crear</a>
        <a href="./ConsultarEmpleado.html" target="iframe_2">Consultar</a>
        <a href="./EditarEmpleado.html" target="iframe_2">Actualizar</a>
        </nav>
    </div>
  )
}

export default Empleado