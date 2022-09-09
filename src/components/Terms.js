import React from 'react'
import styled from "styled-components/macro"
import { fontSize, pageWidth, spacing, colors, device } from '../common/style';
import Spacer from '../common/components/Spacer';
import ReactMarkdown from 'react-markdown';
import MarkdownContent from '../common/components/MarkdownContent';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    overflow: scroll;
    padding: ${spacing.spacing4};
`;

const Title = styled.div`
    text-align: center;
    font-size: ${fontSize.fontSize32};
    font-weight: 500;
    text-align: right;
`;

const markdown = ``

const Terms = () => {
    return (
        <Wrapper>
            <Title>
                תוכנית שביטים — תקנון התוכנית
            </Title>
            <Spacer height={spacing.spacing12}/>
            <MarkdownContent>
                <ReactMarkdown children={markdown}/>
            </MarkdownContent>
        </Wrapper>
    )
}

export default Terms;