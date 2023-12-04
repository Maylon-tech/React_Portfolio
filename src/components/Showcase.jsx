import React from 'react'

import {
    PaddingContainer,
    FlexContainer,
    Heading,
    ParaText,
    BlueText,
    IconContainer
} from '../styles/GlobalStyles'

const Showcase = () => {
  return (
    <PaddingContainer
        id="Home"
        left="3%"
        right="10%"
        top="15%"
        bottom="10%"
    >
        <FlexContainer align="center" fullWidthChild>
            {/* Left Content */}
            <div>
                <Heading size="h4">Hello!@!</Heading>

                <Heading as="h1" size="h1" top="0.5rem" bottom="1rem">
                    I'm <BlueText>Nemoto Mailon</BlueText>
                </Heading>

                <Heading as="h3" size="3" >
                    I'm <BlueText>Front-End React Developer</BlueText>
                </Heading>

                <ParaText as="p" top="2rem" bottom="4rem">
                    Hello, my name is Mailon Doe and I,m a front-end Developer
                    wudth 4 years experience in creating IT company Solutoin.
                </ParaText>
            </div>
        </FlexContainer>
    </PaddingContainer>
  )
}

export default Showcase