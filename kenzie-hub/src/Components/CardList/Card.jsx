import { Card } from "./Card";
import { useContext } from "react";
import { TechContext } from "../../Contexts/techContext";

export function EachCard ( { id, title, status, updateDialog, setUpdateDialog } ) {
    const { setCurrentTech } = useContext(TechContext)

    function updateDialog ( event ) {
        setUpdateDialog(true)
        const current = {
            name: event.target.firstElementChild.innerText,
            id: id,
            status: status
        }
        setCurrentTech(current)
    }
    return (
        <Card className="flex justify-between" onClick={updateDialog}>
            <h2>{title}</h2>
            <div className="flex remove-div">
                <p>{status}</p>
            </div>
        </Card>
    )
}

export function NoCard () {
    return (
        <Card>
            <h2>Nenhuma tecnologia cadastrada</h2>
        </Card>
    )
}