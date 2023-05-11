import { FiServer, FiCode, FiDollarSign } from "react-icons/fi"

import { DisplayFlex } from "./styles"

import { Card } from "../../components/Card"
import { Navbar } from "../../components/Navbar"
import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"
import { Section } from "../../components/Section"
import { Carousel } from "../../components/Carousel"
import { Separator } from "../../components/Separator"

export function Home() {
    return (
        <>
            <Navbar />

            <Header />

            <Separator />

            <main>
                <Section
                    id="skills"
                    title="O Que Eu Faço"
                    subtitle="HABILIDADES"
                >
                    <DisplayFlex>
                        <Card title="API Rest" icon={FiServer}>
                            Construção de APIs com JavaScript utilizando{" "}
                            <strong>Node</strong> com <strong>Express</strong>.
                            Aplicando boas práticas além de usar testes
                            automatizados (TDD) com <strong>Jest</strong>,
                            implementação de autenticação com{" "}
                            <strong>Json Web Token (JWT)</strong>,
                            desacoplamento de funções, regras de negócios
                            separada do banco de dados e etc.
                        </Card>
                        <Card title="Interfaces Web" icon={FiCode}>
                            Construção de interfaces web com JavaScript
                            utilizando a biblioteca <strong>React</strong>{" "}
                            usando <strong>Context API</strong>,{" "}
                            <strong>CSS-IN-JS (styled-components)</strong>,
                            <strong>axios</strong> para consumir APIs entre
                            outras bibliotecas que ajudam nesse desenvolvimento
                            junto com React.
                        </Card>
                        <Card title="Landpage" icon={FiDollarSign}>
                            Seja página de vendas, página para prospecção de
                            clientes, captura de leads ou tudo isso em uma só
                            página. Utilizando as tecnologias necessárias que
                            for solicitada desde HTML e CSS até React.
                        </Card>
                    </DisplayFlex>
                </Section>

                <Separator />

                <Section id="techs" title="Hard Skills" subtitle="TECNOLOGIAS">
                    <Carousel />
                </Section>

                <Separator />

                <Section id="resume" title="Sobre Mim" subtitle="SOBRE">
                    <p className="text-gray text-indent">
                        Olá, sou Carlos, um desenvolvedor web especializado em
                        JavaScript e com experiência em construir aplicações
                        tanto no front-end quanto no back-end. Sou apaixonado
                        por criar interfaces usando ReactJS para o front-end e
                        NodeJS para o back-end. Acredito que a experiência do
                        usuário deve ser prioridade em todos os projetos que
                        desenvolvo. Além disso, utilizo Figma para protótipos de
                        projetos. Estou sempre buscando aprender e me atualizar
                        em novas tecnologias e tendências da área. Se você está
                        procurando um desenvolvedor comprometido com a qualidade
                        e a inovação, estou pronto para colaborar em seu
                        projeto.
                    </p>
                </Section>
            </main>

            <Footer />
        </>
    )
}
