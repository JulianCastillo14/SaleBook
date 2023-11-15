import { Header } from "./componentes/Header"
import {Catalogo} from "./componentes/Catalogo"
import { BrowserRouter , Route, Routes } from 'react-router-dom'; 
import { Detalles } from "./componentes/Detalles";
import {Carrito} from "./componentes/Carrito"
import {Administracion} from "./screens/Administracion.jsx"
import Empleado from "./screens/Empleado.jsx"

export function App() {
  return (
      <>  
        <BrowserRouter>
          <Header></Header>
          <Routes>
              <Route path="/" element={<Catalogo/>} /> 
              <Route path="/detalles/:isbn" element={<Detalles/>} />
              <Route path="/carrito" element={<Carrito/>} />
              <Route path="/ModuloEmpleado" element={<Empleado/>} />
          </Routes>
        </BrowserRouter> 
      </>

  )
}

export default App
