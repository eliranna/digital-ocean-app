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
        id: 2,
        title: 'סוללים דרך להייטק',
        desc: 'רוכשים את הכלים שנדרשים להתמודדות עם מיוניים ליחידות הסייבר ולחברות ההייטק.',
        icon: "./shavitim-assets/hitech.svg"
    },
    {
        id: 3,
        title: 'ימי העשרה חוויתיים',
        desc: 'מסיירים במרכזי פיתוח ובמעבדות חדשניות, פוגשים מומחים מעולמות ההייטק, וחווים את היקום הווירטואלי.',
        icon: "./shavitim-assets/days.svg"
    },
    {
        id: 4,
        title: 'חווים דינמיקה צוותית',
        desc: 'מתפצלים לצוותי פיתוח קטנים ואוטונומיים הפועלים יחדיו באווירת סטארטאפ.',
        icon: "./shavitim-assets/team.svg"
    },
    {
        id: 5,
        title: 'לומדים בקבוצה קטנה',
        desc: 'מקבלים יחס אישי והכוונה אינדיווידואלית המאפשרת למידה איכותית ומותאמת אישית. ',
        icon: "./shavitim-assets/small.svg"
    },
    {
        id: 6,
        title: 'פרוייקט גמר מאתגר',
        desc: 'מיישמים את החומר הנלמד במהלך פיתוח פרוייקט בינה מלאכותית מאתגר ומסקרן.',
        icon: "./shavitim-assets/project.svg"
    },
]

const FeaturesSection = styled(Section)`
    @media ${device.tabletS} {
        padding-bottom: 160px;
    }
`

const FeaturesTitle = styled(SectionHeader)`
    text-align: center;
    margin-bottom: 100px;
    @media ${device.tabletS} {
        margin-bottom: 76px;
    }
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
    width: 100%;
    height: 414px;
    background-color: white;
    
`

const FeatureImageFigure = styled.img`
    width: 110px;
    height: auto;    
    align-self: center;
    height: 120px;
`

const FeatureImage = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
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
        <FeaturesSection nerrow={true} paddingBottom={true}>
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