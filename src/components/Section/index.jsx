import { Container } from "./styles"

export function Section({ title, subtitle, children, ...rest }) {
    return (
        <Container {...rest}>
            <div className="top">
                <h3>{subtitle}</h3>
                <h2>{title}</h2>
            </div>
            <div className="body">{children}</div>
        </Container>
    )
}
