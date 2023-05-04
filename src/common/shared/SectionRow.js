import React from 'react'
import styled from "styled-components/macro"
import { spacing } from '../style'
import { Spacer } from '../layout'

const Wrapper = styled.div`
    display: grid;
    grid-gap: ${spacing.spacing32};
    grid-template-columns: 1fr 1fr;
`
const Cell = styled.div`

`

const SectionRow = ({image, content}) => {
    return (
        <Wrapper>
            <Cell>
                {image}
            </Cell>
            <Cell>
                {content}
            </Cell>
        </Wrapper>
    )
}

export default SectionRow