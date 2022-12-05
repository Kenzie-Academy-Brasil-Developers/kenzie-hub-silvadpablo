import { createContext } from "react";
import { toast } from "react-toastify";
import { api } from "../services/api";

export const UserContext = createContext({})

export function UserProvider ({ children }) {

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
    return (
        <UserContext.Provider value={{CreateUser}}>
            {children}
        </UserContext.Provider>
    )
}