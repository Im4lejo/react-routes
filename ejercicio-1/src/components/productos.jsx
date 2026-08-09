import { Link } from "react-router-dom"
function Productos() {
    return (
        <div>
            <h2>Productos</h2>
            <ul>
                <li><Link to="/productos/1">Producto 1</Link></li>
                <li><Link to="/productos/2">Producto 2</Link></li>
                <li><Link to="/productos/3">Producto 3</Link></li>
            </ul>
        </div>
    )
}
export default Productos