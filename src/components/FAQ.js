import React, { useState } from 'react'
import styled from "styled-components/macro"

import Page from '../common/components/Page';
import FeaturesPanel from '../common/components/FeaturePanel';
import { colors, fontSize, spacing, device } from '../common/style';
import Strip from '../common/components/Strip';
import Accordion from '../common/components/Accordion';
import Spacer from '../common/components/Spacer';

const faqs = [
    {
        categoryTitle: 'הרשמה',
        faqs: [
            {
                question: 'מהם תנאי הקבלה לתוכנית?',
                answare: 'התוכנית מיועדת לתלמידי תיכון הלומדים בכיתות י׳ עד י״ב אשר מצטיינים בלימודיהם. מותאמותו של תלמיד לתוכנית תקבע על ידי צוות התוכנית ותשקל באופן פרטני על סמך גיליון הציונים הרשמי האחרון של התלמיד.'
            },
            {
                question: 'כיצד עובד תהליך ההרשמה?',
                answare: 'תהליך ההרשמה מורכב משני שלבים: (א) הגשת בקשה להרשמה: התהליך מתחיל בהגשת בקשה להרשמה דרך אתר זה. במהלך הבקשה להרשמה, מגיש הבקשה יתבקש לצרף את גיליון הציונים האחרון של התלמיד. שליחת בקשה להרשמה הינה בחינם ואינה מחייבת בשום אופן. כעבור מספר ימים מרגע שליחת הבקשה, יקבל מגיש הבקשה תשובה רשמית בדוא״ל מצד צוות התוכנית בדבר קבלתו של התלמיד לתוכנית. (ב) הרשמה: במידה והתשובה שהתקבלה בדבר קבלתו של התלמיד הינה חיובית, יופנה מגיש הבקשה לקישור מאובטח דרכו יוכל להשלים את הרשמת התלמיד לתוכנית ולבצע את התשלום עבור התוכנית ע״י כרטיס אשראי.'
            },
            {
                question: 'מתי התוכנית מתחילה?',
                answare: 'התוכנית נפתחת במועדים שונים במהלך השנה. במהלך הרשמת התלמיד, יוכל מבצע ההרשמה לבחור את תאריך התוכנית המתאים לו מבין האפשרויות המוצעות.'
            },
            {
                question: 'אם נרשמתי והתחרטתי?',
                answare: 'ניתן לבטל את ההרשמה ולקבל החזר כספי מלא במהלך 14 הימים שלאחר תאריך ההרשמה, ולא יאוחר מיום תחילת התוכנית. ההחזר יבוצע מול אמצעי התשלום שאיתו בוצעה העסקה בלבד. מעבר לכך, לא ינתנו החזרים כספיים.'
            }
        ]
    },
    {
        categoryTitle: 'תשלום',
        faqs: [
            {
                question: 'מהי עלות התוכנית?',
                answare: 'עלות התוכנית הינה 8,250 ש״ח לתלמיד. המחיר אינו כולל מע״מ.'
            },
            {
                question: 'כיצד ניתן לשלם?',
                answare: 'התשלום ניתן לביצוע אך ורק באמצעות הקישור המאובטח שישלח אליכם בעת ביצוע ההרשמה. התשלום מתאפשר באמצעות כרטיס אשראי בלבד.'
            },
            {
                question: 'האם התשלום ניתן לפריסה לתשלומים?',
                answare: 'כן, התשלום ניתן לפריסה של עד שישה תשלומים.'
            },
            {
                question: 'האם ינתן החזר כספי במקרה של ביטול או חוסר יכולת להשתתף בתוכנית?',
                answare: 'ניתן לבטל את ההרשמה ולקבל החזר כספי מלא במהלך 14 הימים שלאחר תאריך ההרשמה, ולא יאוחר מיום תחילת התוכנית. ההחזר יבוצע מול אמצעי התשלום שאיתו בוצעה העסקה בלבד. מעבר לכך, לא ינתנו החזרים כספיים.'
            }
        ]
    },
    {
        categoryTitle: 'מהלך התוכנית',
        faqs: [
            {
                question: 'מה עושים בתוכנית?',
                answare: 
                <span>
                    <ul>
                        <li>
                            <b>מפגשים מקוונים: </b> התוכנית תכיל שבעה מפגשים מקוונים (דרך ה- Zoom) באורך 3 שעות כל אחד. בכל מפגש, השעתיים הראשונות יוקדשו לשיעור כיתתי עיוני במהלכו ילמדו התלמידים נושא חדש, ישאלו שאלות וישתתפו בדיון בנושאים השונים. מיד לאחר כל שיעור כיתתי תתקיים סדנת תכנות מקוונת באורך שעה, שבמהלכה יבצעו התלמידים מטלת תכנות המשקפת את החומר הנלמד בשיעור הצמוד לה. הסדנה תאפשר לתלמידים ליישם ולתרגל את הרעיונות שאותם הם למדו בסביבת פיתוח אמיתית. 
                        </li>
                        <br/>
                        <li>
                            <b>הפרוייקט האישי:</b> במהלך התוכנית יתבקשו התלמידים להקדיש זמן מחוץ למפגשים לעבודה על הפרוייקט האישי. הפרוייקט האישי יבנה בהדרגה בהתאם לחומר הנלמד בכל שיעור, וישקף את התכנים שנלמדו בתוכנית, תוך שימת דגש מיוחד על שילובם של הרעיונות ליצירת מערכת תוכנה אחת.
                        </li>
                        <br/>
                        <li>
                            <b>מפגש ההאקתון: </b> במהלך התוכנית יפגשו התלמידים במשרדים מודרניים וחווייתים של חברת הייטק מובילה, ובמהלכו יכירו אישית זה את זה, יעבדו במשותף על הפרוייקט האישי תוך קבלת הכוונה מהמנחה, ויתנסו בחווית עבודה צוותית בחללי עבודה הטכנולוגיים. מפגש ההאקתון יתקיים פעם אחת בלבד במיקום מרכזי אשר יקבע על ידי צוות הקורס בתאריך תחילת הקורס. ההשתתפות במפגש ההאקתון תהיה אפשרית גם באופן מקוון (דרך ה- Zoom) למעוניינים בכך. 
                        </li>

                    </ul>
                </span>
            }
        ]
    }
]

const Title = styled.div`
    text-align: center;
    font-size: ${fontSize.fontSize5};
    font-weight: 500;
    text-align: right;
    @media ${device.mobileL} {
        padding-right: ${spacing.spacingPaddingMobile};
        padding-left: ${spacing.spacingPaddingMobile};
    }
`;

const List = styled.div`
    display: flex;
    flex-direction: column;
    @media ${device.mobileL} {
        padding-right: ${spacing.spacingPaddingMobile};
        padding-left: ${spacing.spacingPaddingMobile};
    }
`;

const Category = styled.div`
    display: flex;
    flex-direction: column;   
`;

const CategoryTitle = styled.div`
    display: flex;
    flex-direction: column; 
    font-size: ${fontSize.fontSize4};
    font-weight: 700;  
`;

const CategoryContent = styled.div`
    display: flex;
    flex-direction: column;   
`;

const FAQWrapper = styled.div`
    display: flex;
    flex-direction: column; 
    border-bottom: 1px solid rgba(0,0,5,.1);
    padding: 20px 0px;  
`;

const Question = styled.div`
    display: flex;
    cursor: pointer;
    justify-content: space-between;
    font-size: ${fontSize.fontSize3};
`;

const Answare = styled.div`
    font-size: ${fontSize.fontSize2};
    margin-right: 27px;
`;

const QuestionIcon = styled.div`
    display: flex;
    img {
        width: 27px;
        margin-top: ${props => (props.isOpen ? "0px" : "5px")};
        align-self: center;
        rotate: ${props => (props.isOpen ? "180deg" : "0deg")};
        transition: all 600ms ease-out;
    }
`;

const QuestionContent = styled.div`
    font-size: ${fontSize.fontSize25};
    font-weight: 600;
`;

const FAQ = ({question, answare}) => {

    const [isOpen, setIsOpen] = useState(false)

    return (
        <FAQWrapper>
            <Question onClick={() => setIsOpen(!isOpen)}>
                <QuestionContent>
                    <span>{question}</span>
                </QuestionContent>
                <QuestionIcon isOpen={isOpen}>
                    <img src="./assets/arrowdown.svg"/>
                </QuestionIcon>
            </Question>
            <Answare>
                <Accordion open={isOpen} contentHeight={"1700px"}>
                    <Spacer height={spacing.spacing6}/>
                    {answare}
                </Accordion>
            </Answare>
        </FAQWrapper>
    )

}

const FAQs = () => {
    return (
        <Strip id="faqs" backgroundColor={colors.lightGrey}>
            <Page nerrow>
                <Title>
                    שאלות נוספות?
                </Title>
                <Spacer height={spacing.spacing32}/>
                <List>
                    {faqs.map((category, index) => {
                        return (
                            <Category>
                                <CategoryTitle>
                                    {category.categoryTitle}
                                </CategoryTitle>
                                <Spacer height={spacing.spacing8}/>
                                <CategoryContent>
                                    {category.faqs.map((faq, index) => {
                                        return (
                                            <>
                                                <FAQ question={faq.question} answare={faq.answare}/>
                                            </>
                                        )
                                    })}
                                </CategoryContent>
                                {(index < faqs.length - 1) && (<Spacer height={spacing.spacing20}/>)}
                            </Category>
                        )
                    })}
                </List>
            </Page>
        </Strip>
    )
}

export default FAQs;