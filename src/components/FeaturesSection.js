import React from 'react'
import styled from "styled-components/macro"
import { fontSize, pageWidth, spacing } from '../common/style';

import Spacer from '../common/components/Spacer';
import Page from '../common/components/Page';
import Centered from '../common/components/Centered';

import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';

const features = [
    {
        icon: <AccessAlarmIcon/>,
        title: 'ממוקד מטרה'
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
    
`;

const FeatureIcon = styled.div`
    
`;

const FeatureContent = styled.div`
    
`;

const FeatureTitle = styled.div`
    
`;

const FeatureDescription = styled.div`
    
`;

const Feature = ({icon, title, description}) => {
    return (
        <FeatureWrapper>
            <FeatureIcon>
                {icon}
            </FeatureIcon>
            <FeatureContent>
                <FeatureTitle>
                    {title}
                </FeatureTitle>
                <FeatureDescription>

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
                    {features.map(feature => {
                        return <Feature data={feature}/>
                    })}                                        
                </FeaturesPanel>
            </Page>
        </Wrapper>
    )
}

export default FeaturesSection;