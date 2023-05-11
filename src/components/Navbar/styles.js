import styled from "styled-components"

export const Container = styled.menu`
    width: 100%;
    max-width: 113.4rem;
    height: 8.5rem;
    padding: 2.4rem;
    margin: 0 auto;

    position: fixed;
    top: 0%;
    z-index: 999;

    display: flex;
    justify-content: space-between;
    align-items: center;

    text-transform: uppercase;

    background-color: ${({ theme }) => theme.COLORS.backgroundPrimary};

    h1 {
        font-size: ${({ theme }) => theme.FONT_SIZE.LG};
    }

    ul {
        display: flex;
        gap: 3.2rem;

        list-style: none;
    }

    a {
        font-size: ${({ theme }) => theme.FONT_SIZE.XS};
        font-weight: 700;
        text-decoration: none;

        position: relative;

        transition: all 0.2s ease-in-out;
    }

    a::before {
        content: "";

        width: 100%;
        height: 2px;

        position: absolute;
        left: 50%;
        bottom: -8px;

        transform: translateX(-50%) scale(0);

        border-radius: 0.8rem;
        background-color: ${({ theme }) => theme.COLORS.backgroundTertiary};
        transition: all 0.6s ease;
    }

    a:hover {
        color: ${({ theme }) => theme.COLORS.backgroundTertiary};
    }

    a:hover::before {
        transform: translateX(-50%) scale(1);
    }

    button {
        cursor: pointer;
    }

    .mobile-toggle-menu,
    .mobile-menu,
    .mobile-btn-download-cv {
        display: none;
    }

    .mobile-toggle-menu {
        border: none;
        background-color: transparent;
        transition: all 0.3s ease-in-out;
    }

    .mobile-toggle-menu:hover {
        transform: rotate(180deg);
    }

    @media (max-width: ${({ theme }) => theme.BREAKPOINTS.MD}) {
        .desktop-btn-download-cv,
        .desktop-menu {
            display: none;
        }

        .mobile-toggle-menu {
            display: inline;
        }

        .mobile-menu.active {
            width: 100%;
            height: 100dvh;

            display: flex;
            justify-content: center;
            align-items: center;

            position: absolute;
            top: 0;
            left: 0;

            backdrop-filter: blur(32px) brightness(0.5);

            ul {
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 4.8rem;
            }

            a {
                font-size: ${({ theme }) => theme.FONT_SIZE.MD};
            }

            .mobile-btn-download-cv {
                display: inline;
            }
        }
    }
`
