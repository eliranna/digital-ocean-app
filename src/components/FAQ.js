import React, { useState } from 'react'
import styled from "styled-components/macro"

import Page from '../common/components/Page';
import FeaturesPanel from '../common/components/FeaturePanel';
import { colors, fontSize, spacing } from '../common/style';
import Strip from '../common/components/Strip';
import Accordion from '../common/components/Accordion';
import Spacer from '../common/components/Spacer';

const faqs = [
    {
        categoryTitle: 'הרשמה',
        faqs: [
            {
                question: 'מהם תנאי הקבלה לתוכנית?',
                answare: 'התוכנית נלמדת בקבוצות של עד שמונה תלמידים תוך שימת דגש על דינמיקה צוותית בסביבה טכנולוגית.'
            },
            {
                question: 'מהו תהליך ההרשמה?',
                answare: 'התוכנית נלמדת בקבוצות של עד שמונה תלמידים תוך שימת דגש על דינמיקה צוותית בסביבה טכנולוגית.'
            }
        ]
    },
    {
        categoryTitle: 'תשלום',
        faqs: [
            {
                question: 'האם ניתן לבטל את ההשתתפות בתוכנית ולקבל החזר כספי?',
                answare: 'התוכנית נלמדת בקבוצות של עד שמונה תלמידים תוך שימת דגש על דינמיקה צוותית בסביבה טכנולוגית.'
            },
            {
                question: 'מהו תהליך ההרשמה?',
                answare: 'התוכנית נלמדת בקבוצות של עד שמונה תלמידים תוך שימת דגש על דינמיקה צוותית בסביבה טכנולוגית.'
            }
        ]
    }
]

const Title = styled.div`
    text-align: center;
    font-size: ${fontSize.fontSize32};
    font-weight: 500;
    text-align: right;
`;

const List = styled.div`
    display: flex;
    flex-direction: column;
`;

const Category = styled.div`
    display: flex;
    flex-direction: column;   
`;

const CategoryTitle = styled.div`
    display: flex;
    flex-direction: column; 
    font-size: ${fontSize.fontSize25};
    font-weight: 700;  
`;

const CategoryContent = styled.div`
    display: flex;
    flex-direction: column;   
`;

const FAQWrapper = styled.div`
    display: flex;
    flex-direction: column;   
`;

const Question = styled.div`
    display: flex;
    cursor: pointer;
`;

const Answare = styled.div`
    font-size: ${fontSize.fontSize21};
    margin-right: 27px;
`;

const QuestionIcon = styled.div`
    display: flex;
    img {
        width: 27px;
        margin-top: ${props => (props.isOpen ? "0px" : "5px")};
        
        align-self: center;
        rotate: ${props => (props.isOpen ? "180deg" : "0deg")};
        transition: all 400ms;
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
                <QuestionIcon isOpen={isOpen}>
                    <img src="./assets/arrowdown.svg"/>
                </QuestionIcon>
                <QuestionContent>
                    <span>{question}</span>
                </QuestionContent>
            </Question>
            <Answare>
                <Accordion open={isOpen} contentHeight={"300px"}>
                    <Spacer height={spacing.spacing6}/>
                    {answare}
                </Accordion>
            </Answare>
        </FAQWrapper>
    )

}

const FAQs = () => {
    return (
        <Strip backgroundColor={colors.lightGrey}>
            <Page>
                <Title>
                    שאלות נפוצות
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
                                                {(index < faqs.length - 1) && (<Spacer height={spacing.spacing6}/>)}
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