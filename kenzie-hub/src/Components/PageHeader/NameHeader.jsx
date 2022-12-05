import { NameHeaders } from "./NameHeaders";

export function NameHeader ( { user } ) {
    return (
        <NameHeaders>
            <div className="page-container flex justify-between">
                <h2>Olá, {user.name}</h2>
                <p>{user.course_module}</p>
            </div>
        </NameHeaders>
    )
}