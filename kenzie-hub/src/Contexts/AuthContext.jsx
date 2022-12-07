import { useEffect } from "react";
import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../services/api";

export const AuthContext = createContext({})

export function AuthProvider ( {children} ) {
    const [userLoading, setUserLoading] = useState(true)
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const [token, setToken] = useState(localStorage.getItem("KenzieHubToken"))
    const navigate = useNavigate()

    useEffect(() => {
        async function loadUser () {            
            if (!token) {
                setUserLoading(false)
                return
            }

            try {
                const response = await api.get("/profile", {
                    headers: {
                        "Content-type": "application/json",
                        "Authorization": `Bearer ${token}`
                    }
                })
                setUser(response.data)
            } catch (error) {
                console.log(error)
            } finally {
                setUserLoading(false)
            }
        }
        loadUser()
    },)

    async function LoginUser ( data ) {
        try {
            const response = await api.post("sessions", data)
            if (response.request.statusText === "OK") {
                localStorage.setItem("KenzieHubToken", response.data.token)
                setToken(response.data.token)
                toast.success(`Que bom te ver, ${response.data.user.name}!`, {
                    className: "toast"
                })
                setUser(response.data.user)
                setLoading(false)
                navigate("/home")
                return response
            } else {
                throw response
            }
        } catch (error) {
            toast.error(error.response.data.message, {
                className: "toast"
            })
        } finally {
            setLoading(false)
        }
    }

    return (
        <AuthContext.Provider value={{ loading, userLoading, LoginUser, user, token }}>
            {children}
        </AuthContext.Provider>
    )
}