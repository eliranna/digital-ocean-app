import React from 'react'
import styled from "styled-components/macro"

import { colors, fontSize, spacing, device } from '../common/style';
import Spacer from '../common/components/Spacer'
import Page from '../common/components/Page';
import Centered from '../common/components/Centered';
import Strip from '../common/components/Strip';

const ABOUT = `
    
בוגר הפקולטה למדעי המחשב בטכניון, ומשמש מזה כעשור כארכיטקט תוכנה וכמוביל טכנולוגי בחברות תוכנה בארץ ובחו״ל, כדוגמת Intel, Cybereason, Cyberbit, Axonius ועוד. 

במהלך שנות שהותו בניו-יורק ובאמסטרדם, תפקד כמוביל טכנולוגי עבור מיזם רחב היקף בראשות משרד הבריאות ההולנדי והוזמן כמרצה לכנסי תוכנה מרכזיים ברחבי אירופה.
בימים אלו, משמש בין היתר כיועץ טכנולוגי מטעם הרשות לחדשנות.
`

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const AvatarPanel = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex-grow: 0;
`;

const Avatar = styled.img`
    border-radius: 50%;
    width: 80px;
    height: auto;
    align-self: center;
`;

const HostName = styled.div`
    text-align: center;
    font-size: ${fontSize.fontSize3};
    color: ${colors.text};
    font-weight: 700;
`;

const HostRole = styled.div`
    text-align: center;
    font-size: ${fontSize.fontSize2};
    color: ${colors.text};
    font-weight: 500;
`;

const HostDescription = styled(Centered)`
    text-align: center;
    font-size: ${fontSize.fontSize2};
    color: ${colors.text};
    max-width: 450px;
    font-weight: 600;
    @media ${device.mobileL} {
        padding-left: ${spacing.spacing12};
        padding-right: ${spacing.spacing12};
    }
    
`;

const Host = () => {
    return (
        <Strip backgroundColor={colors.lightGrey}>
            <Page nerrow>
                <AvatarPanel>
                    <Avatar src="./assets/host.jpg"/>
                </AvatarPanel>
                <Spacer height={spacing.spacing8}/>
                <HostName>
                    אלירן מלר נתן
                </HostName>
                <Spacer height={spacing.spacing1}/>
                <HostRole>
                    יוצר ומנחה התוכנית
                </HostRole>
                <Spacer height={spacing.spacing12}/>
                <HostDescription>
                    {ABOUT}
                </HostDescription>
            </Page>
        </Strip>
    )
}

export default Host;