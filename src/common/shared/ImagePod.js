import React from 'react'
import styled from "styled-components/macro"
import { color } from '../style'
import { ParallaxBanner } from 'react-scroll-parallax';

const Wrapper = styled.div`
    background: ${color.white};
    display: flex;
    justify-content: center;
    position: relative;
    flex-grow: 0;
    flex-shrink: 0;
    align-self: center;
    width: 100%;
    height: 100%;
    :before {
        position: absolute;
        top: 0px;
        left: -11.5px;
        width: 100%;
        height: 100%;
        -webkit-filter: blur(25px);
        filter: blur(25px);
        opacity: 0.6;
        z-index: -1;
        background: ${color.gradient};
        content: '';
    }
`

const Image = styled(ParallaxBanner)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    border-radius: 100%;
    padding: 25px;
    border-width: 1px 0px 0px 1px;
    flex-grow: 0;
    flex-shrink: 0;
    z-index: 100;
    ::before{
        border-radius: 100%!important;
    }
    div {
        will-change: unset!important;
    }
`;

const Circle = styled.div`
    position: absolute;
    top: -26px;
    right: -25px;
    z-index: 50;
`
const CircleImage = styled.img`
    width: 580px;
`

const ImagePod = ({src}) => {
    return (
        <Wrapper>
            <Image layers={[{ image: src, speed: -8 }]}/>
            <Circle>
                <CircleImage src={"./shavitim-assets/circle.jpg"}/>
            </Circle>
        </Wrapper>
    )
}

export default ImagePod