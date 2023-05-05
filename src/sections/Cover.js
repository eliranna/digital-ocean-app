import React, { useState } from 'react';
import styled from "styled-components/macro";
import { Section, Centered } from '../common/layout';
import { color, fontSize, fontWeight, device, spacing } from '../common/style'
import { BodyText } from '../common/captions'

const SLOGEN_MAX_WIDTH = "250px";
const NAVBAR_TO_LOGO_MARGIN = "205px";

const Content = styled.div`
    margin-top: ${NAVBAR_TO_LOGO_MARGIN};
`

const Logo = styled.div`
    
`

const LogoImage = styled.img`
    margin-right: -15px;
`

const Intro = styled.div`
    text-align: center;
`

const LogoAndSlogen = styled.div`
    max-width: ${SLOGEN_MAX_WIDTH};
`

const Cover = () => {
    return (
        <Section fullScreen={true} background={color.black}>
            <Content>
                <Centered>
                    <LogoAndSlogen>
                        <Logo>
                            <LogoImage src="./shavitim-assets/logo.svg"/>
                        </Logo>
                        <Intro>
                            <BodyText darkMode={true}>
                                תוכנית הייטק ייחודית וחוויתית עבור תלמידי התיכון
                            </BodyText>
                        </Intro>
                    </LogoAndSlogen>
                </Centered>
            </Content>
        </Section>
    )
}

export default Cover;