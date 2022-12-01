import { List } from "../../Components/CardList/List.jsx"
import { NameHeader } from "../../Components/PageHeader/NameHeader.jsx"
import { PageHeader } from "../../Components/PageHeader/PageHeader.jsx"

export function HomePage () {    
    return (
        <div>
            <PageHeader></PageHeader>
            <NameHeader></NameHeader>
            <List></List>
        </div>
    )
}