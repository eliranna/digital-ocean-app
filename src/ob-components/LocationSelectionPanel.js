import React, {useState, useEffect} from 'react'
import styled from "styled-components/macro"

import {fontSize, spacing} from '../ob-style'

import Spacer from './Spacer'

const Wrapper = styled.div`
    text-align: right;
`

const Location = styled.div`
    height: 64px;
    text-align: right;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 8px 24px 8px 32px;
    :hover {
        background-color: rgb(247,247,247);
        border-color: rgb(247,247,247);
    }
`

const LocationSelectionPanel = ({suggestions, onSelect}) => {

    return (
        <Wrapper>
            {suggestions.map((item, index) => {
                return (
                    <Location key={index} onClick={() => onSelect(item)}>
                        {item}
                    </Location>
                )
            })}
        </Wrapper>
    )
}

export default LocationSelectionPanel;