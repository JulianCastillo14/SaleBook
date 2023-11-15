import React from 'react'
import '../styles/administracion.css'

const Administracion = () => {
  return (
    <div className='container-administracion'>
      <div className="content">
          <header>
              <h1>Sistema SaleBook</h1>
              <nav className="navbar">
                  <a href="./ModuloLibros.html" target="iframe">Inventario</a>
                  <a href="/ModuloEmpleado" target="iframe">Empleados</a>
              </nav>
          </header>
          <iframe src="./ModuloLibros.html" name="iframe" frameborder="0"></iframe>
      </div>
    </div>
  )
}
export default Administracion