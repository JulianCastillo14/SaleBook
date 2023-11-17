import React, {useState} from 'react'
import '../styles/empleado.css'
import CrearEmpleado from '../componentes/CrearEmpleado';
import ConsultarEmpleado from '../componentes/ConsultarEmpleado';
import EditarEmpleado from '../componentes/EditarEmpleado';

const Empleado = () => {
  const [activeComponent, setActiveComponent] = useState("Crear");
  
  const handleClick = (component) => {
    setActiveComponent(component);
  }
  return (
    <div id='container-empleado'>
      <section>
      {activeComponent === 'Crear' && <CrearEmpleado />}
      {activeComponent === 'Consultar' && <ConsultarEmpleado />}
      {activeComponent === 'Actualizar' && <EditarEmpleado />}
      </section>
        <nav className="navbar-empleado">
        <a onClick={() => handleClick('Crear')}>Crear</a>
        <a onClick={() => handleClick('Consultar')}>Consultar</a>
        <a onClick={() => handleClick('Actualizar')}>Actualizar</a>
        </nav>
    </div>
  )
}

export default Empleado