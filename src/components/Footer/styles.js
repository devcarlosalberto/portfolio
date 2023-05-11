import styled from "styled-components"

export const Container = styled.footer`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.8rem;

    padding: 2.4rem;

    position: absolute;
    width: 100%;
    left: 0;

    background-color: ${({ theme }) => theme.COLORS.backgroundSecondary};

    div {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0.8rem;
    }

    span {
        display: flex;
        align-items: center;
        font-weight: bold;
        gap: 0.8rem;
    }
`
