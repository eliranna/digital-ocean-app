import React from 'react'
import styled from "styled-components/macro"
import { fontSize, pageWidth, spacing, colors } from '../common/style';

import Spacer from '../common/components/Spacer';
import Page from '../common/components/Page';
import Centered from '../common/components/Centered';
import Strip from '../common/components/Strip';

const caption = {
    TITLE: "איך לומדים?",
    SUBTITLE: "תוכנית הכנה ליחידות הסייבר ולתעשיית ההייטק עבור תלמידי תיכון מצטיינים",
    DESCRIPTION: "שביטים הינה תוכנית העשרה המיועדת לתלמידי תיכון מצטיינים אשר מעוניינים להעמיק את ידיעותיהם ולפתח את כישוריהם במדעי המחשב ובפיתוח תוכנה, לצורך השתלבותם העתידית במערך הסייבר הצבאי, בתעשיית ההייטק ובאקדמיה.",
    VISION: "ההשתתפות בתוכנית תחשוף את התלמידים אל עקרונות עולם התוכנה המודרני, תעודד את יצר סקרנותם כלפי התחום, תעניק להם כלים ראשוניים להמשך למידה עצמאית או אקדמאית, ותפתח את יכולתם להתנהל כאנשי צוות בסביבה טכנולוגית.",
    LESSONS_TITLE: "שיעורים כיתתיים",
    LESSONS_ABOUT: "התוכנית מורכבת מסדרת מפגשים מקוונים (דרך ה- Zoom) באורך שעתיים כל אחד. במהלכם, ילמדו התלמידים חומר חדש, ישאלו שאלות ישתתפו בדיון בנושאים השונים.",
    WORKSHOP_TITLE: "סדנת תכנות",
    WORKSHOP_ABOUT: "מיד לאחר כל שיעור כיתתי תתקיים סדנת תכנות מקוונת (דרך ה- Zoom) באורך שעה, שבמהלכה יבצעו התלמידים מטלת תכנות המשקפת את החומר הנלמד בשיעור הצמוד לה. הסדנה תאפשר לתלמידים ליישם ולתרגל את הרעיונות שאותם הם למדו בסביבת פיתוח אמיתית, ותכין אותם לקראת המשך העבודה על הפרוייקט האישי.",
    HACKATHON_TITLE: "מפגש האקתון",
    HACKATHON_ABOUT: "הסטודנטים יפגשו במשרדים מודרניים וחווייתים של חברת הייטק מובילה, ובמהלכו יכירו אישית זה את זה, יעבדו במשותף על הפרוייקט האישי תוך קבלת הכוונה מהמנחה, ויתנסו בחווית עבודה צוותית בחללי עבודה הטכנולוגיים.",
    PROJECT_TITLE: "פרוייקט אישי",
    PROJECT_ABOUT: "במהלך התוכנית ידרשו התלמידים להקדיש זמן מחוץ למפגשים לעבודה על הפרוייקט האישי. הפרוייקט האישי יבנה בהדרגה בהתאם לחומר הנלמד בכל שיעור, וישקף את התכנים שנלמדו בתוכנית, תוך שימת דגש מיוחד על שילובם של הרעיונות ליצירת מערכת תוכנה אחת."
}

const Wrapper = styled.div`
    width: 100%:
    display: flex;
    justify-content: center; 
    flex-direction: column;
    background-color: ${colors.lightGrey};
`;

const Content = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

const Photo = styled.div`
    width: 46.44%;
    flex-shrink: 0;
    height: 800px;
    display: flex;
    flex-direction: column;
    background-image: url("./assets/company.jpg");
    background-size: cover;
    background-repeat: no-repeat;
`;

const Body = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
`;

const Info = styled.div`
    right: 0;
    left: 0; 
    margin-left: auto;
    margin-right: auto;
`;

const Title = styled.div`
    font-size: ${fontSize.fontSize32};
    font-weight: 500;
`;

const Description = styled.div`
    font-size: ${fontSize.fontSize3};
    font-weight: 500;
    max-width: 500px;
`;

const Quote = styled.div`
    font-size: ${fontSize.fontSize3};
    font-weight: 600;
    border-right: 9px solid ${colors.accent};
    max-width: 500px;
    color: ${colors.accent};
    padding-right: ${spacing.spacing6};
    max-width: ${pageWidth.maxWidthLG};
`;

const Inner = styled.div`
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
`;

const Image = styled.div`
    width: 641.3px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex-shrink: 0;
    img {
        width: 100%;
        height: auto;
    }
`;

const Pane = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
`;

const DescriptionBlock = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
`;

const DescriptionTitle = styled.div`
    font-size: ${fontSize.fontSize25};
    font-weight: 500;
`;

const DescriptionContent = styled.div`
    font-size: ${fontSize.fontSize21};
    font-weight: 500;
`;

const SpacerRigid = styled(Spacer)`
    flex-shrink: 0;
`;


const Program = () => {
    return (
        <>
        <Strip backgroundColor={colors.lightGrey}>
            <Page wide>
                <Inner>
                    <Content>
                        <Pane>
                            <Title>
                                {caption.TITLE}
                            </Title>
                            <Spacer height={spacing.spacing16}/>
                            <DescriptionBlock>
                                <DescriptionTitle>
                                    {caption.LESSONS_TITLE}
                                </DescriptionTitle>
                                <Spacer height={spacing.spacing4}/>
                                <DescriptionContent>
                                    {caption.LESSONS_ABOUT}
                                </DescriptionContent>
                            </DescriptionBlock>
                            <Spacer height={spacing.spacing16}/>
                            <DescriptionBlock>
                                <DescriptionTitle>
                                    {caption.WORKSHOP_TITLE}
                                </DescriptionTitle>
                                <Spacer height={spacing.spacing4}/>
                                <DescriptionContent>
                                    {caption.WORKSHOP_ABOUT}
                                </DescriptionContent>
                            </DescriptionBlock>
                        </Pane>
                    </Content>
                    <SpacerRigid width={spacing.spacing24}/>
                    <Image>
                        <img src='/assets/student.jpg'/>
                    </Image>
                </Inner>
                <Spacer height={spacing.spacing32}/>
                <Inner>
                    <Image>
                        <img src='/assets/wework.jpg'/>
                    </Image>
                    <SpacerRigid width={spacing.spacing32}/>
                    <Content>
                        <Pane>
                            <DescriptionBlock>
                                <DescriptionTitle>
                                    {caption.HACKATHON_TITLE}
                                </DescriptionTitle>
                                <Spacer height={spacing.spacing4}/>
                                <DescriptionContent>
                                    {caption.HACKATHON_ABOUT}
                                </DescriptionContent>
                            </DescriptionBlock>
                            <Spacer height={spacing.spacing16}/>
                            <DescriptionBlock>
                                <DescriptionTitle>
                                    {caption.PROJECT_TITLE}
                                </DescriptionTitle>
                                <Spacer height={spacing.spacing4}/>
                                <DescriptionContent>
                                    {caption.PROJECT_ABOUT}
                                </DescriptionContent>
                            </DescriptionBlock>
                        </Pane>
                    </Content>
                </Inner>
            </Page>
        </Strip>
    </>       
    )
}

export default Program;