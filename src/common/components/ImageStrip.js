import React from 'react'
import styled from "styled-components/macro"
import { fontSize, colors, spacing } from '../style';

const Wrapper = styled.div`
    width: 100%:
    display: flex;
    justify-content: center; 
    flex-direction: column;
    background-color: ${colors.lightGrey};
`;

const Content = styled.div`
    display: flex;
    flex-direction: ${props => (props.reverse ? 'row-reverse' : 'row')}; 
    justify-content: space-between;
`;

const Photo = styled.div`
    width: 46.44%;
    flex-shrink: 0;
    height: 600px;
    display: flex;
    flex-direction: column;
    background-image: ${props => (`url(${props.src})`)}; 
    background-size: cover;
    background-repeat: no-repeat;
`;

const Body = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
`;

const Info = styled.div`
    right: 0;
    left: 0; 
    margin-left: auto;
    margin-right: auto;
`;

const ImageStrip = ({children, img, reverse}) => {
    return (
        <Wrapper>
            <Content reverse={reverse}>
                <Body>
                    <Info>
                        {children}
                    </Info>                   
                </Body>
                <Photo src={img}/>
            </Content>
        </Wrapper>
    )
}

export default ImageStrip;