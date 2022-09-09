import React from 'react'
import styled from "styled-components/macro";
import { colors, fonts, fontSize } from '../style'

const Wrapper = styled.div`
    width: 100%;
    transition: all 500ms ease-out;
`;

const Content = styled.div`
    max-height: 0;
    overflow: hidden;
    transition: max-height 500ms ease-out;
    max-height: ${props => (props.open ? props.contentHeight : 0)};
`;

const Accordion = ({children, contentHeight, open}) => {
    return (
        <Wrapper>
            <Content open={open} contentHeight={contentHeight}>   
                {children}
            </Content>                                      
        </Wrapper>
    )
}

export default Accordion;