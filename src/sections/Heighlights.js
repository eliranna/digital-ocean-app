import React, { useState } from 'react';
import styled from 'styled-components/macro';
import { colors, fontSize, fontWeight, device } from '../common/style'
import Section from '../common/sh-components/Section'
import {GradientText, SectionHeader, SectionText} from '../common/sh-components/Text'
import {GradiantBrderedBox} from '../common/sh-components/Containers'
import { CardsBoard, Card } from '../common/sh-components/Cards'

const HeighlightsSection = styled(Section)``

const Heighlights = () => {
    return (
        <HeighlightsSection paddingBottom={true} background={colors.backgrouondDark}>
            <CardsBoard>

            </CardsBoard>
        </HeighlightsSection>
    )
}

export default Heighlights;