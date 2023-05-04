import React from 'react'
import styled from "styled-components/macro"
import { SectionTitle, SectionTopic, BodyText } from '../captions'
import { spacing } from '../style'
import { Spacer } from '../layout'

const SHOW_SECTION_TOPIC = false;

const Wrapper = styled.div`
`
const SectionTopicPanel = styled.div``
const SectionTitlePanel = styled.div``
const SectionDescPanel = styled.div``

const SectionContent = ({topic, title, desc}) => {
    return (
        <Wrapper>
            {SHOW_SECTION_TOPIC && (
                <SectionTopicPanel>
                    <SectionTopic>
                        {topic}
                    </SectionTopic>
                </SectionTopicPanel>
            )}
            <SectionTitlePanel>
                <SectionTitle>
                    {title}
                </SectionTitle>
            </SectionTitlePanel>
            <Spacer height={spacing.spacing10}/>
            <SectionDescPanel>
                <BodyText>
                    {desc}
                </BodyText>
            </SectionDescPanel>
        </Wrapper>
    )
}

export default SectionContent