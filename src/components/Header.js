import React from 'react'
import styled from "styled-components/macro"
import { fontSize, pageWidth, spacing, colors, device } from '../common/style';
import { AnimationOnScroll } from 'react-animation-on-scroll';

import Spacer from '../common/components/Spacer';
import Page from '../common/components/Page';
import Centered from '../common/components/Centered';

const caption = {
    TITLE: "שביטים להייטק",
    SUBTITLE: "תוכנית הכנה ליחידות הסייבר ולתעשיית ההייטק עבור תלמידי תיכון מצטיינים",
    DESCRIPTION: "שביטים הינו מסלול העשרה המיועד לתלמידי תיכון מצטיינים אשר מעוניינים להעמיק את ידיעותיהם ולפתח את כישוריהם במדעי המחשב ובפיתוח תוכנה, לצורך השתלבותם העתידית במערך הסייבר הצבאי, בתעשיית ההייטק ובאקדמיה.",
    VISION: "ההשתתפות בתוכנית תחשוף את התלמידים אל עקרונות עולם התוכנה המודרני, תעודד את יצר סקרנותם כלפי התחום, תעניק להם כלים ראשוניים להמשך למידה עצמאית או אקדמאית, ותפתח את יכולתם להתנהל כאנשי צוות בסביבה טכנולוגית."
}

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center; 
    flex-direction: column;
`;

const TitlePanel = styled(Centered)`
    width: 100%;
    max-width: 600px;
`;

const Title = styled.div`
    text-align: center;
    font-size: ${fontSize.fontSize8};
    color: ${colors.accent};
    font-weight: 800;
    right: 0;
    left: 0;
    margin-left: auto;
    margin-right: auto;
    @media ${device.mobileL} {
        
    }
`;

const Subtitle = styled.div`
    text-align: center;
    font-size: ${fontSize.fontSize9};
    font-weight: 300;
    right: 0;
    left: 0;
    margin-left: auto;
    margin-right: auto;
    @media ${device.mobileL} {
        font-size: ${fontSize.fontSize9Mobile};
        max-width: 80%;
    }
`;

const Header = () => {
    return (
        <Wrapper>
            <Page nerrow>
                <TitlePanel>
                    <Title>
                        {caption.TITLE}
                    </Title>
                    <Spacer height={spacing.spacing6}/>
                    <Subtitle>
                        {caption.SUBTITLE}
                    </Subtitle>
                </TitlePanel>
            </Page>
        </Wrapper>
    )
}

export default Header;