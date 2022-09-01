import React from 'react'
import styled from "styled-components/macro"
import { fontSize, colors, spacing } from '../style';

import Spacer from './Spacer';

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between; 
    flex-direction: row;
`;

const FeatureWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column; 
    width: ${props => (props.featureWidth ? props.featureWidth : "23%")};
`;

const FeatureIcon = styled.div`
    display: flex;
    justify-content: center;
    img {
        width: 150px;
        filter: ${props => (props.invertColors ? "invert(1)" : "none")};
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
    color: ${props => (props.invertColors ? colors.textOnAccent : colors.text)};
    font-weight: 500; 
`;

const FeatureDescription = styled.div`
    display: flex;
    justify-content: center;   
    font-size: ${fontSize.fontSize2};
    font-weight: 600;
`;

const Feature = ({icon, title, description, invertColors, featureWidth}) => {
    return (
        <FeatureWrapper featureWidth={featureWidth}>
            <FeatureIcon invertColors={invertColors}>
                <img src={icon}/>
            </FeatureIcon>
            <FeatureContent>
                <FeatureTitle invertColors={invertColors}>
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

const FeaturesPanel = ({features, invertColors, featureWidth}) => {
    return (
        <Wrapper>
            {features.map((feature, index) => {
                return <Feature key={index} icon={feature.icon} title={feature.title} description={feature.description} invertColors={invertColors} featureWidth={featureWidth}/>
            })}                                        
        </Wrapper>
    )
}

export default FeaturesPanel;