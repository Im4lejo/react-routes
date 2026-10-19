import { sedesEmpresa1, sedesEmpresa2, empresas } from "./DATA";
import { Link, Outlet } from "react-router-dom";
import { useState } from "react";
export default function Empresas() {
    const [button, setButton] = useState(false)
    return (
        <div>
            <h2>Empresas</h2>
            <ul>
                {empresas.map(empresa => (
                    <div key={empresa.id}>
                        <h3>{empresa.name}</h3>
                        <li><button onClick={() => (setButton(!button))}><Link to={button ? `/empresas/${empresa.id}` : `/empresas`}>{!button ? "Ocultar empresa" :"Ver empresa"}</Link></button></li>
                    </div>
                ))}

            </ul>
            <Outlet />
        </div>
    )
}
export const sedesXempresa = (id) => {
    if (id = 1) {
        const sedes = [...sedesEmpresa1]
        return sedes
    } else {
        const sedes = [...sedesEmpresa2]
        return sedes
    }
}