import React, { useState } from 'react';
import styled from 'styled-components/macro';
import { colors, fontSize, fontWeight, device } from '../common/style'
import Section from '../common/sh-components/Section'
import {GradientText, SectionHeader, SectionText} from '../common/sh-components/Text'
import {GradiantBrderedBox} from '../common/sh-components/Containers'

const AboutSection = styled(Section)`

`

const IntroSlogen = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const IntroSlogenText = styled(GradientText)`
    font-size: ${fontSize.fontSize7};
    text-align: center;
    max-width: 424px;
    align-self: center;
    font-weight: ${fontWeight.extraLight};
    @media ${device.mobile} {
        max-width: 315px;
        font-size: ${fontSize.fontSize7Mobile};
    }
`;

const AboutStrip = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 153px;
    margin-top: 171px;
    position: relative;
    @media ${device.tabletL} {
        gap: 65px;
    }
    @media ${device.tabletS} {
        flex-direction: column;
        margin-top: 117px;
    }
`;

const AboutImage = styled(GradiantBrderedBox)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    width: 527px;
    min-width: 261px;
    height: 527px;
    min-height: 261px;
    padding: 25px;
    border-width: 1px 0px 0px 1px;
    flex-grow: 0;
    flex-shrink: 0;
    ::before{
        border-radius: 100%!important;
    }
    @media ${device.tabletL} {
        width: 460px;
        height: 460px;
        padding: 20px;
    }
    @media ${device.tabletS} {
        flex-direction: row;
        width: 450px;
        height: 450px;
        padding: 16px;
    }
    @media ${device.mobile} {
        width: 80vw;
        height: 80vw;
        max-width: 450px;
        max-height: 450px;
        padding: 15px;
    }
`;

const AboutImageInner = styled.div`
    background-size: 494px;
    background-repeat: no-repeat;
    background-position-x: center;
    background-position-y: -2px;
    border-radius: 100%;
    background-image: url("./shavitim-assets/rocket-full.svg");
    transition: background-position-y 0.2s ease;
    width: 100%;
    height: 100%;
    z-index: 1;
    @media ${device.mobile} {
        background-size: 140%;
    }
`

const About = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    @media ${device.mobile} {
        
    }
`;

const AboutTitle = styled(SectionHeader)`
    @media ${device.tabletS} {
        text-align: center;
    }
    @media ${device.mobile} {
        font-size: ${fontSize.fontSize5Mobile};
    }
`;

const AboutText = styled(SectionText)`
    margin-top: 40px;
    @media ${device.tabletS} {
        text-align: center;
    }
    @media ${device.mobile} {
        font-size: ${fontSize.fontSize4Mobile};
    }
`;

const AboutInner = styled.div`
    margin-top: 80px;
    max-width: 421px;
    @media ${device.tablet} {

    }
    @media ${device.tabletS} {
        margin-top: 0px;
    }
`;

const Glass = styled.img`
    position: absolute;
    z-index: 1;
    width: 100%;
    height: 100%;
    z-index: 10;
`;

const ImagePanel = styled.div`
    display: flex;
    justify-content: center;
`;

const Intro = () => {
    return (
        <AboutSection background={"white"}>
            <IntroSlogen>
                <IntroSlogenText>
                    סוללים את הדרך אל עולמות ההייטק והסייבר, בצה”ל ובאזרחות.
                </IntroSlogenText>
            </IntroSlogen>
            <AboutStrip>
                <ImagePanel>
                    <AboutImage>
                        <AboutImageInner></AboutImageInner>
                        <Glass src="./shavitim-assets/glass.svg"></Glass>
                    </AboutImage>
                </ImagePanel>
                <About>
                    <AboutInner>
                        <AboutTitle>
                            על התוכנית
                        </AboutTitle>
                        <AboutText>
                            שביטים הינה תוכנית ייחודית וחוויתית עבור תלמידי התיכון. משתתפי התוכנית ילמדו פיתוח תוכנה באופן יסודי ומעמיק, יחשפו אל טכנולוגיות העתיד, יתנסו בדינמיקה צוותית ויישמו את הנלמד במהלך ביצוע פרוייקט מאתגר. 
                        </AboutText>
                    </AboutInner>
                </About>
            </AboutStrip>
        </AboutSection>
    )
}

export default Intro;
