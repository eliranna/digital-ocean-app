import React, { useState } from 'react'
import styled from "styled-components/macro"
import InputBox from '../common/components/InputBox'

import { spacing, colors, fontSize, fonts } from '../common/style';
import Spacer from '../common/components/Spacer'
import Centered from '../common/components/Centered';
import Button from '../common/components/Button';
import DragDropFile from '../common/components/FileUploader';
import axios from 'axios'

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-elements: center;
    form {
        right: 0;
        left: 0;
        margin-left: auto;
        margin-right: auto;
    }
`;

const FormSection = styled.div`
    display: flex;
    align-self: center;
    flex-direction: column;
    text-align: center;
    width: 300px;
`;

const SectionTitle = styled.div`
`;

const Title = styled.div`
    font-weight: 700;
`;

const SectionContent = styled.div`

`;

const InputRow = styled.div`

`;

const Error = styled.div`
    font-size: ${fontSize.fontSize2};
    color: #721c24;
`;

const RegisterButton = styled(Button)`
    border: none;
    background: ${colors.accent};
    color: ${colors.textOnAccent};
    font-size: ${fontSize.fontSize2};
    height: 55px;
`

const FileInstructions = styled.div`
    
`

const SelectBox = styled.select`
    width: 100%;
    padding: 4px 15px;
    font-weight: 600;
    white-space: nowrap;
    outline: none;
    border-radius: 6px;
    background: ${colors.background};
    border: 2px solid ${colors.text};
    font-size: ${fontSize.fontSize1};
    font-color: ${colors.text}; 
    padding: 16.5px 14px;
    font-family: ${fonts.main}, sans-serif;
    color: ${colors.text}; 
    opacity: 0.7;
    transition: all 500ms;
    text-align: ${props => (props.left ? "left" : "right")};
    direction: ${props => (props.left ? "ltr" : "rtl")};
    ::placeholder,
    ::-webkit-input-placeholder {
    color: ${colors.text}; 
    opacity: 0.6;
    text-align: right;
    }
    :-ms-input-placeholder {
    color: ${colors.text};
    opacity: 0.6;
    }
    &:focus {
        opacity: 1;
        transition: all 500ms;
    }
    &:hover {
        opacity: 1;
        transition: all 500ms;
    }
`

async function sendRegistrationForm(formData) {
    return axios({
        method: 'post',
        url: '/open-registration-request',
        data: formData,
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    })
    .then(function (response) {
        console.log(response);
    })
    .catch(function (response) {
        console.log(response);
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

const RegistrationForm = () => {

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

    const validateForm = () => {
        if (
            (!studentFirstName) || 
            (!studentLastName) || 
            (!studentClass) ||
            (!requesterFirstName) || 
            (!requesterLastName) || 
            (!requesterRelation) || 
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
        const token = await sendRegistrationForm(data);
        console.log(token)
    }    

    return (
        <Wrapper>
            <form> 
                <FormSection>
                    <SectionTitle>
                        <Title>
                            פרטי התלמיד
                        </Title>
                    </SectionTitle>
                    <Spacer height={spacing.spacing6}/>
                    <SectionContent>
                        <InputRow>
                            <InputBox type="text" onChange={e => setStudentFirstName(e.target.value)} placeholder={"שם פרטי"} /> 
                        </InputRow>
                        <Spacer height={spacing.spacing6}/>
                        <InputRow>
                            <InputBox type="text" onChange={e => setStudentLastName(e.target.value)} placeholder={"שם משפחה"}/> 
                        </InputRow>
                        <Spacer height={spacing.spacing6}/>
                        <InputRow>
                            <SelectBox onChange={e => setStudentClass(e.target.value)}>
                                <option value="" disabled defaultValue>תלמיד בכיתה...</option>
                                <option value="1">כיתה י'</option>
                                <option value="2">כיתה י״א</option>
                                <option value="3">כיתה י״ב</option>
                            </SelectBox>                        
                        </InputRow>
                        <Spacer height={spacing.spacing6}/>
                        <InputRow>
                            <DragDropFile onUplode={file => setStudentDiploma(file)}/> 
                        </InputRow>
                        <Spacer height={spacing.spacing2}/>
                        <FileInstructions>
                            יש לצרף קובץ יחיד בפורמט PDF או קובץ תמונה.
                        </FileInstructions>
                    </SectionContent>
                </FormSection>   
                <Spacer height={spacing.spacing16}/>         
                <FormSection>
                    <SectionTitle>
                        <Title>
                            פרטי מבצע ההזמנה
                        </Title>
                    </SectionTitle>
                    <Spacer height={spacing.spacing6}/>
                    <SectionContent>
                        <InputRow>
                            <InputBox type="text" onChange={e => setRequesterFirstName(e.target.value)} placeholder={"שם הפרטי"}/> 
                        </InputRow>
                        <Spacer height={spacing.spacing6}/>
                        <InputRow>
                            <InputBox type="text" onChange={e => setRequesterLastName(e.target.value)} placeholder={"שם משפחה"}/> 
                        </InputRow>
                        <Spacer height={spacing.spacing6}/>
                        <InputRow>
                            <InputBox type="text" onChange={e => setRequesterRelation(e.target.value)} placeholder={"קרבה לתלמיד"}/> 
                        </InputRow>
                        <Spacer height={spacing.spacing6}/>
                        <InputRow>
                            <InputBox left type="text" onChange={e => setRequesterPhoneNumber(e.target.value)} placeholder={"מספר טלפון"}/> 
                        </InputRow>
                        <Spacer height={spacing.spacing6}/>
                        <InputRow>
                            <InputBox left type="text" onChange={e => setRequesterEmail(e.target.value)} placeholder={"כתובת דואר אלקטרוני"}/> 
                        </InputRow>
                    </SectionContent>
                </FormSection>
                <Spacer height={spacing.spacing24}/> 
                <FormSection>
                    <RegisterButton full onClick={handleSubmit}>
                        שלח בקשת הרשמה
                    </RegisterButton>
                    <Spacer height={spacing.spacing6}/> 
                    {invalidForm && (
                        <Error>
                            <span>{invalidForm}</span>
                        </Error>
                    )}
                </FormSection>
            </form>
        </Wrapper>
    )
}

export default RegistrationForm;