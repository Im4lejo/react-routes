
import { Link, Outlet } from "react-router-dom"
import Cities from "../data/cities"

function Ciudades() {
    const compacto = function (city) {
        return !city.modoCompacto;
    };
    return (
        <div>
            <h2>Ciudades</h2>
            <ul>
                {Cities.map(city => (
                    <div key={city.id}>
                        {city.modoCompacto === true ? (
                            <Link onClick={compacto(city)}><h3> {city.name}</h3></Link>
                        ) : (
                            <>
                                    <Link onClick={compacto(city)}><h3> {city.name}</h3></Link>
                                <p>Población: {city.population}</p>
                            </>
                        )
                        }
                    </div>

                ))}

            </ul>
            <Outlet />
        </div>
    )
}
export default Ciudades