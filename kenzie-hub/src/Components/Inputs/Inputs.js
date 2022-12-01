import styled from "styled-components";

export const StyledInput = styled.input`
    background-color: var(--grey2);
    font-family: var(--family);
    color: var(--grey0);
    padding: 10px 16px;
    border-radius: var(--radius);
    border: 1px solid var(--grey2);
    outline: none;

    ::placeholder {
        color: var(--grey1);
        padding: 10px 16px;
    }

    :focus {
        border: 1px solid var(--grey0);
    }
`

export const StyledLabel = styled.label`
    font-family: var(--family);
    font-size: var(--headline);
    color: var(--grey0);
    font-weight: var(--regular);
    text-align: left;
`

export const StyledEye = styled.img`
    width: 25px;
    height: 30px;
    position: relative;
    right: -23vw;
    bottom: 55px;
    cursor: pointer;
`

export const StyledSelect = styled.select`
    background-color: var(--grey2);
    font-family: var(--family);
    color: var(--grey1);
    padding: 10px 16px;
    border-radius: var(--radius);
    border: 1px solid var(--grey2);
    outline: none;
    
    option {
        background-color: var(--grey2);
        color: var(--grey0);
    }

`