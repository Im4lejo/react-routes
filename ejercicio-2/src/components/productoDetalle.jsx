import { useParams } from "react-router-dom"
function ProductoDetalle() {
    const { id } = useParams()
    return (
        <div>
            <h2>Detalle del producto</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste qui est deserunt temporibus quasi soluta in quaerat nostrum ab, repellat quisquam voluptates vitae ea ullam nulla corrupti aperiam quia neque.</p>
            <p>ID del producto: {id}</p>
        </div>
    )
}
export default ProductoDetalle