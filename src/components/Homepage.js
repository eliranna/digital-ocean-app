import React from 'react'
import styled from "styled-components/macro"

import WelcomeSection from './WelcomeSection'
import FeaturesSection from './FeaturesSection'

const Wrapper = styled.div`

`;

const Homepage = () => {
    return (
        <Wrapper>
            <WelcomeSection/>
            <FeaturesSection/>
        </Wrapper>
    )
}

export default Homepage;