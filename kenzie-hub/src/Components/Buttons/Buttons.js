import styled from "styled-components";

export const BigButtons = styled.button`
    color: var(--white);
    font-family: var(--family);
    font-weight: var(--medium);
    font-size: var(--title2);
    padding: 10px 22px;
    border: none;
    border-radius: var(--radius);
    background-color: var(--primary);
    cursor: pointer;

    :hover {
        background-color: var(--primary-focus);
    }

    :disabled {
        background-color: var(--primary-negative);
    }
`

export const BlackButtons = styled(BigButtons)`
    background-color: var(--grey1);
    :hover{
        background-color: var(--grey2);
    }
`

export const SmallButtons = styled(BigButtons)`
    font-size: var(--headline);
    font-weight: var(--semibold);
    padding: 6px 16px;
    background-color: var(--grey3);

    :hover {
        background-color: var(--grey2);
    }
`

export const AddButtons = styled(SmallButtons)`
    text-align: center;
    padding: 0;
    font-size: var(--title1);
    font-weight: var(--semibold);
    width: 32px;
    height: 32px;
    background-color: var(--grey4);
`