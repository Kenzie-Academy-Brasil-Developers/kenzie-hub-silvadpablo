import styled from "styled-components";

export const Card = styled.li`
    background-color: var(--grey4);
    border: none;
    border-radius: var(--radius);
    max-width: 100%;
    padding: 13px 22px;

    :hover {
        background-color: var(--grey2);
    }

    :hover p {
        color: var(--grey0);
    }

    h2 {
        font-size: var(--title3);
        font-weight: var(--bold);
        color: var(--grey0);
    }

    p {
        color: var(--grey1);
    }

    .remove-div {
        gap: 10px;
    }

    img {
        cursor: pointer;
    }
`