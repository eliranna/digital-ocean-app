import React from 'react'
import styled from "styled-components/macro";
import { color, fontSize, fontWeight } from './style'

export const DarkGradientText = styled.span`
    background: ${color.darkGradient};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
`

export const Slogen = styled(DarkGradientText)`
    font-size: ${fontSize.xLarge};
    font-weight: ${fontWeight.extraLight};
    letter-spacing: 0.03em;
`

export const SectionTitle = styled.span`
    font-size: ${fontSize.large};
    font-weight: ${fontWeight.light};
    color: ${color.darkGradient};
`

export const SectionTopic = styled.span`
    font-size: ${fontSize.tiny};
    font-weight: ${fontWeight.semiBold};
    border-radius: 12px;
    background: ${color.blackGradient};
    color: ${color.white};
    padding: 0px 10px;
    height: 22px;
    display: inline-block;
    line-height: 21px;
`

export const BodyText = styled.span`
    font-size: ${fontSize.regular};
    font-weight: ${fontWeight.regular};
    color: ${props => props.darkMode ? color.white : color.dark};
    line-height: 28.8px;
`

export const NavBarLink = styled.span`
    font-size: ${fontSize.small};
    font-weight: ${fontWeight.regular};
    border-radius: 12px;
    letter-spacing: 0.1em;
    color: ${props => props.darkMode ? color.white : color.dark};
`





