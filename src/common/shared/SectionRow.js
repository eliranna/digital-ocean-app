import React from 'react'
import styled from "styled-components/macro"
import { spacing } from '../style'
import { Spacer } from '../layout'

const Wrapper = styled.div`
    display: grid;
    grid-gap: ${spacing.spacing32};
    grid-template-columns: 1fr 1fr;
`
const ImageCell = styled.div`
    width: 527px;
    height: 527px;
`

const ContentCell = styled.div`
    margin-top: ${spacing.spacing20};
    div {
        max-width: 400px;
    }
`

const SectionRow = ({image, content}) => {
    return (
        <Wrapper>
            <ImageCell>
                {image}
            </ImageCell>
            <ContentCell>
                {content}
            </ContentCell>
        </Wrapper>
    )
}

export default SectionRow