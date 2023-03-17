import React, {useState, useEffect} from 'react'
import styled from "styled-components/macro"

import {fontSize, spacing} from '../ob-style'

import RangeSlider from './RangeSlider'
import Spacer from './Spacer'

const Wrapper = styled.div`
    text-align: right;
`

const RangeSliderPanel = styled.div`
    margin-bottom: 35px;
`

const ValueDisplay = styled.div`
    font-size: ${fontSize.fontSize2};
    text-align: center;
    font-weight: 600;
`

const Title = styled.div`
    font-size: ${fontSize.fontSize1};
    font-weight: 600;
`

const Description = styled.div`
    font-size: ${fontSize.fontSiz1};
    font-weight: 400;
    color: #717171;
`

const PriceSelectionPanel = ({initialSelectedPrice, onChange}) => {

    const [price, setPrice] = useState(initialSelectedPrice || 30)

    const updateRange = value => {
        setPrice(value)
        onChange(value)
    }

    const valueLabelFormat = value => {
        if (value < 250) {
            return `${x} אלף שקלים`
        }
        return `+${x} אלף שקלים`
    }

    return (
        <Wrapper>
            <Title>
                תקציבך המשוער
            </Title>
            <Spacer height={spacing.spacing1}/>
            <Description>
                נציג בפנייך רק רכבים שמחירם קרוב לתקציבך
            </Description>
            <Spacer height={spacing.spacing10}/>
            <ValueDisplay>
               כ- {price} אלף שקלים 
            </ValueDisplay>
            <Spacer height={spacing.spacing8}/>
            <RangeSliderPanel>
                <RangeSlider min={5} max={250} defaultValue={price} valueLabelFormat={x => `${x} אלף שקלים`} onValueChange={e => updateRange(e.target.value)}/>
            </RangeSliderPanel>
        </Wrapper>
    )
}

export default PriceSelectionPanel;