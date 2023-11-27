import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { CarritotProvider} from "./context/carrito"
import { CatalogoProvider } from './context/catalogo.jsx'
import { SesionProvider } from './context/sesion.jsx'
//import App from './screens/Administracion.jsx'
//import App from './screens/Empleado.jsx'
//import App from './screens/CrearEmpleado'
//import App from './screens/ConsultarEmpleado'
//import App from './screens/EditarEmpleado'
// import App from './componentes/LoginAdministracion'

ReactDOM.createRoot(document.getElementById('root')).render(
  <CarritotProvider>
    <CatalogoProvider>
      <SesionProvider>
        <App/>
      </SesionProvider>
    </CatalogoProvider>
  </CarritotProvider>,
)
