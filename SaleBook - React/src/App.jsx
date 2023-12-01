// import { Header } from "./componentes/Header"
import {Catalogo} from "./componentes/Catalogo"
import { BrowserRouter , Route, Routes } from 'react-router-dom'; 
import { Detalles } from "./componentes/Detalles";
import {Carrito} from "./componentes/Carrito"
import { Header } from "./componentes/Header.jsx"
import Administracion from "./screens/Administracion.jsx"
import LoginAdministracion  from "./componentes/LoginAdministracion.jsx";
import { Filtro } from "./componentes/Filtro.jsx";
import { Login } from "./componentes/Login.jsx";
import { Perfil } from "./componentes/Perfil.jsx";


export function App() {
  return (  
    <BrowserRouter>
      <Header></Header>
      <Filtro></Filtro>
      <Routes>
          <Route path="/" element={<Catalogo/>} /> 
          <Route path="/detalles/:isbn" element={<Detalles/>} />
          <Route path="/carrito" element={<Carrito/>} />
          <Route path="/Administracion" element={<Administracion/>}/>
          <Route path="/loginadministracion" element={<LoginAdministracion/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/perfil" element={<Perfil/>}/>

      </Routes>
    </BrowserRouter> 
  )
}

export default App