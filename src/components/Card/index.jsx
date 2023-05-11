import { Container } from "./styles"

export function Card({ title, icon: Icon, children }) {
    return (
        <Container>
            {Icon && <Icon />}
            <h3>{title}</h3>
            <p>{children}</p>
        </Container>
    )
}
