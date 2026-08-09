import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Productos from './components/productos'
import Acerca from './components/acerca'
import Menu from './components/Menu'
import ProductoDetalle from './components/productoDetalle'
import Inicio from './components/inicio'
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/menu" element={<Menu />}>
            <Route path='inicio' element={ <Inicio />} />
            <Route path="productos" element={<Productos />} />
            <Route path="acerca" element={<Acerca />} />
            
          </Route>
          <Route path="/productos/:id" element={<ProductoDetalle />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
export default App