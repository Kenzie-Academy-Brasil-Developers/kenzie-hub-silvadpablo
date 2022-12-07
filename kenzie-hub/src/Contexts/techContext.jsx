import { useContext, useState } from "react";
import { useEffect } from "react";
import { createContext } from "react";
import { toast } from "react-toastify";
import { api } from "../services/api";
import { AuthContext } from "./AuthContext";

export const TechContext = createContext({})

export function TechProvider ({ children }) {
    const { user, token } = useContext(AuthContext)
    const [tech, setTech] = useState([])
    const [currentTech, setCurrentTech] = useState({})

    useEffect(() => {
        setTech(user.techs)
    }, [user])

    useEffect(() => {
        setCurrentTech({name: "nome", status: "status", id: "id"})
    }, [])

    async function CreateTech ( data ) {
        try {
            const response = await api.post(`users/techs`, data, {
                headers: {
                    "Content-type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
            })
            toast.success("Tecnologia criada com sucesso", {
                className: "toast"
            })
            if (response.statusText === "Created") {
                setTech([...tech, response.data])
                return response
            } else {
                throw response
            }
        } catch (error) {
            toast.error(error.response.data.message, {
                className: "toast"
            })
        }
    }

    async function updateTech ( data, id ) {
        await api.put(`users/techs/${id}`, data, {
            headers: {
                "Content-type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        })
        setTech(user.techs)
        toast.success("Nível da tecnologia atualizada com sucesso", {
            className: "toast"
        })
    }

    async function deleteTech (id) {
        try {
            await api.delete(`users/techs/${id}`, {
                headers: {
                    "Content-type": "application/json",
                    "Authorization": `Bearer ${token}`
                }
            })
            setTech(user.techs)
            toast.success("Tecnologia deletada com sucesso", {
                className: "toast"
            })
        } catch (error) {
            console.log(error.response.data)
        }
    }
    
    return (
        <TechContext.Provider value={{tech, setTech, CreateTech, currentTech, setCurrentTech, updateTech, deleteTech}}>
            {children}
        </TechContext.Provider>
    )
}