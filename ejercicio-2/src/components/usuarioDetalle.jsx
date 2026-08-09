import { useParams } from "react-router-dom"
function UsuarioDetalle() {
    const { id } = useParams()
    return (
        <div>
            <h2>Detalle del usuario</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste qui est deserunt temporibus quasi soluta in quaerat nostrum ab, repellat quisquam voluptates vitae ea ullam nulla corrupti aperiam quia neque.</p>
            <p>ID del usuario: {id}</p>
        </div>
    )
}
export default UsuarioDetalle