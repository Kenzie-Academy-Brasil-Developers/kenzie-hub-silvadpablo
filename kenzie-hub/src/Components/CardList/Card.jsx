import { Card } from "./Card";
import trash from "../../Imgs/trash.png"

export function EachCard ( props) {
    return (
        <Card className="flex justify-between">
            <h2>Reach JS</h2>
            <div className="flex remove-div">
                <p>Level</p>
                <img src={trash} alt="remove icon" />
            </div>
        </Card>
    )
}