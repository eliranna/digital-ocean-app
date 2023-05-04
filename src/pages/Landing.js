import React, { useState } from 'react';
import { Page, PageBody, SectionSpacer } from '../common/layout';
import { ParallaxProvider } from 'react-scroll-parallax';
import Cover from '../sections/Cover';
import About from '../sections/About';
import Slogen from '../sections/Slogen';

const Landing = () => {
    return (
        <ParallaxProvider>
            <Page>
                <Cover/>
                <Slogen/>
                <SectionSpacer/>
                <About/>
            </Page>
        </ParallaxProvider>   
    )
}

export default Landing