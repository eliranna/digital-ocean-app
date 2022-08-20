import React from 'react'
import styled from "styled-components/macro"

import { spacing } from '../common/style';
import Spacer from '../common/components/Spacer'

import Welcome from './Welcome'
import Features from './Features'
import Info from './Info'

const Wrapper = styled.div`

`;

const Homepage = () => {
    return (
        <Wrapper>
            <Welcome/>
            <Spacer height={spacing.spacing32}/>
            <Features/>
            <Spacer height={spacing.spacing32}/>
            <Info/>
        </Wrapper>
    )
}

export default Homepage;