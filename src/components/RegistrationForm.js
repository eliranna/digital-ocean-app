import React, { useState } from 'react'
import styled from "styled-components/macro"
import InputBox from '../common/components/InputBox'

import { spacing, colors, fontSize, device } from '../common/style';
import Spacer from '../common/components/Spacer'
import Centered from '../common/components/Centered';
import Button from '../common/components/Button';
import DragDropFile from '../common/components/FileUploader';
import axios from 'axios'
import api from '../api';
import MobileSpacer from '../common/components/MobileSpacer';
import Modal from '../common/components/Modal';

import PlanTerms from './Terms';

const Wrapper = styled.div`
    padding: ${spacing.spacing16};
    background-color: ${colors.lightGrey};

`

const FormSection = styled.div``

const SectionTitle = styled.div``

const Title = styled.div`
    font-size: ${fontSize.fontSize3};
    text-align: center;
    font-weight: 600;
`

const FormTitle = styled.div`
    font-size: ${fontSize.fontSize5};
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
    width: 300px;
    @media ${device.mobileL} {
        width: 100%;
    }
`

const FileDropPanel = styled.div`
    
`

const FileInstructions = styled.div`
    text-align: center;
    font-size: ${fontSize.fontSize1};
`

const Error = styled.div`
    text-align: center;
    font-weight: 700;
`

const ButtonPanel = styled.div`
    display: flex;
    justify-content: center;
`

const RequestRegistrationButton = styled(Button)`
    border: none;
    background: ${colors.accent};
    color: ${colors.textOnAccent};
    height: 55px;
    max-width: 225px;
    width: 100%;
    font-size: ${fontSize.fontSize3};
    font-weight: 500;
    transition: all 400ms;
    align-text: center;
    :hover {
        opacity: 80%;
    }
`;

const Spinner = styled.div`
  border: 4px solid white;
  border-top: 4px ${colors.accent} solid;
  border-radius: 50%;
  height: 30px;
  width: 30px;
  animation: spin 300ms linear infinite;
  right: 0;
  left: 0;
  margin-left: auto;
  margin-right: auto;
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
`;

const SuccessIcon = styled.div`
  text-align: center;
  img {
      width: 100px;
  }
`

const SuccessNote = styled.div`
  text-align: center;
  font-size: ${fontSize.fontSize3};
  font-weight: 600;
`

const SuccessInfo = styled.div`
    text-align: center;
    font-size: ${fontSize.fontSize3};
    font-weight: 400;
` 

const TermsCheckbox = styled.div`
  font-size: ${fontSize.fontSize3};
  max-width: 400px;
  right: 0;
  left: 0;
  margin-left: auto;
  margin-right: auto;
  display: flex;

` 

const Checkbox = styled.div`
   input {
    width: 23px;
    height: 23px;
    cursor: pointer;
   }
   margin-top: 2px;
   margin-left: 5px;

` 

const CheckboxCaption = styled.div`
   span {
       text-decoration: underline; 
       cursor: pointer;
       :hover {
           opacity: 80%;
       }
   }
` 


async function sendRegistrationForm(formData) {
    return axios({
        method: 'post',
        url: api.openRegistration,
        data: formData,
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    })
    .then(function (response) {
        return response
    })
    .catch(function (response) {
        return response
    });
}

function isPhoneNumberValid(phoneNumber) {
    return /^(?:(?:(\+?972|\(\+?972\)|\+?\(972\))(?:\s|\.|-)?([1-9]\d?))|(0[23489]{1})|(0[57]{1}[0-9]))(?:\s|\.|-)?([^0\D]{1}\d{2}(?:\s|\.|-)?\d{4})$/.test(phoneNumber)
}

function isEmailValid(email) {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
};

const RegistrationForm = ({onShowTerms}) => {

    const [studentFirstName, setStudentFirstName] = useState('רועי');
    const [studentLastName, setStudentLastName] = useState('נתן');
    const [studentDiploma, setStudentDiploma] = useState();
    const [requesterFirstName, setRequesterFirstName] = useState('דודי');
    const [requesterLastName, setRequesterLastName] = useState('אמסלם');
    const [requesterPhoneNumber, setRequesterPhoneNumber] = useState('0584028332');
    const [requesterEmail, setRequesterEmail] = useState('eliran.natan.87@gmail.com');
    const [agreeTerms, setAgreeTerms] = useState(false);

    const [invalidForm, setInvalidForm] = useState();
    const [isSending, setIsSending] = useState(false);
    const [requestSentSuccessfully, setRequestSentSuccessfully] = useState(false);
    const [requestFailed, setRequestFailed] = useState(false);
    const [termsModalIsOpen, setTermsModalIsOpen] = useState(false);

    const validateForm = () => {
        if (
            (!studentFirstName) || 
            (!studentLastName) || 
            (!requesterFirstName) || 
            (!requesterLastName) || 
            (!requesterPhoneNumber) || 
            (!requesterEmail)) {
                setInvalidForm('יש למלא את כל השדות')
                return false
            }
        if (!studentDiploma) {
            setInvalidForm('יש לצרף את גיליון הציונים האחרון של התלמיד');
            return false
        }        
        if (!isPhoneNumberValid(requesterPhoneNumber)) {
            setInvalidForm('מספר הטלפון אינו תקין');
            return false
        }
        if (!isEmailValid(requesterEmail)) {
            setInvalidForm('כתובת האימייל אינה תקינה')
            return false
        }
        if (!agreeTerms) {
            setInvalidForm('יש לקרוא ולהסכים לתנאי תקנון השימוש')
            return false
        }
        return true;
    }

    const handleSubmit = async e => {
        e.preventDefault();
        if (!validateForm()) return
        setInvalidForm(null)
        const data = new FormData()
        data.append('studentDiploma', studentDiploma)
        data.append('studentFirstName', studentFirstName)
        data.append('studentLastName', studentLastName)
        data.append('requesterFirstName', requesterFirstName)
        data.append('requesterLastName', requesterLastName)
        data.append('requesterPhoneNumber', requesterPhoneNumber)
        data.append('requesterEmail', requesterEmail)
        setIsSending(true)
        const response = await sendRegistrationForm(data);
        setIsSending(false)
        if (response.status == 200) {
            setRequestSentSuccessfully(true)
        } else if (response.status == 500) {
            setRequestFailed(true)
        }
    }    

    return (
        <Wrapper>
            {!requestSentSuccessfully && (
            <>
                <FormTitle>
                    בדיקת התאמה לתוכנית
                </FormTitle>     
                <Spacer height={spacing.spacing16}/>       
                <FormSection>                  
                    <SectionTitle>
                        <Title>
                            פרטי התלמיד
                        </Title>
                    </SectionTitle>
                    <Spacer height={spacing.spacing12}/>
                    <SectionContent>
                        <Row>
                            <Cell>
                                <InputBox type="text" onChange={e => setStudentFirstName(e.target.value)} placeholder={"שם פרטי"} />
                            </Cell>
                            <Spacer width={spacing.spacing6}/>
                            <MobileSpacer height={spacing.spacing6}/>
                            <Cell>
                                <InputBox type="text" onChange={e => setStudentLastName(e.target.value)} placeholder={"שם משפחה"}/> 
                            </Cell>
                        </Row>
                        <Spacer height={spacing.spacing12}/>
                        <FileDropPanel>
                            <DragDropFile onUplode={file => setStudentDiploma(file)}/> 
                            <Spacer height={spacing.spacing2}/>
                            <FileInstructions>
                                יש לצרף קובץ יחיד בפורמט PDF או קובץ תמונה.
                            </FileInstructions>
                        </FileDropPanel>
                    </SectionContent>
                </FormSection> 
                <Spacer height={spacing.spacing16}/> 
                <FormSection>
                    <SectionTitle>
                        <Title>
                            פרטי מגיש הבדיקה
                        </Title>
                    </SectionTitle>
                    <Spacer height={spacing.spacing12}/>
                    <SectionContent>
                        <Row>
                            <Cell>
                                <InputBox type="text" onChange={e => setRequesterFirstName(e.target.value)} placeholder={"שם פרטי"} />
                            </Cell>
                            <Spacer width={spacing.spacing6}/>
                            <MobileSpacer height={spacing.spacing6}/>
                            <Cell>
                                <InputBox type="text" onChange={e => setRequesterLastName(e.target.value)} placeholder={"שם משפחה"}/> 
                            </Cell>
                        </Row>
                        <Spacer height={spacing.spacing6}/>
                        <Row>
                            <Cell>
                                <InputBox left type="text" onChange={e => setRequesterPhoneNumber(e.target.value)} placeholder={"מספר טלפון"}/>
                            </Cell>
                            <Spacer width={spacing.spacing6}/>
                            <MobileSpacer height={spacing.spacing6}/>
                            <Cell>
                                <InputBox left type="text" onChange={e => setRequesterEmail(e.target.value)} placeholder={"כתובת דואר אלקטרוני"}/> 
                            </Cell>
                        </Row>
                    </SectionContent>
                </FormSection>  
                <Spacer height={spacing.spacing24}/> 
                <FormSection>
                    <TermsCheckbox>
                        <Checkbox>
                            <input type="checkbox" onChange={e => setAgreeTerms(e.target.value)}/>
                        </Checkbox>
                        <CheckboxCaption>
                            אני מאשר כי קראתי את <span onClick={() => setTermsModalIsOpen(true)}>תקנון השימוש</span> ואני מסכים לתנאיו.
                        </CheckboxCaption>
                        <Modal show={termsModalIsOpen} onClose={() => setTermsModalIsOpen(false)}>
                            <PlanTerms/>
                        </Modal>
                    </TermsCheckbox>
                </FormSection>
                <Spacer height={spacing.spacing24}/>
                <FormSection>
                    <ButtonPanel>
                        <RequestRegistrationButton full onClick={handleSubmit}>
                            {isSending ? <Spinner/> : <span>שלח בקשת הרשמה</span>}
                        </RequestRegistrationButton>
                    </ButtonPanel>
                    <Spacer height={spacing.spacing6}/> 
                    {invalidForm && (
                        <Error>
                            <span>{invalidForm}</span>
                        </Error>
                    )}
                </FormSection> 
            </>
            )}
            {requestSentSuccessfully && (
                <FormSection>
                    <SuccessIcon>
                        <img src="/assets/ok.svg"/>
                    </SuccessIcon>
                    <SuccessNote>
                        הבקשה נשלחה בהצלחה!
                    </SuccessNote>
                    <Spacer height={spacing.spacing12}/> 
                    <SuccessInfo>
                        בעוד מספר ימים תשלח תשובה לכתובת הדואר האלקטרוני {requesterEmail}. אם לא התקבלה תשובה, יש לוודא שההודעה לא סומנה כדואר-זבל.
                    </SuccessInfo>
                </FormSection> 
            )}                                  
        </Wrapper>
    )
}

export default RegistrationForm;