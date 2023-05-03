import React, { useState } from 'react';
import styled from 'styled-components/macro';
import { device } from '../style'

export const CardsBoard = styled.div`
    display: grid;
    grid-gap: 82px;
    grid-template-columns: auto auto auto;
    @media ${device.tabletL} {
        grid-template-columns: repeat(2, 1fr);
    }
    @media ${device.tabletS} {
        grid-gap: 32px;
    }
    @media ${device.mobile} {
        grid-gap: 16px;
    }
`

const CardWrapper = styled.div`
    display: flex;
    flex-direction: column; 
    position: relative;
    max-width: 292px;
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
        background: linear-gradient(180deg, #EB7BA9 0%, #C671D8 49.48%, #7982F7 99.48%);
        content: '';
    }
    @media ${device.mobileL} {
       
    }
    @media ${device.mobile} {
        
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