import React from 'react'
import styled from "styled-components/macro"

import { spacing } from '../common/style';
import Spacer from '../common/components/Spacer'

import Header from './Header';
import Overview from './Overview';
import Features from './Features'
import Approch from './Approch'
import Program from './Program'
import Info from './Info'
import Register from './Register'
import Host from './Host'
import Topics from './Topics'


const Wrapper = styled.div`

`;

const Homepage = () => {
    return (
        <Wrapper>
            <Header/>
            <Overview/>
            <Features/>
            <Approch/>
            <Program/>
            <Info/>
            <Register/>
            <Host/>
        </Wrapper>
    )
}

export default Homepage;