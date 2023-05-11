import { FiMail, FiPhone } from "react-icons/fi"

import { Container } from "./styles"

export function Footer() {
    return (
        <Container>
            <span>Site desenvolvido por Carlos Alberto.</span>
            <div>
                <span>
                    <FiMail /> devcarlosalberto@gmail.com
                </span>
                <span>
                    <FiPhone /> +55 (13) 98173-5815
                </span>
            </div>
        </Container>
    )
}
