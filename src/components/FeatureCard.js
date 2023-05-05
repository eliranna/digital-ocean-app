import React from 'react'
import styled from 'styled-components/macro'
import Card from '../common/shared/Card'
import { BodyText } from '../common/captions'
import { spacing } from '../common/style'
import { Spacer } from '../common/layout'

const CardIcon = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center; 
    padding-top: 40px;
    padding-bottom: 62px;
`

const Icon = styled.img`
    width: 56px;
    align-self: center;
`

const CardTitle = styled.div`
    text-align: center;
`

const CardDesc = styled.div`
    text-align: center;
`

const Wrapper = styled(Card)`
    max-width: 287px;
`

const FeatureCard = ({icon, title, desc}) => {
    return (
        <Wrapper>
            <CardIcon>
                <Icon src={icon}/>
            </CardIcon>
            <CardTitle>
                <BodyText>
                    {title}
                </BodyText>
            </CardTitle>
            <Spacer height={spacing.spacing8}/>
            <CardDesc>
                {desc}
            </CardDesc>
        </Wrapper>
    )
}

export default FeatureCard