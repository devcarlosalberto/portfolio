import { Container } from "./styles"

export function IconBadgeLink({ icon: Icon, link }) {
    return (
        <Container href={link} target="_blank">
            <Icon />
        </Container>
    )
}
