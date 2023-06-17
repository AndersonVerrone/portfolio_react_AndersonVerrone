import { styled } from "styled-components";

export const StyledStartButton = styled.button`
    height: 100%;
    width: fit-content;
    padding: 0 1rem 0 0.3rem;
    background: var(--color-button);
    border: none;
    border-radius: 0 10px 10px 0;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.2rem;

    &:hover{
        background: var(--color-button-hover);
    }

    img {
        width: 1.125rem;
    }

    p {
        font-size: .9rem;
        font-weight: bold;
        color: var(--color-white);
    }
`