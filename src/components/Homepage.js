import React, { useEffect, useState } from 'react'
import styled from "styled-components/macro"

import { spacing } from '../common/style';
import Spacer from '../common/components/Spacer'

import Header from './Header';
import Overview from './Overview';
import Features from './Features'
import Approch from './Approch'
import Program from './Program'
import Info from './Info'
import Host from './Host'
import RequestRegistration from './RequestRegistration'
import Footer from './Footer'
import FAQs from './FAQ';
import RegistrationPage from './RegistrationPage';


const Wrapper = styled.div`
`;

const Homepage = () => {

    const [termsModalIsOpen, setTermsModalIsOpen] = useState(false)

    return (
        <Wrapper>
            <Header/>
            <Overview/>
            <Features/>
            <Approch/>
            <Program/>
            <Info/>
            <Host/>
            <RegistrationPage onShowTerms={() => setTermsModalIsOpen(true)}/>
            <FAQs/>
            <Footer/>
        </Wrapper>
    )
}

export default Homepage;