import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { List } from "../../Components/CardList/List.jsx"
import { NameHeader } from "../../Components/PageHeader/NameHeader.jsx"
import { PageHeader } from "../../Components/PageHeader/PageHeader.jsx"
import { api } from "../../services/api.js"

export function HomePage () {
    const navigate = useNavigate()
    const token = localStorage.getItem("KenzieHubToken")
    const localUser = JSON.parse(localStorage.getItem("KenzieHubUser"))
    const [user, setUser] = useState(localUser)
    const userId = localUser.id
    const [techs, setTechs] = useState(localUser.techs)


    async function getUser () {
        try {
            const response = await api.get(`users/${userId}`)
            setUser(response.data)
            return user
        } catch (error) {
            console.log(error)
        }
    }
    
    useEffect(() => {
        getUser()
    }, [])
    
    if (token !== null || localUser !== null){
        return (
            <div>
                <PageHeader></PageHeader>
                <NameHeader user={user}></NameHeader>
                <List token={token} techs={techs} setTechs={setTechs} getUser={getUser} setUser={setUser} user={user}></List>
            </div>
        )
    } else {
        navigate("/")
    }
}