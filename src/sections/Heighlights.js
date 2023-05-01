import React, { useState } from 'react';
import styled from 'styled-components/macro';
import Section from '../common/sh-components/Section'

const HeighlightsSection = styled(Section)`
    background: #121212;
`

const Heighlights = () => {
    return (
        <HeighlightsSection paddingBottom={true}>
            hi
        </HeighlightsSection>
    )
}

export default Heighlights;