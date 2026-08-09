import {Link, Outlet, useParams } from "react-router-dom"
import products from "../data/products";
function ProductoDetalleCategory() {
    const { id } = useParams()
    const { category } = useParams()
   
    const product = products.filter(product => product.category === category);
    return (
        <div>
            {
                product.map(producto => (
                    <>
                        <div key={producto.id}>
                            <h3>{producto.name}</h3>
                            <p>{producto.description}</p>
                            <h4>{producto.category}</h4>
                            <button><Link to={`/productos/${producto.id}/${producto.category}`}>Ver más</Link></button>
                        </div>
                        <hr />
                        <Outlet />
                    </>
                ))
            }

        </div>
    )

}
export default ProductoDetalleCategory