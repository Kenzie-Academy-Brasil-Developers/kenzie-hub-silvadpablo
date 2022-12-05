import { useState } from "react";
import { createContext } from "react";
import { toast } from "react-toastify";
import { api } from "../services/api";

export const UserContext = createContext({})

export function UserProvider ({ children }) {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(false)
    const [token, setToken] = useState(null)

    async function CreateUser ( data ) {
        try {
            const response = await api.post("users", data)
            toast.success("Conta criada com successo", {
              className: "toast"
            })
            // navigate("/")
            return response
          } catch (error) {
            const message = error.response.data.message
            if (Array.isArray(message)){
              toast.error(message[0], {
                className: "toast"
              })
            } else {
              toast.error(message, {
                className: "toast"
              })
            }
          }
    }

    async function LoginUser ( data ) {
        try {
            const response = await api.post("sessions", data)
            if (response.request.statusText === "OK") {
                localStorage.setItem("KenzieHubToken", response.data.token)
                setToken(response.data.token)
                localStorage.setItem("KenzieHubUser", JSON.stringify(response.data.user))
                setUser(response.data.user)
                toast.success(`Que bom te ver, ${response.data.user.name}!`, {
                className: "toast"
                })
                setLoading(true)
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
        <UserContext.Provider value={{CreateUser, LoginUser, user, loading, token}}>
            {children}
        </UserContext.Provider>
    )
}