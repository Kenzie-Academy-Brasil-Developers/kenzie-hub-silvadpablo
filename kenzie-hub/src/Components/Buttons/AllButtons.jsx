import { useNavigate } from "react-router-dom";
import { BigButtons, BlackButtons, SmallButtons } from "./Buttons";

export function PrimaryButton ( { text } ) {
    return <BigButtons>{text}</BigButtons>
}

export function DialogButton ( { text, setDialogOpen, techs, setTechs, register, handleNewTech, handleSubmit } ) {
    // const newTech = [...techs, {
    //     title: "teste",
    //     status: "Iniciante"
    // }]

    // function closeDialog () {
    //     setTechs(newTech)
    //     // setDialogOpen(false)
    // }
    return <BigButtons onClick={handleSubmit(handleNewTech)}>{text}</BigButtons>
}

export function BlackButton ( { text } ) {
    const navigate = useNavigate()
    function goToRegister () {
        navigate("/register")
    }
    return <BlackButtons onClick={goToRegister}>{text}</BlackButtons>
}

export function SmallButton ( { text } ) {
    const navigate = useNavigate()

    function GoBack ( ) {
        localStorage.removeItem("KenzieHubToken")
        localStorage.removeItem("KenzieHubUser")
        navigate("/")
    }
    return <SmallButtons onClick={GoBack}>{text}</SmallButtons>
}