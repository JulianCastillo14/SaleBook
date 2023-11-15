import { Header } from "./componentes/Header"
import {Catalogo} from "./componentes/Catalogo"
import { BrowserRouter , Route, Routes } from 'react-router-dom'; 
import { Detalles } from "./componentes/Detalles";
import {Carrito} from "./componentes/Carrito"

export function App() {
  return (
      <>  
        <BrowserRouter>
          <Header></Header>
          <Routes>
              <Route path="/" element={<Catalogo/>} /> 
              <Route path="/detalles/:isbn" element={<Detalles/>} />
              <Route path="/carrito" element={<Carrito/>} />
          </Routes>
        </BrowserRouter> 
      </>

  )
}

export default App
