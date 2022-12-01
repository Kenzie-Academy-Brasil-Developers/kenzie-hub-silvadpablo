import { StyledEye, StyledInput, StyledLabel, StyledSelect } from "./Inputs";
import Eye from "../../Imgs/eye.png"

export function Input ( { id, placeholder, type, text } ) {
    return (
        <>
            <StyledLabel htmlFor={id}>{text}</StyledLabel>
            <StyledInput id={id} placeholder={placeholder} type={type}/>
        </>
    )
}

export function PasswordInput ( {placeholder, text, id} ) {
    function changeType ( event ) {
        const input = event.target.previousSibling
        if (input.type === "password") {
            input.type = "text"
        } else {
            input.type = "password"
        }
    }
    return (
        <>
            <StyledLabel htmlFor="passord">{text}</StyledLabel>
            <StyledInput id={id} type="password" placeholder={placeholder}/>
            {/* <StyledEye src={Eye} alt="show password icon" onClick={changeType}/> */}
        </>
    )
}