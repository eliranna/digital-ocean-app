import React from 'react'
import styled from "styled-components/macro"
import { SectionTitle, SectionTopic, BodyText } from '../captions'
import { spacing } from '../style'
import { Spacer } from '../layout'

const SHOW_SECTION_TOPIC = true;

const Wrapper = styled.div`
    text-align: ${props => props.align ? props.align : "center"};
`
const SectionTopicPanel = styled.div``
const SectionTitlePanel = styled.div``
const SectionDescPanel = styled.div``

const SectionContent = ({align, topic, title, desc}) => {
    return (
        <Wrapper align={align}>
            {SHOW_SECTION_TOPIC && (
                <SectionTopicPanel>
                    <SectionTopic>
                        {topic}
                    </SectionTopic>
                </SectionTopicPanel>
            )}
            <Spacer height={spacing.spacing5} />
            <SectionTitlePanel>
                <SectionTitle>
                    {title}
                </SectionTitle>
            </SectionTitlePanel>
            {desc && (
                <>
                    <Spacer height={spacing.spacing10}/>
                    <SectionDescPanel>
                        <BodyText>
                            {desc}
                        </BodyText>
                    </SectionDescPanel>
                </>
            )}
        </Wrapper>
    )
}

export default SectionContent