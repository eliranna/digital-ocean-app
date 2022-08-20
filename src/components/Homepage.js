import React from 'react'
import styled from "styled-components"

import WelcomeSection from './WelcomeSection'

const Wrapper = styled.div`

`;

const Homepage = () => {
    return (
        <Wrapper>
            <WelcomeSection/>
        </Wrapper>
    )
}

export default Homepage;