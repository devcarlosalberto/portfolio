import styled from "styled-components"

export const Container = styled.div`
    overflow: hidden;
    padding: 12.8rem 2.4rem;

    .top,
    .body {
        animation: fadeUp 1s linear, leftToRight 0.6s linear;
    }

    .top {
        margin-bottom: 4.8rem;
    }

    .top h3 {
        font-size: 1.8rem;
        line-height: 1.9rem;
        color: ${({ theme }) => theme.COLORS.fontColorRed};
    }

    .top h2 {
        font-size: 6.4rem;
        line-height: 5.6rem;
        color: ${({ theme }) => theme.COLORS.fontColorWhite};

        margin-top: 1.2rem;
    }
`
