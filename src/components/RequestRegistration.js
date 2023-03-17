import React, { useEffect, useState } from 'react'
import styled from "styled-components/macro"
import Button from '../common/components/Button';

import Page from '../common/components/Page';
import Spacer from '../common/components/Spacer';
import Strip from '../common/components/Strip';
import { colors, spacing, fontSize, device } from '../common/style';
import RegistrationForm from './RegistrationForm';
import SectionTitle from '../common/components/SectionTitle';

const caption = {
    TITLE: 'איך נרשמים?',
    DESC: 'להצטרפות לתוכנית, יש ראשית לבצע בדיקת התאמה באמצעות אתר זה. במהלך בדיקת ההתאמה תתבקשו לצרף את גיליון הציונים האחרון של התלמיד (ניתן להעלות קובץ בפורמט PDF או תמונה). שליחת הבקשה הינה בחינם ואינה מחייבת אתכם לרשום את התלמיד לתוכנית.',
    DESC2: 'בתוך מספר ימים תקבלו מאיתנו תשובה במייל לגבי התאמתו של התלמיד לתוכנית. במידה והתקבלה תשובה חיובית, תקבלו קישור מאובטח להרשמה לתוכנית ולביצוע התשלום כרטיס אשראי.'
}

const Description = styled.div`
    text-align: center;
    font-size: ${fontSize.fontSize3};
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

const DescriptionTitle = styled.div`
    display: flex;
    font-weight: 700;
    font-size: ${fontSize.fontSize3};
    text-align: center;
`;

const DescriptionContent = styled.div`
    text-align: center;
    font-size: ${fontSize.fontSize3};
`;

const RequestRegistration = ({onShowTerms}) => {
    return (
        <Strip id="google">
            <Page nerrow>
                <RegistrationForm onShowTerms={onShowTerms}/>
            </Page>
        </Strip>
    )
}

export default RequestRegistration;