
import { Link, Outlet } from "react-router-dom"
import products from "../data/products"
function Productos() {
    return (
        <div>
            <h2>Productos</h2>
            <ul>
                {products.map(product => (
                    <div>
                        <h3>{ product.name}</h3>
                        <p>{ product.description}</p>
                        <h4>{product.category}</h4>
                        <li><button><Link to={`/productos/${product.id}/${product.category}`}>Ver más</Link></button></li>
                    </div>
                ))}
                
            </ul>
            <Outlet/>
        </div>
    )
}
export default Productos