import { Link } from "react-router-dom"
function Usuarios() {
    return (
        <div>
            <h2>Usuarios</h2>
            <ul>
                <div>
                    <h3>Usuario 1</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat magni recusandae vel, ab minus excepturi voluptates nisi cum, assumenda mollitia quibusdam sit corrupti eos iusto pariatur sed illum quasi fugiat.</p>
                    <li><button><Link to="/usuarios/1">Ver más</Link></button></li>
                </div>
                <div>
                    <h3>Usuario 2</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat magni recusandae vel, ab minus excepturi voluptates nisi cum, assumenda mollitia quibusdam sit corrupti eos iusto pariatur sed illum quasi fugiat.</p>
                    <li><button><Link to="/usuarios/2">Ver más</Link></button></li>
                </div>
                <div>
                    <h3>Usuario 3</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat magni recusandae vel, ab minus excepturi voluptates nisi cum, assumenda mollitia quibusdam sit corrupti eos iusto pariatur sed illum quasi fugiat.</p>
                    <li><button><Link to="/usuarios/3">Ver más</Link></button></li>
                </div>
            </ul>
        </div>
    )
}
export default Usuarios