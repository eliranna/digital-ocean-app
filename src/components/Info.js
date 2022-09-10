import React from 'react'
import styled from "styled-components/macro"

import Spacer from '../common/components/Spacer'
import Page from '../common/components/Page'
import { colors, fontSize, pageWidth, spacing, device } from '../common/style';
import Strip from '../common/components/Strip';
import Centered from '../common/components/Centered';
import MobileSpacer from '../common/components/MobileSpacer';
import NonMobileOnly from '../common/components/NonMobileOnly';

const info = [
    {
        question: "למי מיועדת התוכנית?",
        answare: "התוכנית מיועדת לתלמידי כיתות י׳ עד י״ב המצטיינים במקצועות הריאליים ובאנגלית, ובעלי רקע בסיסי בתכנות. עם בקשת ההרשמה, יש לצרף צילום של גיליון הציונים האחרון."
    },
    {
        question: "מהו משך התוכנית?",
        answare: "התוכנית נפרשת על פני שמונה שבועות, כאשר בכל שבוע יתקיים מפגש כיתתי (מקוון) שמשכו שעתיים ומיד אחריו תתקיים סדנת תכנות שמשכה כשעה. בין המפגשים יעבדו התלמידים זה עם זה על הפרוייקט האישי שלהם. בנוסף, אחד מן המפגשים יהיה מפגש ההאקתון אשר יתקיים במשרדים וימשך כארבע שעות."
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
    @media ${device.mobileL} {
        flex-direction: column;
        padding-left: ${spacing.spacing12};
        padding-right: ${spacing.spacing12};
    }
`;

const Question = styled.div`
    font-size: ${fontSize.fontSize5};
    color: ${colors.text};
    width: 150px;
    flex-shrink: 0;
    flex-grow: 0;
    @media ${device.mobileL} {
        text-align: right;
        width: 100%;
    }
`;

const Answare = styled.div`
    font-size: ${fontSize.fontSize3};
    font-weight: 500;
    @media ${device.mobileL} {
        text-align: right;
        width: 100%;
    }
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
            <MobileSpacer height={spacing.spacing12} />
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
                                {(index < info.length - 1) && (<Spacer height={spacing.spacing24}/>)}
                            </React.Fragment>
                        )
                    })}
                </Inner>
            </Page>
        </Strip>
    )
}

export default Info;