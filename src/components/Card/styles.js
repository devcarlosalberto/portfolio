import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding: 4.8rem;

    background-color: ${({ theme }) => theme.COLORS.backgroundSecondary};

    svg {
        margin-bottom: 3.6rem;
        font-size: 6.4rem;
        color: ${({ theme }) => theme.COLORS.fontColorRed};
    }

    h3 {
        font-size: 2.4rem;
        line-height: 2.9rem;
    }

    p {
        margin-top: 1.4rem;
        font-size: 1.8rem;
        line-height: 2.2rem;
        color: ${({ theme }) => theme.COLORS.fontColorGray};
    }
`
