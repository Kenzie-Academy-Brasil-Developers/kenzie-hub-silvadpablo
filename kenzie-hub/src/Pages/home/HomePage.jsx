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
    
    useEffect(() => {
        async function getUser () {
            try {
                const response = await api.get(`users/${userId}`)
                setUser(response.data)
                // console.log(user)
            } catch (error) {
                console.log(error)
            }
        }
        getUser()
    }, [])
    
    // const user = JSON.parse(localStorage.getItem("KenzieHubUser"))
    // const userName = user.name[0].toUpperCase() + user.name.substring(1)
    // const userModule = user.course_module
    // const techs = user.techs

    if (token !== null){
        return (
            <div>
                <PageHeader></PageHeader>
                <NameHeader user={user}></NameHeader>
                <List techs={techs} setTechs={setTechs}></List>
                {/* <NameHeader userName={userName} userModule={userModule}></NameHeader>
                <List techs={techs}></List> */}
            </div>
        )
    } else {
        navigate("/login")
    }
}