import styled from "styled-components"

export const Container = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;

    padding: 1.2rem 1.8rem;

    text-transform: uppercase;

    border: none;
    border-radius: 4.8rem;
    background-color: ${({ theme }) => theme.COLORS.backgroundTertiary};
`
