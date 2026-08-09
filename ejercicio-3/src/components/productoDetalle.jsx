import { useParams } from "react-router-dom"
import products from "../data/products"
function ProductoDetalle() {
    const { id } = useParams() 
    const product = products.find(product => product.id === Number(id));
    return (
        <div>
            <div>
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <h4>{product.category}</h4>
            </div>
        </div>
    )
}
export default ProductoDetalle