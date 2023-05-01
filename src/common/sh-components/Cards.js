import React, { useState } from 'react';
import styled from 'styled-components/macro';
import { device } from '../style'

export const CardsBoard = styled.div`
    text-align: center;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 82px;
    @media ${device.tabletS} {
        gap: 32px;
    }
`

const CardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 287px; 
    position: relative;
    ::before {
        content: "";
        z-index: -1;
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background: linear-gradient(180deg, #EB7BA9 0%, #C671D8 49.48%, #7982F7 99.48%);
        transform: translate3d(3px, 15px, 0) scale(0.9);
        filter: blur(25px);
        opacity: 0.8;
        transition: opacity 0.3s;
        border-radius: inherit;
    }
    ::after {
        content: "";
        z-index: -1;
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background: inherit;
        border-radius: inherit;
    }
            
`

const CardContent = styled.div`
    display: flex;
    flex-direction: column;
`

const CardShade = styled.div`
    z-index: 1;
    position: absolute;
    right: -44px;
    top: -28px;
`

const CardShadeImage = styled.img``

export const Card = ({icon, title, children}) => {
    return (
        <CardWrapper>
            <CardContent>
                {children}
            </CardContent>
        </CardWrapper>
    )
}