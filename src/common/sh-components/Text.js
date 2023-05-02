import React, { useState } from 'react';
import styled from 'styled-components/macro';
import { colors, fontSize, fontWeight, device } from '../style'

export const GradientText = styled.div`
    background: ${colors.gradient};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
`;

export const SectionHeader = styled(GradientText)`
    font-size: ${fontSize.fontSize6};
    font-weight: ${fontWeight.light};
    line-height: 120%;
    @media ${device.mobile} {
        font-size: ${fontSize.fontSize5Mobile};
    }
`

export const SectionText = styled.div`
    font-size: ${fontSize.fontSize4};
    font-weight: ${fontWeight.regular};
    line-height: 160%;
`
