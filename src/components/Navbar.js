import React, { Component } from 'react'
import styled from "styled-components"
import { spacing, fontSize } from '../common/style'

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

const Navbar = () => {
    return (
        <Wrapper>
            <ButtonsPanel>
                <Button>
                    שאלות נפוצות
                </Button>
                <Spacer width={spacing.spacing6}/>
                <Button full>
                    הרשמה
                </Button>
            </ButtonsPanel>
        </Wrapper>
    )
}

export default Navbar;