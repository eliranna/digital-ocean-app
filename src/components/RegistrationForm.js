import React, { useState } from 'react'
import styled from "styled-components/macro"
import InputBox from '../common/components/InputBox'

import { spacing, colors, fontSize, fonts } from '../common/style';
import Spacer from '../common/components/Spacer'
import Centered from '../common/components/Centered';
import Button from '../common/components/Button';
import DragDropFile from '../common/components/FileUploader';
import axios from 'axios'
import api from '../api';

const Wrapper = styled.div`
    padding: ${spacing.spacing16};
    background-color: ${colors.lightGrey};

`

const FormSection = styled.div``

const SectionTitle = styled.div``

const Title = styled.div`
    font-size: ${fontSize.fontSize25};
    text-align: center;
    font-weight: 600;
`

const SectionContent = styled.div``

const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`
const Cell = styled.div`
    width: 300px;
`

const FileDropPanel = styled.div`
    
`

const FileInstructions = styled.div`
    text-align: center;
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
    font-size: ${fontSize.fontSize21};
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

const RegistrationForm = ({onSuccess}) => {

    const [studentFirstName, setStudentFirstName] = useState();
    const [studentLastName, setStudentLastName] = useState();
    const [studentClass, setStudentClass] = useState();
    const [studentDiploma, setStudentDiploma] = useState();
    const [requesterFirstName, setRequesterFirstName] = useState();
    const [requesterLastName, setRequesterLastName] = useState();
    const [requesterRelation, setRequesterRelation] = useState();
    const [requesterPhoneNumber, setRequesterPhoneNumber] = useState();
    const [requesterEmail, setRequesterEmail] = useState();

    const [invalidForm, setInvalidForm] = useState();
    const [isSending, setIsSending] = useState(false);
    const [requestSentSuccessfully, setRequestSentSuccessfully] = useState(false);
    const [requestFailed, setRequestFailed] = useState(false);

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
        data.append('studentClass', studentClass)
        data.append('requesterFirstName', requesterFirstName)
        data.append('requesterLastName', requesterLastName)
        data.append('requesterRelation', requesterRelation)
        data.append('requesterPhoneNumber', requesterPhoneNumber)
        data.append('requesterEmail', requesterEmail)
        setIsSending(true)
        const response = await sendRegistrationForm(data);
        setIsSending(false)
        if (response.status == 200) {
            onSuccess()
        } else if (response.status == 500) {
            setRequestFailed(true)
        }
    }    

    return (
        <Wrapper>
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
                        פרטי מגיש הבקשה
                    </Title>
                </SectionTitle>
                <Spacer height={spacing.spacing12}/>
                <SectionContent>
                    <Row>
                        <Cell>
                            <InputBox type="text" onChange={e => setRequesterFirstName(e.target.value)} placeholder={"שם פרטי"} />
                        </Cell>
                        <Spacer width={spacing.spacing6}/>
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
                        <Cell>
                            <InputBox left type="text" onChange={e => setRequesterEmail(e.target.value)} placeholder={"כתובת דואר אלקטרוני"}/> 
                        </Cell>
                    </Row>
                </SectionContent>
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
        </Wrapper>
    )
}

export default RegistrationForm;