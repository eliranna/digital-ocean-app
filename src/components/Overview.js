import React from 'react'
import styled from "styled-components/macro"
import { fontSize, pageWidth, spacing, colors, device } from '../common/style';

import Spacer from '../common/components/Spacer';
import ImageStrip from '../common/components/ImageStrip';
import Page from '../common/components/Page';
import Strip from '../common/components/Strip';
import MobileSpacer from '../common/components/MobileSpacer';

const caption = {
    TITLE: "מה זה שביטים?",
    SUBTITLE: "תוכנית הכנה ליחידות הסייבר ולתעשיית ההייטק עבור תלמידי תיכון מצטיינים",
    DESCRIPTION: "שביטים הינה תוכנית העשרה המיועדת לתלמידי תיכון מצטיינים אשר מעוניינים להעמיק את ידיעותיהם ולפתח את כישוריהם במדעי המחשב ובפיתוח תוכנה, לצורך השתלבותם העתידית במערך הסייבר הצבאי, בתעשיית ההייטק ובאקדמיה.",
    VISION: "ההשתתפות בתוכנית תחשוף את התלמידים אל עקרונות עולם התוכנה המודרני, תעודד את יצר סקרנותם כלפי התחום, תעניק להם כלים ראשוניים להמשך למידה עצמאית או אקדמאית, ותפתח את יכולתם להתנהל כאנשי צוות בסביבה טכנולוגית."
}

const Wrapper = styled.div`

`;

const Content = styled.div`
    width: 500px;
    display: flex;
    justify-content: center;
    flex-direction: row;
    @media ${device.mobileL} {
        width: 100%;
        flex-direction: column;
        padding-left: ${spacing.spacingPaddingMobile};
        padding-right: ${spacing.spacingPaddingMobile};
    }
`;

const Title = styled.div`
    font-size: ${fontSize.fontSize32};
    font-weight: 500;
`;

const Description = styled.div`
    font-size: ${fontSize.fontSize21};
    font-weight: 500;
    max-width: 500px;
`;

const Quote = styled.div`
    font-size: ${fontSize.fontSize21};
    font-weight: 500;
    border-right: 9px solid ${colors.accent};
    max-width: 500px;
    color: ${colors.accent};
    padding-right: ${spacing.spacing6};
    max-width: ${pageWidth.maxWidthLG};
`;

const Image = styled.div`
    width: 626px;
    display: flex;
    justify-content: center;
    flex-shrink: 0;
    img {
        width: 100%;
        height: auto;
    }
    @media ${device.mobileL} {
        width: 100%;
    }
`;

const Pane = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
`;

const Inner = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    @media ${device.mobileL} {
        flex-direction: column-reverse;
    }
`;


const Overview = () => {
    return (
        <Strip>
            <Page wide>
                <Inner>
                    <Content>
                        <Pane>
                            <Title>
                                {caption.TITLE}
                            </Title>
                            <Spacer height={spacing.spacing16}/>
                            <Description>
                                {caption.DESCRIPTION}
                            </Description>
                            <Spacer height={spacing.spacing16}/>
                            <Quote>
                                {caption.VISION}
                            </Quote>
                        </Pane>
                    </Content>
                    <Spacer width={spacing.spacing32}/>
                    <MobileSpacer height={spacing.spacing24}/>
                    <Image>
                        <img src='/assets/company.jpg'/>
                    </Image>
                </Inner>
            </Page>
        </Strip>
    )
}

export default Overview;