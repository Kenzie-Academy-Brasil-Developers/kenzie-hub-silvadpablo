import styled from "styled-components";

export const StyledForm = styled.form`
    background-color: var(--grey3);
    border: none;
    border-radius: var(--radius);
    max-width: 100%;
    margin-top: 50px;
    padding: 42px 22px 90px 22px;
    /* gap: 22px; */

    h1 {
        font-size: var(--title1);
        color: var(--grey0);
        font-weight: var(--bold);
        margin-bottom: 22px;
    }

    p {
        font-size: var(--headline);
        font-weight: var(--semibold);
        color: var(--grey1);
        margin-top: 22px;
    }

    span {
        font-size: var(--headline);
        font-weight: var(--bold);
        color: var(--negative);
        text-align: right;
        margin-top: 10px;
    }

    > button {
        margin-top: 22px;
    }
`

export const StyledRegisterForm = styled(StyledForm)`
`