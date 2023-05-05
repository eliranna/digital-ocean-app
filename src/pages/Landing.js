import React from 'react';
import styled from 'styled-components/macro'
import { Page, SectionSpacer } from '../common/layout';
import { color, spacing } from '../common/style';
import { ParallaxProvider } from 'react-scroll-parallax';
import Cover from '../sections/Cover';
import About from '../sections/About';
import Slogen from '../sections/Slogen';
import Features from '../sections/Features';
import TopBar from '../components/TopBar'

const TopbarPanel = styled.div`
    padding-top: ${spacing.spacing20};
    background: ${color.black};
`

const Landing = () => {
    return (
        <ParallaxProvider>
            <Page>
                <TopbarPanel>
                    <TopBar darkMode={true}/>
                </TopbarPanel>
                <Cover/>
                <SectionSpacer/>
                <Slogen/>
                <SectionSpacer/>
                <About/>
                <SectionSpacer/>
                <Features/>
                <SectionSpacer/>
            </Page>
        </ParallaxProvider>   
    )
}

export default Landing