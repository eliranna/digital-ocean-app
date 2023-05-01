import React, { useState } from 'react';
import styled from 'styled-components/macro';
import { device } from '../style'

export const CardsBoard = styled.div`
    text-align: center;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 82px;
    margin-top: 100px;
    @media ${device.tabletS} {
        gap: 32px;
    }
`

const CardWrapper = styled.div`
    position: relative;
    width: 287px; 
    height: 413.99px;
`

const CardContent = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 36px;
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
            <CardShade>
                <CardShadeImage src="./shavitim-assets/card-shade.svg"/>
            </CardShade>
        </CardWrapper>
    )
}