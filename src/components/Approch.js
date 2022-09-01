import React, { Component, useState } from 'react'
import styled from "styled-components/macro"
import { spacing, fontSize, colors, pageWidth } from '../common/style'

import Page from '../common/components/Page';
import Spacer from '../common/components/Spacer';
import Centered from '../common/components/Centered';
import FeaturesPanel from '../common/components/FeaturePanel';
import Button from '../common/components/Button';
import Accordion from '../common/components/Accordion';
import Strip from '../common/components/Strip';

const features = [
    {
        icon: "./assets/network.svg",
        title: 'מדעי המחשב',
        description: "חשיפה לרעיונות העומדים בבסיסה של הנדסת תוכנה: מבני נתונים, אלגוריתמיקה וסיבוכיות."

    },
    {
        icon: "./assets/eng.svg",
        title: 'הנדסת תוכנה',
        description: "הבנת העקרונות המהותיים ביותר בפיתוח ותכנון של מערכות תוכנה מודרניות: מוֹדוּלָרִיּוּת, אִינְקְפְּסוּלַצְיָה, אָסִינְכְרוֹנִיּוֹת, ותכנות פוּנְקְצִיּוֹנָלִי ומונחה עצמים."
    },
    {
        icon: "./assets/prog.svg",
        title: 'פיתוח תוכנה',
        description: "פיתוח יכולת החשיבה הלוגית וגישה שיטתית לפתרון בעיות. הכרת הנושאים התיאורטיים המהותיים לפיתוח תוכנה, לצד פיתוח תוכנה ותכנות בפועל."
    }
]

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    padding: ${spacing.spacing32} 0px;
`;

const Card = styled.div`
    color: ${colors.textOnAccent};
    background-color: ${colors.accent};
    border-radius: 6px;
    width: 100%;
    padding: ${spacing.spacing20};
    box-shadow: 0px 36px 89px rgb(0 0 0 / 4%), 0px 23.3333px 52.1227px rgb(0 0 0 / 3%), 0px 13.8667px 28.3481px rgb(0 0 0 / 2%), 0px 7.2px 14.4625px rgb(0 0 0 / 2%), 0px 2.93333px 7.25185px rgb(0 0 0 / 2%), 0px 0.666667px 3.50231px rgb(0 0 0 / 1%);
`;

const Title = styled.div`
    text-align: center;
    font-size: ${fontSize.fontSize4};
    font-weight: 500;
`;

const Description = styled(Centered)`
    text-align: center;
    font-size: ${fontSize.fontSize3};
    max-width: 500px;
`;

const ToggleButton = styled(Button)`
    align-self: center;
    border-radius: 24px;
    border: 1px solid ${colors.text};
    color: ${colors.text};
    outline: none;
    background: none;
    display: flex;
    justify-content: center;
    font-size: ${fontSize.fontSize1};
    font-weight: 700;
    height: 35px;
    img {
        width: 27px;
        margin-top: ${props => (props.isOpen ? "0px" : "5px")};
        margin-bottom: ${props => (props.isOpen ? "5px" : "0")};
        //filter: invert(1);
        align-self: center;
        rotate: ${props => (props.isOpen ? "180deg" : "0deg")};
        transition: all 400ms;
    }
`;

const ToggleButtonPanel = styled.div`
    display: flex;
    justify-content: center;    
`

const TopicsPanel = styled.div`
    display: flex;
    flex-direction: column;   
`

const Approch = () => {

    const [topicsPanelIsOpen, setTopicsPanelIsOpen] = useState(false); 

    return (
        <Strip>
            <Page>
                <Title>
                    מה לומדים?
                </Title>
                <Spacer height={spacing.spacing12}/>
                <Description>
                    התוכנית משלבת יסודות של מדעי המחשב, עקרונות של פיתוח תוכנה, מיומנויות תכנות, והכרות עם כלי העבודה העדכניים והנפוצים ביותר לשימוש ע״י חברות ההייטק ויחידות המודיעין של צה״ל תוך שימת דגש מיוחדת על שילובם של הנושאים השונים זה עם זה.
                </Description>
                <Spacer height={spacing.spacing16}/>
                <FeaturesPanel features={features} featureWidth={"30%"}/>
                <Spacer height={spacing.spacing32}/>
                <ToggleButtonPanel>
                    <ToggleButton onClick={() => setTopicsPanelIsOpen(!topicsPanelIsOpen)} isOpen={topicsPanelIsOpen}>
                        <span>פירוט נושאי הלימוד</span>
                        <Spacer width={spacing.spacing2}/>
                        <img src="./assets/arrowdown.svg"/>
                    </ToggleButton>
                </ToggleButtonPanel>
                <TopicsPanel>
                    <Accordion contentHeight={"200px"} open={topicsPanelIsOpen}>
                        
                    </Accordion>
                </TopicsPanel>
            </Page>
        </Strip>
    )
}

export default Approch;