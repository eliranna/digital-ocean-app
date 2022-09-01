import React from 'react'
import styled from "styled-components/macro"
import InputBox from '../common/components/InputBox'

import { spacing } from '../common/style';
import Spacer from '../common/components/Spacer'
import Centered from '../common/components/Centered';

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-elements: center;
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

const RegistrationForm = () => {
    return (
        <Wrapper>
            <FormSection>
                <SectionTitle>
                    <Title>
                        פרטי התלמיד
                    </Title>
                </SectionTitle>
                <Spacer height={spacing.spacing6}/>
                <SectionContent>
                    <InputRow>
                        <InputBox placeholder={"שם הפרטי"}/> 
                    </InputRow>
                    <Spacer height={spacing.spacing6}/>
                    <InputRow>
                        <InputBox placeholder={"שם משפחה"}/> 
                    </InputRow>
                    <Spacer height={spacing.spacing6}/>
                    <InputRow>
                        <InputBox placeholder={"תלמיד כיתה ..."}/> 
                    </InputRow>
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
                        <InputBox placeholder={"שם הפרטי"}/> 
                    </InputRow>
                    <Spacer height={spacing.spacing6}/>
                    <InputRow>
                        <InputBox placeholder={"שם משפחה"}/> 
                    </InputRow>
                    <Spacer height={spacing.spacing6}/>
                    <InputRow>
                        <InputBox placeholder={"קרבה לתלמיד"}/> 
                    </InputRow>
                    <Spacer height={spacing.spacing6}/>
                    <InputRow>
                        <InputBox left placeholder={"מספר טלפון"}/> 
                    </InputRow>
                    <Spacer height={spacing.spacing6}/>
                    <InputRow>
                        <InputBox left placeholder={"כתובת דואר אלקטרוני"}/> 
                    </InputRow>
                </SectionContent>
            </FormSection>
        </Wrapper>
    )
}

export default RegistrationForm;