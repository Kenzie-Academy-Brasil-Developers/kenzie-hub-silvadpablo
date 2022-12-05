import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { List } from "../../Components/CardList/List.jsx"
import { NameHeader } from "../../Components/PageHeader/NameHeader.jsx"
import { PageHeader } from "../../Components/PageHeader/PageHeader.jsx"
import { TechProvider } from "../../Contexts/techContext.jsx"
import { UserContext } from "../../Contexts/userContext.jsx"

export function HomePage () {
    const { user, token } = useContext(UserContext)
    const navigate = useNavigate()
    
    if (token){
        return (
            <div>
                <PageHeader></PageHeader>
                <NameHeader user={user}></NameHeader>
                    <TechProvider>
                        <List></List>
                    </TechProvider>
            </div>
        )
    } else {
        navigate("/")
    }
}