import styled from "styled-components";

export const StyledForm = styled.form`
    background-color: var(--grey3);
    border: none;
    border-radius: var(--radius);
    max-width: 100%;
    margin-top: 50px;
    padding: 42px 22px;
    gap: 22px;

    h1 {
        font-size: var(--title1);
        color: var(--grey0);
        font-weight: var(--bold);
    }

    p {
        font-size: var(--headline);
        font-weight: var(--semibold);
        color: var(--grey1);
    }
`

export const StyledRegisterForm = styled(StyledForm)`
`