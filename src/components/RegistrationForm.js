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
import Checkbox from '../common/components/Checkbox';

import PlanTerms from './Terms';
import TextArea from '../common/components/TextArea';
import Terms from './Terms';
import WebsiteConditions from './WebsiteConditions';

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
    width: ${props => props.single ? '100%' : '300px'};
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

const CheckboxCaption = styled.div`

`

const Link = styled.span`
    text-decoration: underline; 
    cursor: pointer;
    :hover {
        opacity: 80%;
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

    const [studentFirstName, setStudentFirstName] = useState();
    const [studentLastName, setStudentLastName] = useState();
    const [studentDiploma, setStudentDiploma] = useState();
    const [notes, setNotes] = useState();
    const [requesterFirstName, setRequesterFirstName] = useState();
    const [requesterLastName, setRequesterLastName] = useState();
    const [requesterPhoneNumber, setRequesterPhoneNumber] = useState();
    const [requesterEmail, setRequesterEmail] = useState();
    const [agreeTerms, setAgreeTerms] = useState(false);

    const [invalidForm, setInvalidForm] = useState();
    const [isSending, setIsSending] = useState(false);
    const [requestSentSuccessfully, setRequestSentSuccessfully] = useState(false);
    const [requestFailed, setRequestFailed] = useState(false);

    const [termsModalIsOpen, setTermsModalIsOpen] = useState(false);
    const [websiteConditionsModalIsOpen, setWebsiteConditionsModalIsOpen] = useState(false);

    const validateForm = () => {
        if (
            (!studentFirstName) || 
            (!studentLastName) || 
            (!requesterFirstName) || 
            (!requesterLastName) || 
            (!requesterPhoneNumber) || 
            (!requesterEmail)) {
                setInvalidForm('???? ???????? ???? ???? ??????????')
                return false
            }
        if (!studentDiploma) {
            setInvalidForm('???? ???????? ???? ???????????? ?????????????? ???????????? ???? ????????????');
            return false
        }        
        if (!isPhoneNumberValid(requesterPhoneNumber)) {
            setInvalidForm('???????? ???????????? ???????? ????????');
            return false
        }
        if (!isEmailValid(requesterEmail)) {
            setInvalidForm('?????????? ?????????????? ???????? ??????????')
            return false
        }
        if (!agreeTerms) {
            setInvalidForm('???? ?????????? ?????????????? ?????????? ?????????? ????????????')
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
        data.append('notes', notes)
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
                    ?????????? ?????????? ??????????????
                </FormTitle>     
                <Spacer height={spacing.spacing16}/>       
                <FormSection>                  
                    <SectionTitle>
                        <Title>
                            ???????? ????????????
                        </Title>
                    </SectionTitle>
                    <Spacer height={spacing.spacing12}/>
                    <SectionContent>
                        <Row>
                            <Cell>
                                <InputBox type="text" onChange={e => setStudentFirstName(e.target.value)} placeholder={"???? ????????"} />
                            </Cell>
                            <Spacer width={spacing.spacing6}/>
                            <MobileSpacer height={spacing.spacing6}/>
                            <Cell>
                                <InputBox type="text" onChange={e => setStudentLastName(e.target.value)} placeholder={"???? ??????????"}/> 
                            </Cell>
                        </Row>
                        <Spacer height={spacing.spacing12}/>
                        <FileDropPanel>
                            <DragDropFile onUplode={file => setStudentDiploma(file)}/> 
                            <Spacer height={spacing.spacing2}/>
                            <FileInstructions>
                                ???? ???????? ???????? ???????? ???????????? PDF ???? ???????? ??????????.
                            </FileInstructions>
                        </FileDropPanel>
                        <Spacer height={spacing.spacing12}/>
                        <Row>
                            <Cell single>
                                <TextArea type="text" onChange={e => setNotes(e.target.value)} placeholder={"?????????? ???????? ???????????? ?????????????? (???? ????????)"} />
                            </Cell>
                        </Row>
                    </SectionContent>
                </FormSection> 
                <Spacer height={spacing.spacing16}/> 
                <FormSection>
                    <SectionTitle>
                        <Title>
                            ???????? ???????? ????????????
                        </Title>
                    </SectionTitle>
                    <Spacer height={spacing.spacing12}/>
                    <SectionContent>
                        <Row>
                            <Cell>
                                <InputBox type="text" onChange={e => setRequesterFirstName(e.target.value)} placeholder={"???? ????????"} />
                            </Cell>
                            <Spacer width={spacing.spacing6}/>
                            <MobileSpacer height={spacing.spacing6}/>
                            <Cell>
                                <InputBox type="text" onChange={e => setRequesterLastName(e.target.value)} placeholder={"???? ??????????"}/> 
                            </Cell>
                        </Row>
                        <Spacer height={spacing.spacing6}/>
                        <Row>
                            <Cell>
                                <InputBox left type="text" onChange={e => setRequesterPhoneNumber(e.target.value)} placeholder={"???????? ??????????"}/>
                            </Cell>
                            <Spacer width={spacing.spacing6}/>
                            <MobileSpacer height={spacing.spacing6}/>
                            <Cell>
                                <InputBox left type="text" onChange={e => setRequesterEmail(e.target.value)} placeholder={"?????????? ???????? ????????????????"}/> 
                            </Cell>
                        </Row>
                    </SectionContent>
                </FormSection>  
                <Spacer height={spacing.spacing24}/> 
                <FormSection>
                    <Checkbox onChange={e => setAgreeTerms(e.target.value)}>
                        <CheckboxCaption>
                            <span>
                                <span>
                                    ?????? ???????? ???? ?????????? ????
                                </span>
                                &nbsp;
                                <span>
                                    <Link onClick={() => setWebsiteConditionsModalIsOpen(true)}>?????????? ????????????</Link>
                                </span>
                                {false && <>
                                    <span>
                                        ??????
                                    </span>
                                    &nbsp;
                                    <span>
                                        <Link onClick={() => setTermsModalIsOpen(true)}>?????????? ??????????????</Link>
                                    </span>
                                </>}
                                &nbsp;
                                <span>
                                    ???????? ?????????? ????????????.
                                </span>
                            </span>
                        </CheckboxCaption>    
                    </Checkbox>
                    <Modal show={termsModalIsOpen} onClose={() => setTermsModalIsOpen(false)}>
                        <Terms/>
                    </Modal>
                    <Modal show={websiteConditionsModalIsOpen} onClose={() => setWebsiteConditionsModalIsOpen(false)}>
                        <WebsiteConditions/>
                    </Modal>
                </FormSection>
                <Spacer height={spacing.spacing24}/>
                <FormSection>
                    <ButtonPanel>
                        <RequestRegistrationButton full onClick={handleSubmit}>
                            {isSending ? <Spinner/> : <span>?????? ???????? ??????????</span>}
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
                        ?????????? ?????????? ????????????!
                    </SuccessNote>
                    <Spacer height={spacing.spacing12}/> 
                    <SuccessInfo>
                        ???????? ???????? ???????? ???????? ?????????? ???????????? ?????????? ?????????????????? {requesterEmail}. ???? ???? ???????????? ??????????, ???? ?????????? ?????????????? ???? ?????????? ??????????-??????.
                    </SuccessInfo>
                </FormSection> 
            )}                                  
        </Wrapper>
    )
}

export default RegistrationForm;