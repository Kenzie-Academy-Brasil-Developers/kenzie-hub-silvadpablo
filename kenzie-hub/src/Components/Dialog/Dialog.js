import styled from "styled-components"

export const Dialogs = styled.dialog`
    width: 30%;
    background-color: var(--grey3);
    border: none;
    padding: 0px;
    border-radius: var(--radius);

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
        gap: 22px;
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
`