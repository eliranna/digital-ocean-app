import React, { useEffect, useState } from 'react'
import styled from "styled-components/macro"
import Button from '../common/components/Button';

import Page from '../common/components/Page';
import Spacer from '../common/components/Spacer';
import Strip from '../common/components/Strip';
import RegistrationScreen from '../components/RegistrationScreen';
import { colors, spacing, fontSize, device } from '../common/style';
import RegistrationForm from './RegistrationForm';

const caption = {
    TITLE: 'איך נרשמים?',
    DESC: 'להצטרפות לתוכנית, יש ראשית לשלוח בקשה להרשמה. במהלך שליחת הבקשה תתבקשו למלא פרטים אישיים ולצרף את גיליון הציונים האחרון של התלמיד (ניתן להעלות קובץ בפורמט PDF או תמונה). שליחת הבקשה הינה בחינם ואינה מחייבת אתכם לרשום את התלמיד לתוכנית.',
    DESC2: 'בתוך מספר ימים תקבלו מאיתנו תשובה במייל לגבי קבלתו של התלמיד לתוכנית. במידה וקיבלתם תשובה חיובית, תקבלו קישור מאובטח להרשמה לתוכנית ולביצוע התשלום כרטיס אשראי.'
}

const Wrapper = styled.div`
    width: 100%;
    background-color: ${colors.accent};
    color: ${colors.textOnAccent};
    padding: ${spacing.spacing16} 0px;
`;

const Title = styled.div`
    text-align: center;
    font-size: ${fontSize.fontSize32};
    font-weight: 500;
`;

const Description = styled.div`
    text-align: center;
    font-size: ${fontSize.fontSize21};
    font-weight: 500;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    max-width: 450px;
    align-self: center;
    right: 0;
    left: 0;
    margin-right: auto;
    margin-left: auto;
    @media ${device.mobileL} {
        padding-right: ${spacing.spacingPaddingMobile};
        padding-left: ${spacing.spacingPaddingMobile};
    }
`;

const RequestRegistrationButton = styled(Button)`
    border: none;
    background: ${colors.accent};
    color: ${colors.textOnAccent};
    height: 55px;
    max-width: 225px;
    width: 100%;
    font-size: ${fontSize.fontSize21};
    font-weight: 500;
    transition: all 400ms;
    :hover {
        opacity: 80%;
    }
`;

const RequestRegistrationButtonPanel = styled.div`
    display: flex;
    justify-content: center;
`;

const DescriptionTitle = styled.div`
    display: flex;
    font-weight: 700;
    text-align: center;
`;

const DescriptionContent = styled.div`
    text-align: center;
`;

const RequestRegistration = () => {
    return (
        <Strip>
            <Page nerrow>
                <Title>
                    {caption.TITLE}
                </Title>
                <Spacer height={spacing.spacing12}/>
                <Description>
                    {caption.DESC}
                </Description>
                <Spacer height={spacing.spacing16}/>
                <Description>
                    <DescriptionTitle>
                        ומה הלאה?
                    </DescriptionTitle>
                    <Spacer height={spacing.spacing3}/>
                    <DescriptionContent>
                        {caption.DESC2}
                    </DescriptionContent>
                </Description> 
                <Spacer height={spacing.spacing16}/>
                <RegistrationForm/>
            </Page>
        </Strip>
    )
}

export default RequestRegistration;