import React, { Component } from 'react'
import styled from "styled-components/macro"
import { spacing, fontSize, colors, pageWidth } from '../common/style'

import Page from '../common/components/Page';
import Spacer from '../common/components/Spacer';
import Centered from '../common/components/Centered';

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
`;

const Quote = styled(Centered)`
    font-size: ${fontSize.fontSize3};
    border-right: 9px solid ${colors.accent};
    font-weight: 700;
    color: ${colors.accent};
    padding-right: ${spacing.spacing6};
    max-width: ${pageWidth.maxWidthLG};
`;

const Vision = () => {
    return (
        <Wrapper>
            <Page nerrow>
                <Quote>
                    מטרת התוכנית הינה לחשוף את התלמידים אל עקרונות עולם התוכנה המודרני, לעודד את יצר סקרנותם של כלפי עולם התוכנה, להעניק להם כלים ראשוניים להמשך למידה עצמאית או אקדמאית, ולפתח את יכולתם להתנהל כאנשי צוות בסביבה טכנולוגית. 
                </Quote>
            </Page>
        </Wrapper>
    )
}

export default Vision;