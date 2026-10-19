import { useParams } from "react-router-dom"
import { empresas } from "./DATA";
import { useState } from "react";
import { Link , Outlet} from "react-router-dom";
export default function Empresa() {
    const { id } = useParams()
    const [button, setButton] = useState(false)
    const empresa = empresas.find(empresa => empresa.id === Number(id));
    return (
        <>
        <div>
            <div key={empresa.id}>
                <h3>{empresa.name}</h3>
                <p>{empresa.description}</p>
                <h4>{empresa.code}</h4>
                    <li><button onClick={() => (setButton(!button))}><Link to={button ? `/empresas/${empresa.id}/sedes` : `/empresas/${empresa.id}`}>{button ? "Ver sedes" : "Ocultar sedes" }</Link></button></li>
                </div>
                <Outlet />
        </div>
            
        </>
    )
}
