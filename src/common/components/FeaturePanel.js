import React from 'react'
import styled from "styled-components/macro"
import { fontSize, colors, spacing, device } from '../style';
import MobileSpacer from './MobileSpacer';

import Spacer from './Spacer';

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: ${props => props.align ? props.align : 'space-between'};
    flex-direction: row;
    @media ${device.mobileL} {
        flex-direction: column;
        padding-left: ${spacing.spacingPaddingMobile};
        padding-right: ${spacing.spacingPaddingMobile};
    }
`;

const FeatureWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column; 
    width: ${props => (props.featureWidth ? props.featureWidth : "23%")};
    @media ${device.mobileL} {
        width: 100%;
    }
`;

const FeatureIcon = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    flex-grow: 0;
    img {
        width: 150px;
        align-self: center;
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

const FeaturesPanel = ({features, invertColors, featureWidth, align}) => {
    console.log(align)
    return (
        <Wrapper align={align}>
            {features.map((feature, index) => {
                return (
                    <>
                        <Feature key={index} icon={feature.icon} title={feature.title} description={feature.description} invertColors={invertColors} featureWidth={featureWidth}/>
                        {(index < features.length - 1) && (<MobileSpacer height={spacing.spacing24}/>)}
                    </>
                )
            })}                                        
        </Wrapper>
    )
}

export default FeaturesPanel;