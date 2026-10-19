
import { Link, Outlet , useSearchParams} from "react-router-dom"
import Cities from "../data/cities"

function Ciudades() {
    const [searchParams, setSearchParams] = useSearchParams();

    const ciudadAbierta = searchParams.get("ciudad");
    return (
        <div>
            <h2>Ciudades</h2>
            <ul>
                {Cities.map(city => (
                    <div key={city.id}>

                        <h3>{city.name}</h3>

                        <button
                            onClick={() => {
                                if (ciudadAbierta === String(city.id)) {
                                    setSearchParams({});
                                } else {
                                    setSearchParams({ ciudad: city.id });
                                }
                            }}
                        >
                            {ciudadAbierta === String(city.id)
                                ? "Ocultar"
                                : "Ver población"}
                        </button>

                        {ciudadAbierta === String(city.id) && (
                            <p>Población: {city.population}</p>
                        )}

                    </div>
                ))}

            </ul>
            <Outlet />
        </div>
    )
}
export default Ciudades