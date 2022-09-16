import React, {useState} from 'react'
import styled from "styled-components/macro"

import { colors, fontSize, pageWidth, spacing } from '../common/style';

import Spacer from '../common/components/Spacer'
import Page from '../common/components/Page'
import Centered from '../common/components/Centered';
import Button from '../common/components/Button';
import RegistrationForm from './RegistrationForm';
import Strip from '../common/components/Strip';

const TITLE = 'הרשמה לתוכנית'
const SUBTITLE = 'להרשמה, אנא בחר את הקבוצה אליה תרצה להצטרף:'

const courses = [
    {
        id: 1,
        title: "אוקטובר — נובמבר",
        description: "המפגש הראשון יתקיים ביום חמישי, 03 לאוקטובר 2022",
        freeSpots: 0
    },
    {
        id: 2,
        title: "דצמבר — ינואר",
        description: "המפגש הראשון יתקיים ביום חמישי, 03 לדצמבר 2022",
        freeSpots: 2
    },
    {
        id: 3,
        title: "פברואר — מרץ",
        description: "המפגש הראשון יתקיים ביום חמישי, 03 לפברואר 2023",
        freeSpots: 5
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

const CoursesSelectionPanel = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
`;

const CourseOptionWrapper = styled.div`
    border: ${props => (props.isSelected ? "2px" : "2px")} solid ${props => (props.isSelected ? colors.accent : colors.text)};
    background-color: ${props => (props.isSelected ? colors.accent : 'transparant')};
    color: ${props => (props.isSelected ? colors.textOnAccent : colors.text)};
    border-radius: 6px;
    padding: ${spacing.spacing5};
    cursor: ${props => (props.fade ? "default" : "pointer")};
    pointer-events: ${props => (props.fade ? "none" : "default")};
    flex-shrink: 0;
    width: 200px;
    opacity: ${props => (props.fade ? "0.5" : "1")};
    transition: all 500ms; 
    :hover {
        border-color: ${colors.accent};
    }
`;

const CourseOptionTitle = styled.div`
    text-align: center;
    font-size: ${fontSize.fontSize2};
    font-weight: 600;
    text-decoration: ${props => (props.crossed ? "line-through" : "none")};
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

const RegistrationPanel = styled.div`

`

const CourseOptionSpotsLeft = styled.div`
    font-weight: 700;
    text-align: center;
`

const CourseOption = ({title, description, isSelected, freeSpots, onClick}) => {

    const freeSpotCaption = (freeSpots) => {
        return `נותרו ${freeSpots} מקומות`
    }

    return (
        <CourseOptionWrapper isSelected={isSelected} onClick={onClick} fade={freeSpots === 0}>
            <CourseOptionTitle crossed={freeSpots === 0}>
                {title}
            </CourseOptionTitle>
            <Spacer height={spacing.spacing6}/>
            <CourseOptionDescription>
                {description}
            </CourseOptionDescription>
            <Spacer height={spacing.spacing6}/>
            <CourseOptionSpotsLeft>
                {freeSpots == 0 ? "אזלו המקומות" : freeSpotCaption(freeSpots)}
            </CourseOptionSpotsLeft>
        </CourseOptionWrapper>
    )
}

const SpacerRigid = styled(Spacer)`
    flex-shrink: 0;
`;

const SuccessMessage = styled.div`
   
`;

const Register = () => {

    const [selectedCourseIndex, setSelectedCourseIndex] = useState(-1);
    const [requestSent, setRequestSent] = useState(false);

    const handleCourseSelection = (index) => {
        setSelectedCourseIndex(index)
    }

    return (
        <Strip backgroundColor={colors.lightGrey}>
            <Page nerrow>
                <Title>
                    {TITLE}
                </Title>
                <Spacer height={spacing.spacing12}/>
                {!requestSent && (
                    <>
                        <Subtitle>
                            {SUBTITLE}
                        </Subtitle>
                        <Spacer height={spacing.spacing16}/>
                        <CoursesSelectionPanel>
                            {courses.map((course, index) => {
                                return (
                                    <React.Fragment key={course.id}>
                                        <CourseOption title={course.title} description={course.description} freeSpots={course.freeSpots} onClick={() => handleCourseSelection(index)} isSelected={selectedCourseIndex === index}/>
                                        {(index != courses.length-1) && <SpacerRigid width={spacing.spacing8}/>}
                                    </React.Fragment>
                                )
                            })}
                        </CoursesSelectionPanel>
                        <Spacer height={spacing.spacing16}/>
                        {(selectedCourseIndex != -1) &&
                            <React.Fragment>
                                <Spacer height={spacing.spacing16}/>
                                <RegistrationForm onSuccess={() => setRequestSent(true)}/>
                            </React.Fragment>
                        }
                    </>
                )}
                {requestSent && (
                    <SuccessMessage>
                        הצלחנו
                    </SuccessMessage>
                )}                
            </Page>
        </Strip>
    )
}

export default Register;