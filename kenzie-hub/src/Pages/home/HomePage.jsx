import { useContext } from "react"
import { Navigate } from "react-router-dom"
import { List } from "../../Components/CardList/List.jsx"
import { NameHeader } from "../../Components/PageHeader/NameHeader.jsx"
import { PageHeader } from "../../Components/PageHeader/PageHeader.jsx"
import { AuthContext } from "../../Contexts/AuthContext.jsx"
import { TechProvider } from "../../Contexts/techContext.jsx"

export function HomePage () {
    const { userLoading, user } = useContext(AuthContext)
    
    if (userLoading) {
        return null
    }
    return (
        user ?
        <div>
            <PageHeader></PageHeader>
            <NameHeader user={user}></NameHeader>
                <TechProvider>
                    <List></List>
                </TechProvider>
        </div>
        :
        <Navigate to="/"/>
    )
}