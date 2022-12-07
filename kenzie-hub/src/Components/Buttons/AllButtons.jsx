import { useNavigate } from "react-router-dom";
import { BigButtons, BlackButtons, SmallButtons } from "./Buttons";

export function PrimaryButton ( { text } ) {
    return <BigButtons>{text}</BigButtons>
}

export function DialogButton ( { text, handleNewTech, handleSubmit } ) {
    return <BigButtons onClick={handleSubmit(handleNewTech)}>{text}</BigButtons>
}

export function UpdateDialogButton ( { text, handleUpdateTech, handleSubmit } ) {
    return <BigButtons onClick={handleSubmit(handleUpdateTech)}>{text}</BigButtons>
}

export function BlackButton ( { text } ) {
    const navigate = useNavigate()
    function goToRegister () {
        navigate("/register")
    }
    return <BlackButtons onClick={goToRegister}>{text}</BlackButtons>
}

export function DeleteButton ( { text, handleDelete } ) {
    
    return <BlackButtons onClick={handleDelete}>{text}</BlackButtons>
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