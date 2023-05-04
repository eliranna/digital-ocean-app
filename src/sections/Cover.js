import React, { useState } from 'react';
import styled from "styled-components/macro";
import { Section } from '../common/layout';
import { color, fontSize, fontWeight, device, spacing } from '../common/style'
import TopBar from '../components.new/TopBar'

const TopbarPanel = styled.div`
    margin-top: ${spacing.spacing20};
`

const Cover = () => {
    return (
        <Section fullScreen={true} background={color.black}>
            <TopbarPanel>
                <TopBar darkMode={true}/>
            </TopbarPanel>
        </Section>
    )
}

export default Cover;