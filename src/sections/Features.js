import React, { useState } from 'react';
import styled from 'styled-components/macro';
import { colors, fontSize, fontWeight, device } from '../common/style'
import Section from '../common/sh-components/Section'
import {GradientText, SectionHeader, SectionText} from '../common/sh-components/Text'
import {GradiantBrderedBox} from '../common/sh-components/Containers'
import { CardsBoard, Card } from '../common/sh-components/Cards'

const features = [
    {
        id: 1,
        title: 'לומדים תכנות לעומק',
        desc: 'לומדים פייתון (Python), שפת התכנות המבוקשת בעולם, ומעמיקים בעקרונות בהנדסת תוכנה ובמדעי המחשב.',
        icon: "./shavitim-assets/prog.svg"
    },
    {
        id: 1,
        title: 'לומדים תכנות לעומק',
        desc: 'לומדים פייתון (Python), שפת התכנות המבוקשת בעולם, ומעמיקים בעקרונות בהנדסת תוכנה ובמדעי המחשב.',
        icon: "./shavitim-assets/prog.svg"
    },
    {
        id: 1,
        title: 'לומדים תכנות לעומק',
        desc: 'לומדים פייתון (Python), שפת התכנות המבוקשת בעולם, ומעמיקים בעקרונות בהנדסת תוכנה ובמדעי המחשב.',
        icon: "./shavitim-assets/prog.svg"
    },
    {
        id: 1,
        title: 'לומדים תכנות לעומק',
        desc: 'לומדים פייתון (Python), שפת התכנות המבוקשת בעולם, ומעמיקים בעקרונות בהנדסת תוכנה ובמדעי המחשב.',
        icon: "./shavitim-assets/prog.svg"
    },
    {
        id: 1,
        title: 'לומדים תכנות לעומק',
        desc: 'לומדים פייתון (Python), שפת התכנות המבוקשת בעולם, ומעמיקים בעקרונות בהנדסת תוכנה ובמדעי המחשב.',
        icon: "./shavitim-assets/prog.svg"
    },
    {
        id: 1,
        title: 'לומדים תכנות לעומק',
        desc: 'לומדים פייתון (Python), שפת התכנות המבוקשת בעולם, ומעמיקים בעקרונות בהנדסת תוכנה ובמדעי המחשב.',
        icon: "./shavitim-assets/prog.svg"
    },
]

const FeaturesSection = styled(Section)``

const FeaturesTitle = styled(SectionHeader)`
    text-align: center;
`

const FeatureCard = styled.div`
    text-align: center;
    display: flex;
    flex-direction: column;
    background-color: white;
    border-radius: 13px;
    padding: 43px;
    align-items: center;
    z-index: 50;
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: white;
    
`

const FeatureImageFigure = styled.img`
    width: 100%;
    height: auto;    
`

const FeatureImage = styled.div`
    width: 110px;
    margin-bottom: 29px;
`

const FeatureTitle = styled.div`
    text-align: center;
    font-size: ${fontSize.fontSize4};
    font-weight: ${fontWeight.regular};
    margin-bottom: 16px;
`

const FeatureDesc = styled.div`
    text-align: center;
    font-size: ${fontSize.fontSize2};
    font-weight: ${fontWeight.regular};
`

const FeatureInto = styled.div`
    display: flex;
    flex-direction: column;
`

const Features = () => {
    return (
        <FeaturesSection nerrow={true}>
            <FeaturesTitle>
                מה מיוחד בתכנית?
            </FeaturesTitle>
            <CardsBoard>
                {features.map(feature => {
                    return (
                        <Card>
                            <FeatureCard>
                                <FeatureImage>
                                    <FeatureImageFigure src={feature.icon}/>
                                </FeatureImage>
                                <FeatureInto>
                                    <FeatureTitle>
                                        {feature.title} 
                                    </FeatureTitle>
                                    <FeatureDesc>
                                        {feature.desc}
                                    </FeatureDesc>
                                </FeatureInto>
                            </FeatureCard>
                        </Card>
                    )
                })}
            </CardsBoard>
        </FeaturesSection>
    )
}

export default Features;