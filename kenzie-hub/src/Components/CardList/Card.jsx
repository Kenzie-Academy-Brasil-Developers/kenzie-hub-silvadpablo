import { Card } from "./Card";
import trash from "../../Imgs/trash.png"

export function EachCard ( { title, status } ) {
    return (
        <Card className="flex justify-between">
            <h2>{title}</h2>
            <div className="flex remove-div">
                <p>{status}</p>
                <img src={trash} alt="remove icon" />
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