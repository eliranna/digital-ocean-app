import React from 'react'
import styled from "styled-components/macro";
import { spacing, pageWidth } from './style'

export const Page = styled.div`
    display: flex;
    flex-direction: column;
    overflow-y: hidden;
    align-self: center;
`;

export const Section = styled.div`
    display: flex;
    flex-direction: column;
    height: ${props => props.fullScreen ? "100vh" : null};
    background: ${props => props.background ? props.background : null};
`

export const SectionBody = styled.div`
    display: flex;
    flex-direction: column;
    max-width: ${pageWidth.normal};
    right: 0;
    left: 0;
    margin-right: auto;
    margin-left: auto;
`

export const Centered = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center; 
    width: 100%;
    align-items: center;
`

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center; 
    width: 100%;
    align-items: center;
`

export const Cell = styled.div`
    display: flex;
    flex-direction: Column;
    justify-content: center; 
    width: 100%;
    align-items: center;
`

export const Spacer = styled.div`
    height: ${props => props.height};
    width: ${props => props.width ? props.width : 0};
`;

export const SectionSpacer = () => <Spacer height={spacing.spacing36}/>
