import React, { Component, useState } from 'react'
import styled from "styled-components/macro"
import { spacing, fontSize, colors, device } from '../common/style'

import Page from '../common/components/Page';
import Spacer from '../common/components/Spacer';
import Centered from '../common/components/Centered';
import FeaturesPanel from '../common/components/FeaturePanel';
import Button from '../common/components/Button';
import Accordion from '../common/components/Accordion';
import Strip from '../common/components/Strip';
import SectionTitle from '../common/components/SectionTitle';
import MobileSpacer from '../common/components/MobileSpacer';

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

const topics = {
    git: {
        icon: "./assets/git.svg",
        title: 'סביבת הפיתוח המודרנית',
        description: "הכרות והתנסות מעמיקה עם הכלים העדכניים והנדרשים ביותר (Bash ,Git) ע״י אגפי המחשוב הצבאיים ותעשיית ההייטק העולמית. תרגול מעשי של תכנות בשפה השימושית ביותר בעולם (Python)."        
    },
    python: {
        icon: "./assets/py.svg",
        title: 'מפתחים ב- Python',
        description: "לומדים לפתח בשפת התכנות המבוקשת ביותר בעולם התוכנה. ידיעת השפה תשמש את התלמידים במהלך התוכנית ובכתיבת הפרוייקט האישי, וכמו כן, בהשתלבותם כמפתחים בחברות טכנולוגיה וביחידות הצבאיות."        
    },
    coding: {
        icon: "./assets/coding.svg",
        title: 'עקרונות של קוד איכותי',
        description: "לומדים את העקרונות הבסיסיים של קוד נקי ואיכותי. רעיונות כגון כּימוּס (אֶנְקַפְּסוּלַצְיָה), מוֹדוּלָרִיּוּת, עקרון האחריות הבודדת,  ותכנות מונחה עצמים, וכללי אצבע שימושיים כגון KISS, DRY, ו- YAGNI הינם אבני דרך חשובים בתהליך כתיבת קוד מקצועי. כמו כן, נדגיש את ההבדל בין קוד סינכרוני לקוד אָסִינְכְרוֹנִיּ."        
    },
    dataStructures: {
        icon: "./assets/ds.svg",
        title: 'מבני נתונים',
        description: "הכרת מבני הנתונים השונים ואת ההבדלים ביניהם הינה מהותית ביותר ליכולתו של מהנדס התוכנה לדון, לתכנן ולפתח אלגוריתמים באיכות גבוהה. אנו שמים דגש על המבנים השימושיים ביותר ועל ההבנה האינטואיטיבית של ההבדלים ביניהם."        
    },
    algo: {
        icon: "./assets/alg.svg",
        title: 'אלגוריתמים ומושג הסיבוכיות',
        description: "הכרת אלגוריתמים נפוצים וההבדלים ביניהם הינה שימושית ביותר במלאכת תכנון ופיתוח של תוכנה איכותית. אנו שמים דגש על ההבנה האינטואיטיבית של האלגוריתמים ועל שילובם ליצירת פרוצדורה שלמה. כמו כן, התלמידים יכירו את הרעיון החשוב של סיבוכיות זמן וידעו לאמוד את סיבוכיותן של תוכניות פשוטות."        
    },
    databases: {
        icon: "./assets/database.svg",
        title: 'מסדי נתונים בענן',
        description: "נכיר את תפקידו של מסד הנתונים (Database) כחלק מרכזי במערכות תוכנה, את סוגיהם השונים של מסדי הנתונים ואת ההבדלים העיקריים ביניהם. נדגיש את ההבדל בין מסד נתונים לבין זכרון זמן-ריצה. בהמשך, נכיר את הרעיון של ממשק תכנות יישומי (API) ונדגיש את חשיבותו."        
    },
    ai: {
        icon: "./assets/ai.svg",
        title: 'בינה מלאכותית (AI)',
        description: "נחשף לרעיון של למידת מכונה (Machine Learning) ועל הדרכים ליישמו בתוכנה. נעמוד על ההבדל בין תוכנה קלאסית לבין תוכנה לומדת."        
    }
}

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
    font-size: ${fontSize.fontSize5};
    font-weight: 500;
`;

const Description = styled(Centered)`
    text-align: center;
    font-size: ${fontSize.fontSize3};
    max-width: 500px;
    @media ${device.mobileL} {
        padding-right: ${spacing.spacingPaddingMobile};
        padding-left: ${spacing.spacingPaddingMobile};
    }
`;

const ToggleButton = styled(Button)`
    align-self: center;
    border-radius: 24px;
    border: none;
    color: ${colors.text};
    outline: none;
    background: none;
    display: flex;
    justify-content: center;
    font-size: ${fontSize.fontSize1};
    font-weight: 700;
    height: 35px;
    img {
        display: inline-block;
        width: 27px;
        margin-top: ${props => (props.isOpen ? "0px" : "5px")};
        margin-bottom: ${props => (props.isOpen ? "5px" : "0")};
        align-self: center;
        transform: ${props => (props.isOpen ? "rotate(180deg)" : null)};
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
    background-color: ${colors.lightGrey}; 
    padding: ${spacing.spacing24} ${spacing.spacing24};
    @media ${device.mobileL} {
        padding-right: ${spacing.spacingPaddingMobile};
        padding-left: ${spacing.spacingPaddingMobile};
    }
`
const TopicsGrid = styled.div`
    display: flex;
    flex-direction: row; 
    justify-content: space-between;
    @media ${device.mobileL} {
        flex-direction: column;
    }
`

const TopicWrapper = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 300px;
    flex-grow: 0;
    flex-shrink: 0;
    @media ${device.mobileL} {
        max-width: 100%;
    }
`

const TopicIcon = styled.div`
    display: flex;
    flex-grow: 0;
    flex-shrink: 0;
    img {
        width: 75px;
    }
    @media ${device.mobileL} {
        justify-content: center;
    }
`

const TopicTitle = styled.div`
    font-size: ${fontSize.fontSize3};
    font-weight: 600;
    flex-grow: 0;
    flex-shrink: 0;
    @media ${device.mobileL} {
        text-align: center;
    }
`

const TopicDesc = styled.div`
    font-size: ${fontSize.fontSize2};
    font-weight: 500;
    flex-grow: 0;
    flex-shrink: 0;
    @media ${device.mobileL} {
        text-align: center;
    }
`

const Column = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 0;
    flex-shrink: 0;
`

const SpacerRigid = styled(Spacer)`
    flex-shrink: 0;
    flex-grow: 0;
`;

const Topic = ({topic}) => {
    return (
        <TopicWrapper>
            <TopicIcon>
                <img src={topic.icon}/>
            </TopicIcon>
            <Spacer height={spacing.spacing2}/>
            <TopicTitle>
                <span>{topic.title}</span>
            </TopicTitle>
            <Spacer height={spacing.spacing4}/>
            <TopicDesc>
                <span>{topic.description}</span>
            </TopicDesc>
        </TopicWrapper>
    )
}

const Approch = () => {

    const [topicsPanelIsOpen, setTopicsPanelIsOpen] = useState(false); 

    return (
        <Strip>
            <Page>
                <SectionTitle>
                    מה לומדים?
                </SectionTitle>
                <Spacer height={spacing.spacing12}/>
                <Description>
                    התוכנית משלבת יסודות של מדעי המחשב, עקרונות של פיתוח תוכנה, מיומנויות תכנות, והכרות עם כלי העבודה העדכניים והנפוצים ביותר לשימוש ע״י חברות ההייטק ויחידות המודיעין של צה״ל תוך שימת דגש מיוחדת על שילובם של הנושאים השונים זה עם זה.
                </Description>
                <Spacer height={spacing.spacing24}/>
                <FeaturesPanel features={features} featureWidth={"30%"}/>
                <Spacer height={spacing.spacing32}/>
                <ToggleButtonPanel>
                    <ToggleButton onClick={() => setTopicsPanelIsOpen(!topicsPanelIsOpen)} isOpen={topicsPanelIsOpen}>
                        <span>פירוט נושאי הלימוד</span>
                        <img src="/assets/arrowdown.svg"/>
                    </ToggleButton>
                </ToggleButtonPanel>
                <Accordion open={topicsPanelIsOpen} contentHeight={"4000px"}>
                    <SpacerRigid height={spacing.spacing12}/>
                    <TopicsPanel>
                        <TopicsGrid>
                            <Column>
                                <Topic topic={topics.git}/>
                                <SpacerRigid height={spacing.spacing24}/>
                                <Topic topic={topics.python}/>
                                <SpacerRigid height={spacing.spacing24}/>
                                <Topic topic={topics.coding}/>
                                <SpacerRigid height={spacing.spacing24}/>
                                <Topic topic={topics.dataStructures}/>
                            </Column>
                            <Column>
                                <MobileSpacer height={spacing.spacing24}/>
                                <Topic topic={topics.algo}/> 
                                <SpacerRigid height={spacing.spacing24}/>
                                <Topic topic={topics.databases}/> 
                                <SpacerRigid height={spacing.spacing24}/>
                                <Topic topic={topics.ai}/>                       
                            </Column>
                        </TopicsGrid>
                    </TopicsPanel>
                </Accordion>
            </Page>
        </Strip>
    )
}

export default Approch;