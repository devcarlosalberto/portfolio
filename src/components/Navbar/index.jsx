import { useState, useEffect } from "react"
import { FiMenu } from "react-icons/fi"

import { Container } from "./styles"
import { Button } from "../../components/Button"
import { theme } from "../../styles/theme"

import { extractNumbersFromString } from "../../utils/extractNumbersFromString"
import { scrollToTop } from "../../utils/scrollUtils"

export function Navbar() {
    const [isOpenMenu, setIsOpenMenu] = useState(false)
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)

    const menu = [
        { name: "Habilidades", link: "#skills" },
        { name: "Tecnologias", link: "#techs" },
        { name: "Resumo", link: "#resume" },
    ]

    function toggleMenu() {
        setIsOpenMenu(!isOpenMenu)
    }

    useEffect(() => {
        const tabletBreakpoint = extractNumbersFromString(theme.BREAKPOINTS.MD)
        if (windowWidth > tabletBreakpoint) {
            setIsOpenMenu(false)
        }
    }, [windowWidth])

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth)
        window.addEventListener("resize", handleResize)
        return () => window.removeEventListener("resize", handleResize)
    }, [])

    return (
        <Container>
            <h1>Portfólio</h1>
            <div id="menu">
                <button className="mobile-toggle-menu" onClick={toggleMenu}>
                    <FiMenu size={32} />
                </button>
                <div
                    className={
                        isOpenMenu ? "mobile-menu active" : "mobile-menu"
                    }
                    onClick={toggleMenu}
                >
                    <ul>
                        <li>
                            <a href="#" onClick={scrollToTop}>
                                Início
                            </a>
                        </li>
                        {menu.map((item, index) => {
                            return (
                                <li key={index}>
                                    <a href={item.link}>{item.name}</a>
                                </li>
                            )
                        })}
                        <li>
                            <a
                                href="../../../public/curriculo.pdf"
                                download="Currículo de Carlos Alberto"
                            >
                                <Button
                                    title="Download CV"
                                    className="mobile-btn-download-cv"
                                />
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="desktop-menu">
                    <ul>
                        <li>
                            <a href="#" onClick={scrollToTop}>
                                Início
                            </a>
                        </li>
                        {menu.map((item, index) => {
                            return (
                                <li key={index}>
                                    <a href={item.link}>{item.name}</a>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
            <a
                href="../../../public/curriculo.pdf"
                download="Currículo de Carlos Alberto"
                className="desktop-btn-download-cv"
            >
                <Button title="Download CV" />
            </a>
        </Container>
    )
}
