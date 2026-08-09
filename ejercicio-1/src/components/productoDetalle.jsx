import { useParams } from "react-router-dom"
function ProductoDetalle() {
    const { id } = useParams()
    return (
        <div>
            <h2>Detalle del producto</h2>
            <p>ID del producto: {id}</p>
        </div>
    )
}
export default ProductoDetalle