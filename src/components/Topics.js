import React from 'react'
import styled from "styled-components/macro"

import Page from '../common/components/Page';
import FeaturesPanel from '../common/components/FeaturePanel';
import { colors, spacing, fontSize } from '../common/style';

const features = [
    {
        icon: "./assets/tech.svg",
        title: 'חזית הטכנולוגיה',
        description: "הכרות והתנסות מעמיקה עם הכלים המודרניים והמבוקשים ביותר ע״י אגפי המחשוב של צה״ל ותעשיית ההייטק העולמית."

    },
    {
        icon: "./assets/team.svg",
        title: 'דינמיקה צוותית',
        description: "התנסות בעבודת צוות בסביבה טכנולוגית, תוך הדגשת החשיבות של שיתוף פעולה אפקטיבי."
    },
    {
        icon: "./assets/prog.svg",
        title: 'תיאוריה לצד יישום',
        description: "פיתוח יכולת החשיבה הלוגית וגישה שיטתית לפתרון בעיות. הכרת הנושאים התיאורטיים המהותיים לפיתוח תוכנה, לצד תכנות בפועל."
    }
]

const Wrapper = styled.div`
    width: 100%;
    background-color: ${colors.accent};
    color: ${colors.textOnAccent};
    padding: ${spacing.spacing16} 0px;
`;

const Title = styled.div`
    text-align: center;
    font-size: ${fontSize.fontSize4};
    font-weight: 500;
`;

const Description = styled.div`
    text-align: center;
    font-size: ${fontSize.fontSize2};
`;

const Topics = () => {
    return (
        <Wrapper>
            <Page>
                <Title>
                    נושאי הלימוד
                </Title>
            </Page>
        </Wrapper>
    )
}

export default Topics;