import React, { Component } from 'react'
import styled from "styled-components/macro"
import { spacing, fontSize, colors } from '../common/style'

import Button from '../common/components/Button'
import Spacer from '../common/components/Spacer';

const Wrapper = styled.div`
    padding: ${spacing.large};
    display: flex;
    justify-content: flex-end;
    padding: ${spacing.spacing16} ${spacing.spacing32};
`;

const ButtonsPanel = styled.div`
    display: flex;
    flex-direction: row;
`;

const Link = styled(Button)`
    border: none;
    background: none;
    font-size: ${fontSize.fontSize2};
`

const RegisterButton = styled(Button)`
    border: none;
    background: ${colors.accent};
    color: ${colors.textOnAccent};
    font-size: ${fontSize.fontSize2};
`

const Navbar = () => {
    return (
        <Wrapper>
            <ButtonsPanel>
                <Link>
                    שאלות נפוצות
                </Link>
                <Spacer width={spacing.spacing6}/>
                <RegisterButton full>
                    הרשמה
                </RegisterButton>
            </ButtonsPanel>
        </Wrapper>
    )
}

export default Navbar;