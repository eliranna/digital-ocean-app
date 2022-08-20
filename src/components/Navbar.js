import React, { Component } from 'react'
import styled from "styled-components"
import { spacing } from '../common/style'

import Button from './Button'

const Wrapper = styled.div`
    padding: ${spacing.large};
    display: flex;
    justify-content: flex-end;
`;

const ButtonsPanel = styled.div`
    
`;

const Navbar = () => {
    return (
        <Wrapper>
            <ButtonsPanel>
                <Button>
                    שאלות נפוצות
                </Button>
                <Button full>
                    הרשמה
                </Button>
            </ButtonsPanel>
        </Wrapper>
    )
}

export default Navbar;