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
    margin: 22px 0;
`

export const StyledEye = styled.span`
    width: 0;
    height: 0;
    position: relative;
    width: 100%;
    
    .fa-eye {
        color: var(--grey1);
        width: 20px;
        height: 20px;
        background-color: var(--grey2);
        position: absolute;
        right: 15px;
        bottom: 20px;
        cursor: pointer;
    }
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