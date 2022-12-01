import { NameHeaders } from "./NameHeaders";

export function NameHeader ( props ) {
    return (
        <NameHeaders>
            <div className="page-container flex justify-between">
                <h2>Olá, usuário</h2>
                <p>Descrição do módulo</p>
            </div>
        </NameHeaders>
    )
}