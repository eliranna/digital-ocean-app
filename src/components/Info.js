import React from 'react'
import styled from "styled-components/macro"

import Spacer from '../common/components/Spacer'
import Page from '../common/components/Page'
import { colors, fontSize, pageWidth, spacing } from '../common/style';
import Strip from '../common/components/Strip';
import Centered from '../common/components/Centered';

const info = [
    {
        question: "למי מיועדת התוכנית?",
        answare: "התוכנית מיועדת לתלמידי כיתות י׳ עד י״ב המצטיינים במקצועות הריאליים ובאנגלית, ובעלי רקע בסיסי בתכנות. עם בקשת ההרשמה, יש לצרף צילום של גיליון הציונים האחרון."
    },
    {
        question: "מהו משך התוכנית?",
        answare: "התוכנית כוללת שבעה מפגשי אונליין המתקיימים אחת לשבוע ב- Zoom, כאשר כל מפגש מורכב משיעור כיתתי (שעתיים) וסדנת תכנות (שעה). בנוסף לאלו, יתקיים מפגש אחד פיזי במשרד הייטק שאורכו ארבע שעות. העבודה על הפרוייקט האישי תתבצע מחוץ לזמן המפגשים."
    },
    {
        question: "מהי עלות המסלול?",
        answare: "עלות המסלול לתלמיד הינה 8,250 ש״ח לפני מע״מ. ניתן לבצע את התשלום ע״י כרטיס אשראי דרך אתר זה. יש להדגיש כי התשלום יבוצע בפועל אם וכאשר תאושר קבלתו של התלמיד למסלול על סמך גיליון ציוניו האחרון, אותו תתבקשו לשלוח אלינו לאחר ההרשמה."
    }
]

const Wrapper = styled.div`

`;

const InfoBlockWrapper = styled.div`
    display: flex;
`;

const Question = styled.div`
    font-size: ${fontSize.fontSize32};
    color: ${colors.text};
    width: 150px;
    flex-shrink: 0;
    flex-grow: 0;
`;

const Answare = styled.div`
    font-size: ${fontSize.fontSize21};
    font-weight: 500;
`;

const SpacerRigid = styled(Spacer)`
    flex-shrink: 0;
`;

const Inner = styled(Centered)`
    max-width: ${pageWidth.maxWidth2XL};
`;

const InfoBlock = ({question, answare}) => {
    return (
        <InfoBlockWrapper>
            <Question>
                {question}
            </Question>
            <SpacerRigid width={spacing.spacing12}/>
            <Answare>
                {answare}
            </Answare>
        </InfoBlockWrapper>
    )
}

const Info = () => {
    return (
        <Strip>
            <Page>
                <Inner>
                    {info.map((item,index) => {
                        return (
                            <React.Fragment key={index}>
                                <InfoBlock question={item.question} answare={item.answare}/>
                                <Spacer height={spacing.spacing12}/>
                            </React.Fragment>
                        )
                    })}
                </Inner>
            </Page>
        </Strip>
    )
}

export default Info;