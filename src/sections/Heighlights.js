import React, { useState } from 'react';
import styled from 'styled-components/macro';
import Section from '../common/sh-components/Section'
import { colors } from '../common/style'

const HeighlightsSection = styled(Section)``

const Heighlights = () => {
    return (
        <HeighlightsSection paddingBottom={true} background={colors.backgrouondDark}>
            hi
        </HeighlightsSection>
    )
}

export default Heighlights;