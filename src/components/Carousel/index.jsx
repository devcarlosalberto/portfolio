import { useState, useEffect, useRef } from "react"

import { Container, InnerCarousel, ImageWrapper } from "./styles"
import JavaScript from "../../images/javascript.png"
import React from "../../images/react.png"
import Node from "../../images/node.png"
import HTML5 from "../../images/html5.png"
import CSS from "../../images/css3.png"
import Figma from "../../images/figma.png"
import Knex from "../../images/knex.png"

const images = [JavaScript, React, Node, HTML5, CSS, Figma, Knex]

export function Carousel() {
    const carousel = useRef()
    const [width, setWidth] = useState(0)

    function handleLoad() {
        setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth)
    }

    useEffect(() => {
        setTimeout(handleLoad, 2000)
    }, [])

    return (
        <Container ref={carousel} whileTap={{ cursor: "grabbing" }}>
            <InnerCarousel
                drag="x"
                dragConstraints={{
                    right: 0,
                    left: -width,
                }}
            >
                {images.map((image, index) => {
                    return (
                        <ImageWrapper key={index}>
                            <img src={image} />
                        </ImageWrapper>
                    )
                })}
            </InnerCarousel>
        </Container>
    )
}
