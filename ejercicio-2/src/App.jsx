import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Productos from './components/productos'
import Acerca from './components/acerca'
import Menu from './components/Menu'
import ProductoDetalle from './components/productoDetalle'
import Inicio from './components/inicio'
import Usuarios from './components/usuarios'
import UsuarioDetalle from './components/usuarioDetalle'
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/menu" element={<Menu />}>
            <Route path='inicio' element={ <Inicio />} />
            <Route path="productos" element={<Productos />} />
            <Route path="acerca" element={<Acerca />} />
            <Route path="usuarios" element={<Usuarios />} />
          </Route>
          <Route path="/productos/:id" element={<ProductoDetalle />} />
          <Route path="/usuarios/:id" element={<UsuarioDetalle />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
export default App