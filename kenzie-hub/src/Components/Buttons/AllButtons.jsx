import { useNavigate } from "react-router-dom";
import { BigButtons, BlackButtons, SmallButtons } from "./Buttons";

export function PrimaryButton ( { text } ) {
    return <BigButtons>{text}</BigButtons>
}

export function DialogButton ( { text, setDialogOpen } ) {
    function closeDialog () {
        setDialogOpen(false)
    }
    return <BigButtons onClick={closeDialog}>{text}</BigButtons>
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

    function GoBack ( event ) {
        navigate("/login")
    }
    return <SmallButtons onClick={GoBack}>{text}</SmallButtons>
}