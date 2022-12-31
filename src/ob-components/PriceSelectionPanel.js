import React, {useState, useEffect} from 'react'
import styled from "styled-components/macro"

import {fontSize, spacing} from '../ob-style'

import RangeSlider from './RangeSlider'
import Spacer from './Spacer'

const Wrapper = styled.div`
    text-align: right;
`

const RangeSliderPanel = styled.div`

`

const ValueDisplay = styled.div`
    font-size: ${fontSize.fontSize1};
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

const PriceSelectionPanel = ({initialSelectedPrice, minPrice, maxPrice, onChange}) => {

    const [price, setPrice] = useState(initialSelectedPrice || 30)

    const updateRange = value => {
        setPrice(value)
        onChange(value)
    }

    const valueLabelFormat = value => {
        if (value < 250) {
            return `${value} אלף שקלים`
        }
        return `${value}+ אלף שקלים`
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
            <RangeSliderPanel>
                <RangeSlider min={minPrice} max={maxPrice} defaultValue={price} valueLabelFormat={valueLabelFormat} onValueChange={e => updateRange(e.target.value)}/>
            </RangeSliderPanel>
            <Spacer height={spacing.spacing2}/>
            <ValueDisplay>
               כ- {price} אלף שקלים 
            </ValueDisplay>
        </Wrapper>
    )
}

export default PriceSelectionPanel;