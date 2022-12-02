import { StyledEye, StyledInput, StyledLabel, StyledSelect } from "./Inputs";
import Eye from "../../Imgs/eye.png"

export function Input ( { id, placeholder, type, text, register } ) {
    return (
        <>
            <StyledLabel htmlFor={id}>{text}</StyledLabel>
            <StyledInput id={id} placeholder={placeholder} type={type} {...register}/>
        </>
    )
}

export function PasswordInput ( {placeholder, text, id, register} ) {
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
            <StyledInput id={id} type="password" placeholder={placeholder} {...register}/>
            {/* <StyledEye src={Eye} alt="show password icon" onClick={changeType}/> */}
        </>
    )
}