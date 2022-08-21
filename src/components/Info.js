import React from 'react'
import styled from "styled-components/macro"

import Spacer from '../common/components/Spacer'
import Page from '../common/components/Page'
import { colors, fontSize, spacing } from '../common/style';

const info = [
    {
        question: "למי מיועדת התוכנית?",
        answare: "התוכנית מיועדת לתלמידי כיתות י׳ עד י״ב המצטיינים במקצועות הריאליים ובאנגלית, ובעלי רקע בסיסי בתכנות. עם בקשת ההרשמה, יש לצרף צילום של גיליון הציונים האחרון."
    },
    {
        question: "מה לומדים?",
        answare: (
            <span>
                התוכנית משלבת יסודות של מדעי המחשב, עקרונות של פיתוח תוכנה, מיומנויות תכנות, והכרות עם כלי העבודה העדכניים והנפוצים ביותר לשימוש ע״י חברות ההייטק ויחידות המודיעין של צה״ל.
                <br/><br/>
                במהלך התוכנית, כל תלמיד יפתח פרוייקט תוכנה אישי אותו יגיש בסיום המסלול. 
                במהלך עבודתם, נעודד את התלמידים להסתייע זה בזה ע״י שימוש בכלים הנפוצים בתעשיית התוכנה (כגון Slack), על מנת לפתח את יכולתהם לעבוד בצוות פיתוח.
            </span>
        )
    },
    {
        question: "מהו משך ומבנה התוכנית?",
        answare: "המסלול כולל שבעה מפגשים שבועיים ביום קבוע, כאשר אורכו של כל מפגש הינו כשלוש שעות. כל מפגש מכיל שיעור כיתתי מקוון במשך שעתיים (דרך ה- zoom) ושעה נוספת המוקדשת לביצוע תרגיל תכנות מונחה (שעה)."
    }
]

const Wrapper = styled.div`

`;

const InfoBlockWrapper = styled.div`
    display: flex;
`;

const Question = styled.div`
    font-size: ${fontSize.fontSize5};
    color: ${colors.accent};
    width: 250px;
    flex-shrink: 0;
    flex-grow: 0;
`;

const Answare = styled.div`
    font-size: ${fontSize.fontSize2};
`;

const InfoBlock = ({question, answare}) => {
    return (
        <InfoBlockWrapper>
            <Question>
                {question}
            </Question>
            <Spacer width={spacing.spacing12}/>
            <Answare>
                {answare}
            </Answare>
        </InfoBlockWrapper>
    )
}

const Info = () => {
    return (
        <Wrapper>
            <Page nerrow>
                {info.map((item,index) => {
                    return (
                        <React.Fragment key={index}>
                            <InfoBlock question={item.question} answare={item.answare}/>
                            <Spacer height={spacing.spacing12}/>
                        </React.Fragment>
                    )
                })}
            </Page>
        </Wrapper>
    )
}

export default Info;