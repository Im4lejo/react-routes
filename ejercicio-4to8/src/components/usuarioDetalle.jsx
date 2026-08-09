import { useParams } from "react-router-dom"
import users from "../data/users";
function UsuarioDetalle() {
    const { id } = useParams()
    const user = users.find(user => user.id === Number(id));
    return (
        <div>
            <div>
                <h3>{user.name}</h3>
                <p><strong>Correo: </strong>{user.email}</p>
                <p><strong>Description: </strong>{user.description}</p>
                <h4>{user.rol}</h4>
            </div>
        </div>
    )
}
export default UsuarioDetalle