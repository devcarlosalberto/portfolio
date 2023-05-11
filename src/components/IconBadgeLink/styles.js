import styled from "styled-components"

export const Container = styled.a`
    width: fit-content;
    padding: 0.8rem;

    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 2.8rem;
    color: ${({ theme }) => theme.COLORS.fontColorRed};

    border-radius: 1rem 0 1rem 0;
    background-color: ${({ theme }) => theme.COLORS.backgroundSecondary};

    transition: all 0.3s ease-in-out;

    cursor: pointer;

    &:hover {
        filter: brightness(1.5);
    }
`
