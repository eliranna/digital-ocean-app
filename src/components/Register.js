import React, {useState} from 'react'
import styled from "styled-components/macro"

import { colors, fontSize, pageWidth, spacing } from '../common/style';

import Spacer from '../common/components/Spacer'
import Page from '../common/components/Page'
import Centered from '../common/components/Centered';
import Button from '../common/components/Button';

const TITLE = 'הרשמה לתוכנית'
const SUBTITLE = 'להרשמה, אנא בחר את הקבוצה אליה תרצה להצטרף:'

const courses = [
    {
        id: 1,
        title: "אוקטובר - נובמבר",
        description: "המפגש הראשון יתקיים ביום חמישי, 03 לאוקטובר 2022",
        priceLabel: "₪8,250"
    },
    {
        id: 2,
        title: "דצמבר - ינואר",
        description: "המפגש הראשון יתקיים ביום חמישי, 03 לדצמבר 2022",
        priceLabel: "₪8,250"
    },
    {
        id: 3,
        title: "פברואר - מרץ",
        description: "המפגש הראשון יתקיים ביום חמישי, 03 לפברואר 2023",
        priceLabel: "₪8,250"
    }
]

const Wrapper = styled(Page)`
    background-color: ${colors.accent};
    color: ${colors.textOnAccent};
    padding: ${spacing.spacing16};
    border-radius: 6px;
`;

const Title = styled.div`
    font-size: ${fontSize.fontSize5};
    text-align: center;
`;

const Subtitle = styled.div`
    font-size: ${fontSize.fontSize2};
    font-weight: 400;
    text-align: center;
`;

const CoursesSelectionPanel = styled(Centered)`
    display: flex;
    flex-direction: column;
    max-width: 288px; 
`;

const CourseOptionWrapper = styled.div`
    border: ${props => (props.isSelected ? "4px" : "2px")} solid ${colors.textOnAccent};
    border-radius: 6px;
    padding: ${spacing.spacing3};
    cursor: pointer;
`;

const CourseOptionTitle = styled.div`
    text-align: center;
    font-size: ${fontSize.fontSize2};
    font-weight: 600;
`;

const CourseOptionDescription = styled.div`
    text-align: center;
`;

const PricePanel = styled.div`
    text-align: center;
`;

const PriceNote = styled.div`
    text-align: center;
    font-weight: 600;
`;

const Price = styled.div`
    text-align: center;
    font-size: ${fontSize.fontSize7};
    font-weight: 700;
`;

const Remarks = styled.div`
    text-align: center;
`;

const Remark = styled.div`
    text-align: center;
`;

const PaymentButtonPanel = styled.div`
    text-align: center;
`;

const PaymentButton = styled(Button)`
    border: 1px solid ${colors.background};
    background: transparent;
    color: ${colors.textOnAccent};
    font-size: ${fontSize.fontSize2};
    width: 100%;
    max-width: 150px;
    height: 50px;
`

const CourseOption = ({title, description, isSelected, onClick}) => {
    return (
        <CourseOptionWrapper isSelected={isSelected} onClick={onClick}>
            <CourseOptionTitle>
                {title}
            </CourseOptionTitle>
            <Spacer height={spacing.spacing6}/>
            <CourseOptionDescription>
                {description}
            </CourseOptionDescription>
        </CourseOptionWrapper>
    )
}

const Register = () => {

    const [selectedCourseIndex, setSelectedCourseIndex] = useState(-1);

    const handleCourseSelection = (index) => {
        setSelectedCourseIndex(index)
    }

    return (
        <Wrapper>
            <Page nerrow>
                <Title>
                    {TITLE}
                </Title>
                <Spacer height={spacing.spacing12}/>
                <Subtitle>
                    {SUBTITLE}
                </Subtitle>
                <Spacer height={spacing.spacing16}/>
                <CoursesSelectionPanel>
                    {courses.map((course, index) => {
                        return (
                            <React.Fragment key={course.id}>
                                <CourseOption title={course.title} description={course.description} onClick={() => handleCourseSelection(index)} isSelected={selectedCourseIndex === index}/>
                                <Spacer height={spacing.spacing8}/>
                            </React.Fragment>
                        )
                    })}
                </CoursesSelectionPanel>
                <Spacer height={spacing.spacing16}/>
                {(selectedCourseIndex != -1) && 
                    <PricePanel>
                        <PriceNote>
                            עלות התוכנית לתלמיד
                        </PriceNote>
                        <Price>
                            {courses[selectedCourseIndex].priceLabel}
                        </Price>
                        <Spacer height={spacing.spacing6}/>
                        <PaymentButtonPanel>
                            <PaymentButton>
                                לתשלום
                            </PaymentButton>
                        </PaymentButtonPanel>
                        <Spacer height={spacing.spacing16}/>
                        <Remarks>
                            <Remark>
                                *המחיר אינו כולל מע״מ
                            </Remark>
                            <Spacer height={spacing.spacing2}/>
                            <Remark>
                                **ניתן לפריסה של עד שישה תשלומים
                            </Remark>
                            <Spacer height={spacing.spacing2}/>
                            <Remark>
                                ***ניתן לביטול מלא בתוך 14 ימים או עד יום המפגש הראשון, המוקדם מבינהם 
                            </Remark>                                                
                        </Remarks>
                    </PricePanel>
                }
            </Page>
        </Wrapper>
    )
}

export default Register;