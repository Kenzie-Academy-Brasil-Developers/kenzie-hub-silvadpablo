import styled from "styled-components"

export const Dialogs = styled.dialog`
    width: 30%;
    background-color: var(--grey3);
    border: none;
    padding: 0px;
    border-radius: var(--radius);
    position: absolute;
    bottom: 25%;

    .wrapper {
        max-width: 100%;
        border-radius: 4px 4px 0px 0px;
    }
    
    .diag-header {
        border-radius: 4px 4px 0px 0px;
        max-width: 100%;
        background-color: var(--grey2);
        width: 100%;
    }

    .diag-body {
        /* gap: 22px; */
        padding: 20px;
    }

    h2 {
        padding: 20px;
    }

    p {
        padding: 20px;
        color: var(--grey1);
        cursor: pointer;
    }

    button {
        margin-top: 22px;
    }

    span {
        font-size: var(--headline);
        font-weight: var(--bold);
        color: var(--negative);
        text-align: right;
        margin-top: 10px;
    }

    @media(max-width: 850px) {
        width: 50%;
    }

    @media(max-width: 550px) {
        width: 70%;
    }

    @media(max-width: 375px) {
        width: 90%;
    }

`