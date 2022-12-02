import { StyledEye, StyledInput, StyledLabel, StyledSelect } from "./Inputs";
import { FaEye, FaEyeSlash } from "react-icons/fa"
import { useEffect, useState } from "react";

export function Input ( { id, placeholder, type, text, register } ) {
    return (
        <>
            <StyledLabel htmlFor={id}>{text}</StyledLabel>
            <StyledInput id={id} placeholder={placeholder} type={type} {...register}/>
        </>
    )
}

export function PasswordInput ( {placeholder, text, id, register} ) {
    const [eye, setEye] = useState(true)
    const [confirmEye, setConfirmEye] = useState()

    useEffect(() => {
        setEye(!eye)
    }, [])

    useEffect(() => {
        setConfirmEye(!confirmEye)
    }, [])

    function changeType ( event ) {
        const input = event.target.parentElement.previousSibling
        const pathInput = event.target.parentNode.parentElement.previousSibling
        if (input) {
            if (input.type === "password") {
                input.type = "text"
                setEye(false)
            } else if (input.type === "text"){
                input.type = "password"
                setEye(true)
            }
        } else if (!input) {
            if (pathInput.type === "password") {
                input.type = "text"
                setEye(false)
            } else if (pathInput.type === "text"){
                input.type = "password"
                setEye(true)
            }
        }
    }
    return (
        <>
            <StyledLabel htmlFor="passord">{text}
            </StyledLabel>
            <StyledInput id={id} type="password" placeholder={placeholder} {...register} defaultValue=""/>
            <StyledEye>
                {
                    eye ?
                    <FaEyeSlash className="fa-eye" id="eye" onClick={changeType}/>
                    :
                    <FaEye className="fa-eye" id="slashed" onClick={changeType}/>
                }
            </StyledEye>
        </>
    )
}