import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Empresas from './components/Empresas'
import Empresa from './components/Empresa'
import Sedes from './components/Sedes'
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/empresas" element={<Empresas />}>
            <Route path='/empresas/:id' element={<Empresa />} >
              <Route path='/empresas/:id/sedes' element={<Sedes />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
export default App