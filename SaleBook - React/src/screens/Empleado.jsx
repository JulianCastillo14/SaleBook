import React, {useState} from 'react'
import '../styles/empleado.css'

const Empleado = () => {
  const [activeComponent, setActiveComponent] = useState(null);
  
  const handleClick = (component) => {
    setActiveComponent(component);
  }
  return (
    <div id='container-empleado'>
      <section>

      </section>
        <nav className="navbar-empleado">
        <a href="#">Crear</a>
        <a href="#">Consultar</a>
        <a href="#">Actualizar</a>
        </nav>
    </div>
  )
}

export default Empleado