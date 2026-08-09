import { Link, Outlet } from "react-router-dom"
function menu() {
    return (
        <div>
            <h1>Menú de la tienda</h1>
            <nav>
                <Link to="inicio">Inicio</Link> 
                <Link to="productos">Productos</Link> 
                <Link to="usuarios">Usuarios</Link>
                <Link to="acerca">Acerca de</Link>
            </nav>
            <hr />
            <Outlet />
        </div>
    )
}
export default menu