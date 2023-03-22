import React, {useState} from 'react'
import styled from "styled-components/macro"

import { colors, fontSize, pageWidth, spacing } from '../common/style';

import Spacer from '../common/components/Spacer'
import Page from '../common/components/Page'
import Strip from '../common/components/Strip'
import Button from '../common/components/Button'

const Box = styled.div`
    padding: ${spacing.spacing16};
    background-color: ${colors.lightGrey};
    max-width: ${pageWidth.maxWidth2XL};
`

const PageBox = styled(Page)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const FormTitle = styled.div`
    font-size: ${fontSize.fontSize5};
    text-align: center;
    font-weight: 600;
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

const Register = () => {

    return (
        <Strip>
            <PageBox>
                <Box>
                    <FormTitle>
                        הרשמה לתוכנית
                    </FormTitle>     
                    <Spacer height={spacing.spacing16}/> 
                    <RegistrationButton>
                        המשך לביצוע התשלום
                    </RegistrationButton>                                             
                </Box>
            </PageBox>
        </Strip>
    )

}

export default Register;