import React, { useState } from 'react';
import styled from 'styled-components/macro';
import { colors, fontSize, fontWeight, device } from '../common/style'
import Section from '../common/sh-components/Section'
import {GradientText, SectionHeader, SectionText} from '../common/sh-components/Text'
import {GradiantBrderedBox} from '../common/sh-components/Containers'
import { ParallaxBanner } from 'react-scroll-parallax';

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
        flex-direction: column-reverse;
        margin-top: 117px;
    }
`;

const AboutImage = styled(ParallaxBanner)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;

    border-radius: 100%;
    padding: 25px;
    border-width: 1px 0px 0px 1px;
    flex-grow: 0;
    flex-shrink: 0;
    ::before{
        border-radius: 100%!important;
    }
    div {
        will-change: unset!important;
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
        align-self: center;
    }
    @media ${device.tabletS} {
        margin-top: 0px;
    }
`;

const Glass = styled.img`
    position: absolute;
    z-index: 10;
    width: 100%;
    height: 100%;
`;

const ImagePanel = styled.div`
    display: flex;
    justify-content: center;
    width: 527px;
    height: 527px;
    position: relative;
    width: 527px!important;
    height: 527px!important;
    flex-grow: 0;
    flex-shrink: 0;
    align-self: center;
    @media ${device.tabletL} {
        width: 460px!important;
        height: 460px!important;
    }
    @media ${device.tabletS} {
        flex-direction: row;
        width: 450px!important;
        height: 450px!important;
    }
    @media ${device.mobile} {
        width: 80vw!important;
        height: 80vw!important;
        max-width: 450px;
        max-height: 450px;
    }
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
                    <AboutImage
                        layers={[{ image: './shavitim-assets/rocket-full.svg', speed: -8 }]}
                        
                    />
                    <Glass src="./shavitim-assets/glass.svg"/>
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
