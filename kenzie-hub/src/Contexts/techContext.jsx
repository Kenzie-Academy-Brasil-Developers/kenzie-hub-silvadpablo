import { useContext, useState } from "react";
import { useEffect } from "react";
import { createContext } from "react";
import { UserContext } from "./userContext";

export const TechContext = createContext({})

export function TechProvider ({ children }) {
    const { user } = useContext(UserContext)
    const [tech, setTech] = useState([])

    useEffect(() => {
        setTech(user.techs)
    }, [])
    
    return (
        <TechContext.Provider value={{tech, setTech}}>
            {children}
        </TechContext.Provider>
    )
}