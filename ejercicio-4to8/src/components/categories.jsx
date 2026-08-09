import { Link } from "react-router-dom"
import categories from "../data/categories"
function Categories() {
    return (
        <div>
            <h2>Categorias</h2>
            <ul>
                {categories.map(category => (
                    <div key={category.id}>
                        <h3>{ category.name}</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat magni recusandae vel, ab minus excepturi voluptates nisi cum, assumenda mollitia quibusdam sit corrupti eos iusto pariatur sed illum quasi fugiat.</p>
                        <li><button><Link to={`/categories/${category.name}/productos`}>Ver más</Link></button></li>
                    </div>
                ))}

            </ul>
        </div>
    )
}
export default Categories