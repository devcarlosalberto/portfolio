import { FiLinkedin, FiGithub, FiMail } from "react-icons/fi"

import { Container } from "./styles"
import { IconBadgeLink } from "../IconBadgeLink"

export function Header({ ...rest }) {
    return (
        <Container {...rest}>
            <div>
                <h1>
                    <span className="line">
                        Olá, <span className="text-red">eu sou</span>
                    </span>
                    <span className="line">Carlos Alberto</span>
                    <span className="line">
                        Desenvolvedor{" "}
                        <span className="text-red">Fullstack</span>
                    </span>
                </h1>
                <div className="text-introduction">
                    <p>
                        Resolvo problemas utilizando aplicações web em
                        JavaScript com React & Node. Conhecimento em GitHub,
                        QueryBuilders, NoSQL, SQL, Context API, JWT, Jest, TDD e
                        muito mais.
                    </p>
                    <small>
                        Bacharelado em Ciência da Computação 2023~2027
                    </small>
                </div>
                <div className="social-networks">
                    <p>ENCONTRE-ME EM</p>
                    <div>
                        <IconBadgeLink
                            icon={FiLinkedin}
                            link="https://www.linkedin.com/in/devcarlosalberto/"
                        />
                        <IconBadgeLink
                            icon={FiGithub}
                            link="https://github.com/devcarlosalberto"
                        />
                        <IconBadgeLink
                            icon={FiMail}
                            link="mailto:devcarlosalberto@gmail.com"
                        />
                    </div>
                </div>
            </div>
        </Container>
    )
}
