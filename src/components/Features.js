import React from 'react'
import styled from "styled-components/macro"
import { fontSize, colors, spacing } from '../common/style';

import Spacer from '../common/components/Spacer';
import Page from '../common/components/Page';
import Centered from '../common/components/Centered';

import BluetoothAudioIcon from '@mui/icons-material/BluetoothAudio';
import GroupsIcon from '@mui/icons-material/Groups';

const features = [
    {
        icon: "./assets/network.svg",
        title: 'מדעי המחשב',
        description: "חשיפה לרעיונות העומדים בבסיסה של הנדסת תוכנה: מבני נתונים, אלגוריתמיקה וסיבוכיות."

    },
    {
        icon: "./assets/tech.svg",
        title: 'הנדסת תוכנה',
        description: "הבנת העקרונות המהותיים ביותר בפיתוח ותכנון של מערכות תוכנה מודרניות: מוֹדוּלָרִיּוּת, אִינְקְפְּסוּלַצְיָה, אָסִינְכְרוֹנִיּוֹת, ותכנות פוּנְקְצִיּוֹנָלִי ומונחה עצמים."
    },
    {
        icon: "./assets/prog.svg",
        title: 'פיתוח תוכנה',
        description: "הכרות והתנסות מעמיקה עם הכלים המודרניים ביותר (Python + Git) והנדרשים ביותר ע״י אגפי המחשוב הצבאיים ותעשיית ההייטק העולמית."
    }
]

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center; 
    flex-direction: column;
`;

const FeaturesPanel = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between; 
    flex-direction: row;
`;

const FeatureWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    width: 23%;
`;

const FeatureIcon = styled.div`
    display: flex;
    justify-content: center;
    img {
        width: 150px;
    }
`;

const FeatureContent = styled.div`
    display: flex;
    justify-content: center;  
    flex-direction: column;
    text-align: center;  
`;

const FeatureTitle = styled.div`
    display: flex;
    justify-content: center; 
    font-size: ${fontSize.fontSize3};
    color: ${colors.accent};  
`;

const FeatureDescription = styled.div`
    display: flex;
    justify-content: center;    
`;

const Feature = ({icon, title, description}) => {
    return (
        <FeatureWrapper>
            <FeatureIcon>
                <img src={icon}/>
            </FeatureIcon>
            <FeatureContent>
                <FeatureTitle>
                    {title}
                </FeatureTitle>
                <Spacer height={spacing.spacing6}/>
                <FeatureDescription>
                    {description}
                </FeatureDescription>
            </FeatureContent>
        </FeatureWrapper>        
    )
}

const FeaturesSection = () => {
    return (
        <Wrapper>
            <Page>
                <FeaturesPanel>
                    {features.map((feature, index) => {
                        return <Feature key={index} icon={feature.icon} title={feature.title} description={feature.description}/>
                    })}                                        
                </FeaturesPanel>
            </Page>
        </Wrapper>
    )
}

export default FeaturesSection;