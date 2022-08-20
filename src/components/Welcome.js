import React from 'react'
import styled from "styled-components/macro"
import { fontSize, pageWidth, spacing, colors } from '../common/style';

import Spacer from '../common/components/Spacer';
import Page from '../common/components/Page';
import Centered from '../common/components/Centered';

const caption = {
    TITLE: "שביטים — מסלול הכנה ליחידות הסייבר ולתעשיית ההייטק",
    SUBTITLE: "שיעורים בהנדסת תוכנה מודרנית עבור תלמידי תיכון מצטיינים",
    DESCRIPTION: "שביטים הינו מסלול העשרה המיועד לתלמידי תיכון מצטיינים אשר מעוניינים להעמיק את ידיעותיהם ולפתח את כישוריהם במדעי המחשב ובפיתוח תוכנה, לצורך השתלבותם העתידית במערך הסייבר הצבאי, בתעשיית ההייטק ובאקדמיה."
}

const Wrapper = styled.div`
    width: 100%:
    display: flex;
    justify-content: center; 
    flex-direction: column;
`;

const Header = styled.div`
    width: 100%;
`;

const Title = styled.div`
    text-align: center;
    font-size: ${fontSize.fontSize7};
    color: ${colors.accent};
    font-weight: 700; 
`;

const Subtitle = styled.div`
    text-align: center;
    font-size: ${fontSize.fontSize3};
    font-weight: 500;
`;

const Description = styled(Centered)`
    text-align: center;
    font-size: ${fontSize.fontSize3};
    max-width: ${pageWidth.maxWidthMD};
    width: 100%;
    font-weight: 500;
`;

const WelcomeSection = () => {
    return (
        <Wrapper>
            <Page nerrow>
                <Header>
                    <Title>
                        {caption.TITLE}
                    </Title>
                    <Spacer height={spacing.spacing6}/>
                    <Subtitle>
                        {caption.SUBTITLE}
                    </Subtitle>
                </Header>
                <Spacer height={spacing.spacing16}/>
                <Description>
                    {caption.DESCRIPTION}
                </Description>
            </Page>
        </Wrapper>
    )
}

export default WelcomeSection;