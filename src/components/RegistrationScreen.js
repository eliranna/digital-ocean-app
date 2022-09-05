import React, { Component } from 'react'
import styled from "styled-components/macro"
import { spacing, fontSize, colors } from '../common/style'

import Button from '../common/components/Button'
import Spacer from '../common/components/Spacer';
import Screen from '../common/components/Screen';
import RegistrationForm from './RegistrationForm';

const Wrapper = styled(Screen)`
    display: flex;
    flex-direction: row;
    overflow: scroll;
    height: 100%;
`;

const Sidebar = styled.div`
    width: 450px;
    background-color: ${colors.lightGrey};
    height: 100%;
`;

const Content = styled.div`
    padding: ${spacing.spacing32};
`

const RegisterButton = styled(Button)`
    border: none;
    background: ${colors.accent};
    color: ${colors.textOnAccent};
    font-size: ${fontSize.fontSize2};
`

const RegistrationScreen = ({onClose}) => {
    return (
        <Wrapper>
            <Sidebar>
                <button onClick={onClose}>סגור</button>
            </Sidebar>
            <Content>
                <RegistrationForm/>
            </Content>
        </Wrapper>
    )
}

export default RegistrationScreen;