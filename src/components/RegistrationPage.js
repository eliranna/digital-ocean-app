import React, {useState, useEffect} from 'react'
import { useSearchParams } from 'react-router-dom'
import styled from "styled-components/macro"
import { spacing, fontSize, colors, device, pageWidth } from '../common/style'

import axios from 'axios'
import api from '../api';

import Button from '../common/components/Button'
import InputBox from '../common/components/InputBox'
import Spacer from '../common/components/Spacer';
import RegistrationForm from './RegistrationForm';
import RequestRegistration from './RequestRegistration'
import SectionTitle from '../common/components/SectionTitle'
import Page from '../common/components/Page'
import Strip from '../common/components/Strip';
import MobileSpacer from '../common/components/MobileSpacer'
import TextArea from '../common/components/TextArea'
import Checkbox from '../common/components/Checkbox'

const SpacerRigid = styled(Spacer)`
    flex-shrink: 0;
`;


const Header = styled.div`
    font-size: ${fontSize.fontSize7};
    color: ${colors.accent};
    text-align: right;
    font-weight: 400;
`;

const StepWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

const StepTitle = styled.div`
    font-size: ${fontSize.fontSize3};
    text-align: right;
    font-weight: 600;
`;

const StepExplenation = styled.div`
    font-size: ${fontSize.fontSize2};
    text-align: right;
    font-weight: 400;
`;

const CoursesSelectionPanel = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
`;

const CourseOptionWrapper = styled.div`
    border: ${props => (props.isSelected ? "2px" : "2px")} solid ${props => (props.isSelected ? colors.accent : colors.text)};
    background-color: ${props => (props.isSelected ? colors.accent : 'transparant')};
    color: ${props => (props.isSelected ? colors.textOnAccent : colors.text)};
    border-radius: 6px;
    padding: ${spacing.spacing5};
    cursor: ${props => (props.fade ? "default" : "pointer")};
    pointer-events: ${props => (props.fade ? "none" : "default")};
    flex-shrink: 1;
    flex-grow: 0;
    width: 33%;
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

const CourseOptionSpotsLeft = styled.div`
    font-weight: 700;
    text-align: center;
`

const FormSection = styled.div`
    opacity: ${props => props.disabled ? '0.5' : '1'};
    pointer-events: ${props => props.blocked ? 'none' : 'all'};

`

const FormSectionTitle = styled.div``

const Title = styled.div`
    font-size: ${fontSize.fontSize3};
    text-align: center;
    font-weight: 600;
`

const SectionContent = styled.div``

const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    @media ${device.mobileL} {
        flex-direction: column;
    }
`
const Cell = styled.div`
    width: ${props => props.single ? "100%" : "300px"};
    @media ${device.mobileL} {
        width: 100%;
    }
`

const CellNote = styled.div`
    
`

const CheckboxCaption = styled.div`

`

const Link = styled.span`
    text-decoration: underline; 
    cursor: pointer;
    :hover {
        opacity: 80%;
    }
`

const FormTitle = styled.div`
    font-size: ${fontSize.fontSize5};
    text-align: center;
    font-weight: 600;
`

const Wrapper = styled.div`
    padding: ${spacing.spacing16};
    background-color: ${colors.lightGrey};
    max-width: ${pageWidth.maxWidth2XL};
`

const RegistrationButton = styled(Button)`
    border: none;
    background: ${colors.accent};
    color: ${colors.textOnAccent};
    height: 55px;
    width: 100%;
    font-size: ${fontSize.fontSize2};
    align-self: center;
    font-weight: 500;
    transition: all 400ms;
    align-text: center;
    :hover {
        opacity: 80%;
    }
`;

const PageBox = styled(Page)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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

const RegistrationPage = () => {

    const [params] = useSearchParams();
    const [selectedCourseIndex, setSelectedCourseIndex] = useState(-1);

    const [studentFirstName, setStudentFirstName] = useState(params.get('studentFirstName'));
    const [studentLastName, setStudentLastName] = useState(params.get('studentLastName'));
    const [studentEmail, setStudentEmail] = useState();
    
    const [parentFirstName, setParentFirstName] = useState();
    const [parentLastName, setParentLastName] = useState();
    const [parentEmail, setParentEmail] = useState();
    const [isSelfRegister, setIsSelfRegister] = useState(false);

    const [termsModalIsOpen, setTermsModalIsOpen] = useState(false);
    const [websiteConditionsModalIsOpen, setWebsiteConditionsModalIsOpen] = useState(false);
    const [agreeTerms, setAgreeTerms] = useState(false);

    const [courses, setCourses] = useState([]);

    const handleCourseSelection = (index) => {
        setSelectedCourseIndex(index)       
    }

    useEffect(() => {
        fetch(api.getCourses)
            .then(response => response.json())
            .then((courses) => {
                setCourses(courses);
            });
    }, []);

    return (
        <Strip>
            <PageBox>
                <Wrapper>
                    <FormTitle>
                        הרשמה לתוכנית
                    </FormTitle>     
                    <Spacer height={spacing.spacing16}/>  
                    <StepWrapper>
                        <StepTitle>
                            בחירת קבוצת הלימוד
                        </StepTitle>
                        <Spacer height={spacing.spacing8}/>
                        <StepExplenation>
                            התוכנית נפתחת במועדים שונים במהלך השנה. יש לבחור את המועד אליו תרצו להצטרף. מהלך התוכנית ותכניה זהים בכל המועדים.
                        </StepExplenation>
                        <Spacer height={spacing.spacing12}/>
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
                    </StepWrapper>
                    <Spacer height={spacing.spacing16}/>
                    <StepWrapper>
                        <StepTitle>
                            מילוי פרטי התלמיד
                        </StepTitle>
                        <Spacer height={spacing.spacing12}/>   
                        <FormSection>                  
                            <SectionContent>
                                <Row>
                                    <Cell>
                                        <InputBox type="text" value={studentFirstName} onChange={e => setStudentFirstName(e.target.value)} placeholder={"שם פרטי"} />
                                    </Cell>
                                    <Spacer width={spacing.spacing6}/>
                                    <MobileSpacer height={spacing.spacing6}/>
                                    <Cell>
                                        <InputBox type="text" value={studentLastName} onChange={e => setStudentLastName(e.target.value)} placeholder={"שם משפחה"}/> 
                                    </Cell>
                                </Row>
                                <Spacer height={spacing.spacing8}/>
                                <Row>
                                    <Cell single>
                                        <InputBox left type="text" onChange={e => setStudentEmail(e.target.value)} placeholder={"כתובת דואר אלקטרוני"}/> 
                                        <Spacer height={spacing.spacing3}/>
                                        <CellNote>
                                            כתובת דוא״ל זו תשמש את התלמיד במהלך התוכנית.
                                        </CellNote>
                                    </Cell>
                                </Row>
                            </SectionContent>
                        </FormSection>                                    
                    </StepWrapper>
                    <Spacer height={spacing.spacing16}/>
                    <StepWrapper>
                        <StepTitle>
                            מילוי פרטי האפוטרופוס (הורה או אחר)
                        </StepTitle>
                        <Spacer height={spacing.spacing6}/>   
                        <Checkbox onChange={() => setIsSelfRegister(!isSelfRegister)}>
                            אני תלמיד הרושם את עצמו לתוכנית
                        </Checkbox>
                        <Spacer height={spacing.spacing12}/> 
                        <FormSection disabled={isSelfRegister} blocked={isSelfRegister}>                  
                            <SectionContent>
                                <Row>
                                    <Cell>
                                        <InputBox type="text" disabled={isSelfRegister} onChange={e => setParentFirstName(e.target.value)} placeholder={"שם פרטי"}/>
                                    </Cell>
                                    <Spacer width={spacing.spacing6}/>
                                    <MobileSpacer height={spacing.spacing6}/>
                                    <Cell>
                                        <InputBox type="text" disabled={isSelfRegister} onChange={e => setParentLastName(e.target.value)} placeholder={"שם משפחה"}/> 
                                    </Cell>
                                </Row>
                                <Spacer height={spacing.spacing8}/>
                                <Row>
                                    <Cell single>
                                        <InputBox left type="text" disabled={isSelfRegister} onChange={e => setParentEmail(e.target.value)} placeholder={"כתובת דואר אלקטרוני"}/> 
                                    </Cell>
                                </Row>
                            </SectionContent>
                        </FormSection>                                    
                    </StepWrapper>
                    <Spacer height={spacing.spacing16}/>
                    <StepWrapper>
                        <StepTitle>
                            תנאים ותשלום
                        </StepTitle>
                        <Spacer height={spacing.spacing12}/>   
                        <Checkbox onChange={e => setAgreeTerms(e.target.value)}>
                            <CheckboxCaption>
                                <span>
                                    <span>
                                        אני מאשר כי קראתי את
                                    </span>
                                    &nbsp;
                                    <span>
                                        <Link onClick={() => setWebsiteConditionsModalIsOpen(true)}>תקנון השימוש</Link>
                                    </span>
                                    &nbsp;
                                    <span>
                                        ואת
                                    </span>
                                    &nbsp;
                                    <span>
                                        <Link onClick={() => setTermsModalIsOpen(true)}>תקנון התוכנית</Link>
                                    </span>
                                        &nbsp;
                                    <span>
                                        ואני מסכים לתנאיהם.
                                    </span>
                                </span>
                            </CheckboxCaption>    
                        </Checkbox>                                
                    </StepWrapper>
                    <Spacer height={spacing.spacing20}/>
                    <StepWrapper>
                        <RegistrationButton>
                            המשך לביצוע התשלום
                        </RegistrationButton>                                  
                    </StepWrapper>
                </Wrapper>


            </PageBox>


            

        </Strip>
    )
}

export default RegistrationPage;