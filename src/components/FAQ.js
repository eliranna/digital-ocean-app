import React, { useState } from 'react'
import styled from "styled-components/macro"

import Page from '../common/components/Page';
import FeaturesPanel from '../common/components/FeaturePanel';
import { colors, fontSize, spacing, device } from '../common/style';
import Strip from '../common/components/Strip';
import Accordion from '../common/components/Accordion';
import Spacer from '../common/components/Spacer';
import ReactMarkdown from 'react-markdown'

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
        categoryTitle: 'ציוד והכנות',
        faqs: [
            {
                question: 'איזה ציוד יש להכין לקראת התוכנית?',
                answare: 
                    `
יש לוודא כי: 

- לתלמיד יש גישה אל **כתובת דואר-אלקטרוני** אשר תשמש אותו במהלך התוכנית.

- התלמיד מצוייד במחשב מודרני, נייח או נייד, המחובר אל **רשת אינטרנט** יציבה. 

- על המחשב של התלמיד מותקנת התוכנה **[זום (Zoom)](https://zoom.us/)** אשר באמצעותה ישתתף התלמיד במפגשים המקוונים. 

- על המחשב מותקן דפדפן מודרני (כמו [Google Chrome](https://www.google.com/chrome/)) המאפשר גלישה לאתרים הבאים: 
    - [Replit](https://replit.com/) (עורך קוד מקוון)
    - [Github](https://github.com/) (פלטפורמת ניהול גרסאות קוד)
    - [אתר התוכנית שביטים](https://www.shavitim.com/) 

**שימו לב! תלמידים אשר מעוניינים להגיע באופן פיזי אל מפגש ההאקתון יתבקשו להגיע עם המחשבים האישיים שלהם. לפיכך, תלמידים שאין ברשותם מחשב נייד (לפטופ) לא יוכלו להצטרף למפגש באופן פיזי, ובמקום זאת, יוכלו להצטרף למפגש באופן מקוון בלבד.**
                    `
            }
        ]
    },
    {
        categoryTitle: 'מהלך התוכנית',
        faqs: [
            {
                question: 'מה עושים בתוכנית?',
                answare: 
                `
- **מפגשים מקוונים:** התוכנית תכיל שבעה מפגשים מקוונים (דרך ה- Zoom) באורך 3 שעות כל אחד. בכל מפגש, השעתיים הראשונות יוקדשו לשיעור כיתתי עיוני במהלכו ילמדו התלמידים נושא חדש, ישאלו שאלות וישתתפו בדיון בנושאים השונים. מיד לאחר כל שיעור כיתתי תתקיים סדנת תכנות מקוונת באורך שעה, שבמהלכה יבצעו התלמידים מטלת תכנות המשקפת את החומר הנלמד בשיעור הצמוד לה. הסדנה תאפשר לתלמידים ליישם ולתרגל את הרעיונות שאותם הם למדו בסביבת פיתוח אמיתית.
- **הפרוייקט האישי:** במהלך התוכנית יתבקשו התלמידים להקדיש זמן מחוץ למפגשים לעבודה על הפרוייקט האישי. הפרוייקט האישי יבנה בהדרגה בהתאם לחומר הנלמד בכל שיעור, וישקף את התכנים שנלמדו בתוכנית, תוך שימת דגש מיוחד על שילובם של הרעיונות ליצירת מערכת תוכנה אחת.
- **מפגש ההאקתון:** במהלך התוכנית יפגשו התלמידים במשרדים מודרניים וחווייתים של חברת הייטק מובילה, ובמהלכו יכירו אישית זה את זה, יעבדו במשותף על הפרוייקט האישי תוך קבלת הכוונה מהמנחה, ויתנסו בחווית עבודה צוותית בחללי עבודה הטכנולוגיים. מפגש ההאקתון יתקיים פעם אחת בלבד במיקום מרכזי אשר יקבע על ידי צוות התוכנית בתאריך תחילת התוכנית. ההשתתפות במפגש ההאקתון תהיה אפשרית גם באופן מקוון (דרך ה- Zoom) למעוניינים בכך.
                
                `
            }
        ]
    },
    {
        categoryTitle: 'לאחר התוכנית',
        faqs: [
            {
                question: 'האם בסיום התוכנית נקבל תעודה?',
                answare: 
                `
**בהחלט**. סיום מוצלח של התוכנית יזכה את התלמיד בתעודה גמר רשמית של התוכנית. תעודת הגמר תשלח באופן דיגיטלי אל כתובת הדואר-האלקטרוני של התלמיד.                
                `
            },
            {
                question: 'מהו סיום מוצלח של התוכנית?',
                answare: 
                `
תלמיד אשר סיים בהצלחה את התוכנית הינו תלמיד שנכח בשיעורים ובתרגולים, פרט להעדרויות נקודתיות אשר דווחו מראש, ואשר הגיש בהצלחה את הפרוייקט האישי.                 
                `
            },
            {
                question: 'האם נקבל פידבק לגבי יכולתיו והשיגיו של התלמיד לאחר התוכנית?',
                answare: 
                `
וודאי. בסיום התוכנית תקבלו חוות דעת לגבי יכולתיו והשיגיו של התלמיד כפי שהן השתקפו במהלך התוכנית.                
                `
            },
            {
                question: 'האם ישנו מבחן גמר?',
                answare: 
                `
לא. התוכנית אינה כוללת מבחנים.             
                `
            },
            {
                question: 'האם השתתפות בתוכנית תבטיח את קבלתו של התלמיד ליחידה צבאית כלשהי, או למוסד אקדמי כלשהו או למשרה כלשהי?',
                answare: 
                `
לא. תוכניתנו אינה קשורה באופן ישיר לצה״ל, למוסד אקדמי כלשהו או לחברה מסחרית כזו או אחרת, וכמובן שאינה מבטיחה את קבלתו של התלמיד ליחידה צבאית כלשהי, או למוסד אקדמי כלשהו או למשרה כלשהי. עם זאת, השתתפות בתוכנית מהווה בסיס איתן להתפתחותו העתידית, המקצועית והאקדמית, של התלמיד בתחומים של מדעי המחשב והנדסת תוכנה.              
                `
            },
            {
                question: 'האם עצם השתתפותו של התלמיד בתוכנית או השיגיו בתוכנית ידווחו לגורם כלשהו?',
                answare: 
                `
**בהחלט לא**. אנו דוגלים בשמירה מוחלטת על פרטיותו של התלמיד. לפיכך, ההשתתתפות של התלמיד בתוכנית והשיגיו בתוכנית לעולם לא ידווחו על ידינו לאף גורם שלישי כזה או אחר, בין אם מדובר במערכת החינוך, צה״ל או מוסד אקדמי כזה או אחר. אנו מותירים בידכם את הבחירה לשתף או שלא לשתף את עצם ההשתתפות של התלמיד בתוכנית.
                `
            },
        ]
    },
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
    a {
        color: inherit;
    }
`;

const QuestionIcon = styled.div`
    display: flex;
    img {
        display: inline-block;
        width: 27px;
        margin-top: ${props => (props.isOpen ? "0px" : "5px")};
        align-self: center;
        transform: ${props => (props.isOpen ? "rotate(180deg)" : null)};
        transition: all 600ms ease-out;
    }
`;

const QuestionContent = styled.div`
    font-size: ${fontSize.fontSiz3};
    font-weight: 600;
`;

const AnyQuestionRemark = styled.div`
    font-size: ${fontSize.fontSize2};
    font-weight: 600;
    a {
        color: inherit;
    }
    @media ${device.mobileL} {
        padding-right: ${spacing.spacingPaddingMobile};
        padding-left: ${spacing.spacingPaddingMobile};
    }
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
                    <ReactMarkdown children={answare}/>
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
                <Spacer height={spacing.spacing32}/>
                <AnyQuestionRemark>
                    <span>
                        לא מצאת תשובה לשאלה שלך? צוות תוכנית שביטים זמין לסייע לך בדוא״ל: &nbsp;
                        <a href="mailto:info@shavitim.co.il">info@shavitim.co.il</a>
                    </span>
                </AnyQuestionRemark>
            </Page>
        </Strip>
    )
}

export default FAQs;