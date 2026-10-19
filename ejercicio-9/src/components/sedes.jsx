import { useParams } from "react-router-dom"

import { empresas, sedesEmpresa1, sedesEmpresa2 } from "./DATA";

export default function Sedes() {
    const { id } = useParams()
    const empresa = empresas.find(empresa => empresa.id === Number(id));
    const sedes = empresa.id == 2 ? sedesEmpresa2 : sedesEmpresa1;
    return (
        <div>
            {sedes.map(sede => (
                <div key={sede.id}>
                    <h3>{sede.name}</h3>
                    <p>{sede.description}</p>
                    <h4>{sede.code}</h4>
                </div>
            ))}
        </div>
    )
}