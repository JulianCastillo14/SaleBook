import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { CarritotProvider} from "./context/carrito"

ReactDOM.createRoot(document.getElementById('root')).render(
  <CarritotProvider>
    <App/>
  </CarritotProvider>,
)
