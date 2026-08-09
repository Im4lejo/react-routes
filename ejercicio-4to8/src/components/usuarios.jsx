import { Link } from "react-router-dom"
import users from "../data/users"
function Usuarios() {
    return (
        <div>
            <h2>Usuarios</h2>
            <ul>
                {users.map(user=> (
                    <div key={user.id}>
                        <h3>{user.name}</h3>
                        <p>{user.description }</p>
                        <li><button><Link to={`/usuarios/${user.id}`}>Ver más</Link></button></li>
                    </div>
                ))}
            </ul>
        </div>
    )
}
export default Usuarios