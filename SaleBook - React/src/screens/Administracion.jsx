import React, {useState} from 'react'
import '../styles/administracion.css'
import Empleado from './Empleado'
import { MooduloLibros } from './ModuloLibros';

const Administracion = ( ) => {
  const [activeComponent, setActiveComponent] = useState("Inventario");
  
  const handleClick = (component) => {
    setActiveComponent(component);
  }
  return (
    <div className='container-administracion'>
      <div className="content">
          <header>
              <h1>Sistema SaleBook</h1>
              <nav className="navbar-administacion">
                  <a onClick={() => handleClick('Inventario')}>Inventario</a>
                  <a onClick={() => handleClick('Empleado')}>Empleados</a>
              </nav>
          </header>
          <section>
            {activeComponent === 'Empleado' ? <Empleado /> : <MooduloLibros/>}
          </section>
      </div>
    </div>
  )
}
export default Administracion