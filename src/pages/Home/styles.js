import styled from "styled-components"

export const DisplayFlex = styled.div`
    display: flex;
    gap: 1.2rem;

    > div {
        flex-grow: 1;
        flex-basis: 0;
    }

    @media (max-width: ${({ theme }) => theme.BREAKPOINTS.MD}) {
        flex-direction: column;
    }
`
