import React from 'react'
import styled from "styled-components/macro"

import Page from '../common/components/Page';
import FeaturesPanel from '../common/components/FeaturePanel';
import { colors, spacing } from '../common/style';
import Strip from '../common/components/Strip';

const features = [
    {
        icon: "./assets/team.svg",
        title: 'ללמוד בקבוצה קטנה',
        description: "התוכנית נלמדת בקבוצות של עד שמונה תלמידים תוך שימת דגש על דינמיקה צוותית בסביבה טכנולוגית."

    },
    {
        icon: "./assets/tech.svg",
        title: 'לגעת בחזית הטכנולוגיה',
        description: "הכרות והתנסות מעמיקה עם הכלים המודרניים והמבוקשים ביותר ע״י אגפי המחשוב של צה״ל ותעשיית ההייטק העולמית."
    },
    {
        icon: "./assets/prog.svg",
        title: 'ללמוד וליישם',
        description: "פיתוח יכולת החשיבה הלוגית וגישה שיטתית לפתרון בעיות. הכרת הנושאים התיאורטיים המהותיים לפיתוח תוכנה, לצד פיתוח תוכנה ותכנות בפועל."
    }
]

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center; 
    flex-direction: column;
    background-color: ${colors.lightGrey};
    padding: ${spacing.spacing32} 0px;
`;

const FeaturesSection = () => {
    return (
        <Strip backgroundColor={colors.lightGrey}>
            <Page>
                <FeaturesPanel features={features}/>
            </Page>
        </Strip>
    )
}

export default FeaturesSection;