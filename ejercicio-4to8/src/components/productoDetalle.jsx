import { useParams } from "react-router-dom"
import products from "../data/products"
function ProductoDetalle() {
    const { codigo } = useParams() 

    const product = products.find(producto => producto.codigo === codigo );
    return (
        <div>
            <div>
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <h4>{product.category}</h4>
                <p><strong>{product.precio}</strong></p>
            </div>
        </div>
    )
}
export default ProductoDetalle