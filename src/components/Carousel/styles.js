import styled from "styled-components"

import { motion } from "framer-motion"

export const Container = styled(motion.div)`
    overflow: hidden;
    cursor: grab;
`

export const InnerCarousel = styled(motion.div)`
    width: 100%;
    display: flex;
`

export const ImageWrapper = styled(motion.div)`
    min-width: 12.8rem;

    display: flex;
    justify-content: center;
    align-items: center;

    padding: 1.4rem;

    /* border: 1px solid rebeccapurple; */

    img {
        width: 100%;
        pointer-events: none;
    }
`
