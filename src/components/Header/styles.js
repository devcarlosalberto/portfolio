import styled from "styled-components"

export const Container = styled.header`
    margin-top: 9.6rem;
    margin-bottom: 12.8rem;
    padding: 0rem 2.4rem;

    overflow: hidden;

    > div {
        animation: fadeUp 1s linear, leftToRight 0.6s linear;
    }

    .line {
        display: block;
        line-height: 1;
    }

    .line:nth-of-type(1) {
        font-size: 3.2rem;
    }

    .line:nth-of-type(2) {
        font-size: 8.2rem;
    }

    .line:nth-of-type(3) {
        font-size: 4.8rem;
        font-weight: 400;
    }

    .text-introduction {
        max-width: 65rem;
        margin-top: 4.8rem;

        font-size: 1.8rem;
        color: ${({ theme }) => theme.COLORS.fontColorGray};
    }

    .text-introduction small {
        display: block;
        margin-top: 1.2rem;
        color: ${({ theme }) => theme.COLORS.fontColorGray};
    }

    .social-networks {
        margin-top: 4.8rem;

        font-size: 1.4rem;

        div {
            margin-top: 2.4rem;
            display: flex;
            gap: 1.2rem;
        }
    }

    @media (max-width: ${({ theme }) => theme.BREAKPOINTS.MD}) {
        .line:nth-of-type(1) {
            font-size: 2.4rem;
        }

        .line:nth-of-type(2) {
            font-size: 6.4rem;
        }

        .line:nth-of-type(3) {
            font-size: 2.8rem;
        }
    }
`
