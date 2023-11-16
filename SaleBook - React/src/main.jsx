import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { CarritotProvider} from "./context/carrito"
//import App from './screens/Administracion.jsx'
//import App from './screens/Empleado.jsx'
//import App from './screens/CrearEmpleado'


ReactDOM.createRoot(document.getElementById('root')).render(
  <CarritotProvider>
    <App />
  </CarritotProvider>,
)
