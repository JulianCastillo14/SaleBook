import { Header } from "./componentes/Header"
import {Catalogo} from "./componentes/Catalogo"
import { BrowserRouter , Route, Routes } from 'react-router-dom'; 
import { Detalles } from "./componentes/Detalles";
import {Carrito} from "./componentes/Carrito"
import {Administracion} from "./screens/Administracion.jsx"

export function App() {
  return (  
    <BrowserRouter>
      <Header></Header>
      <Routes>
          <Route path="/" element={<Catalogo/>} /> 
          <Route path="/detalles/:isbn" element={<Detalles/>} />
          <Route path="/carrito" element={<Carrito/>} />
          <Route path="/administracion" element={<Administracion/>}/>
      </Routes>
    </BrowserRouter> 
  )
}

export default App