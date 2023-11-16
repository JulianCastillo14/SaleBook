import React from 'react'
import ReactDOM from 'react-dom/client'
//import App from './App.jsx'
import { CarritotProvider} from "./context/carrito"
import App from './screens/Administracion.jsx'
//import App from './screens/Empleado.jsx'
//import App from './screens/CrearEmpleado'
//import App from './screens/ConsultarEmpleado'
//import App from './screens/EditarEmpleado'

ReactDOM.createRoot(document.getElementById('root')).render(
  <CarritotProvider>
    <App />
  </CarritotProvider>,
)
