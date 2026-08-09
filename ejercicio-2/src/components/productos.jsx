
import { Link } from "react-router-dom"
function Productos() {
    return (
        <div>
            <h2>Productos</h2>
            <ul>
                <div>
                    <h3>Portatil asus rog </h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat magni recusandae vel, ab minus excepturi voluptates nisi cum, assumenda mollitia quibusdam sit corrupti eos iusto pariatur sed illum quasi fugiat.</p>
                    <li><button><Link to="/productos/1">Ver más</Link></button></li>
                </div>
                <div>
                    <h3>Portatil asus rog </h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat magni recusandae vel, ab minus excepturi voluptates nisi cum, assumenda mollitia quibusdam sit corrupti eos iusto pariatur sed illum quasi fugiat.</p>
                    <li><button><Link to="/productos/2">Ver más</Link></button></li>
                </div>
                <div>
                    <h3>Portatil asus rog </h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat magni recusandae vel, ab minus excepturi voluptates nisi cum, assumenda mollitia quibusdam sit corrupti eos iusto pariatur sed illum quasi fugiat.</p>
                    <li><button><Link to="/productos/3">Ver más</Link></button></li>
                </div>
            </ul>
        </div>
    )
}
export default Productos