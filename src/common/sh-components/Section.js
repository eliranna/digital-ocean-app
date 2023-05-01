import React, { useState } from 'react';
import styled from 'styled-components/macro';
import { colors, fontSize, fontWeight, device, pageWidth } from '../style'

const Wrapper = styled.div`
    padding-top: 212px;
    padding-bottom: ${ props => props.paddingBottom ? '212px' : '0px'};
    display: flex;
    flex-direction: column;
    background-color: ${props => props.background ? props.background : null};
    @media ${device.tabletS} {
        padding-top: 76px;
        padding-bottom: ${ props => props.paddingBottom ? '76px' : '0px'};
    }
`;

const Page = styled.div`
    padding-right: 80px;
    padding-left: 80px;
    max-width: ${props => props.nerrow ? pageWidth.nerrow : 'unset'};
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    @media ${device.mobile} {
        padding-right: 45px;
        padding-left: 45px;
    }
    @media ${device.mobileS} {
        padding-right: 20px;
        padding-left: 20px;
    }
`;

const Section = ({children, nerrow, paddingBottom, background}) => {
    return (
        <Wrapper paddingBottom={paddingBottom} background={background}>
            <Page nerrow={nerrow}>
                {children}
            </Page>
        </Wrapper>
    )
}

export default Section
