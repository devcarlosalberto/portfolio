import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :root {
        font-size: 62.5%;
        text-rendering: optimizeLegibility;

        scroll-behavior: smooth;

        -webkit-font-smoothing: antialiased;

        background-color: ${({ theme }) => theme.COLORS.backgroundPrimary}
    }

    body {
        width: 100%;
        max-width: 113rem;
        min-height: 100dvh;
        margin: 0 auto;

        /* padding for navbar */
        padding-top: 8.5rem;
    }

    body, button, a {
        font-size: 1.6rem;
        font-family: "Inter", sans-serif;
        color: ${({ theme }) => theme.COLORS.fontColorWhite};
    }

    .text-red {
        color: ${({ theme }) => theme.COLORS.fontColorRed};
    }

    .text-gray {
        color: ${({ theme }) => theme.COLORS.fontColorGray};
    }

    .text-indent {
        text-indent: 1.2rem;
    }

    @keyframes fadeUp {
        from {
            opacity: 0;
        }

        to {
            opacity: 1;
        }
    }

    @keyframes leftToRight {
        from {
            transform: translateX(-50%);
        }

        to {
            transform: translateX(0);
        }
    }
`
