import React, {useState} from 'react'
import styled from "styled-components/macro"

import Page from '../common/components/Page';
import InputBox from '../common/components/InputBox';
import Spacer from '../common/components/Spacer';
import { colors, spacing, fontSize } from '../common/style';
import Strip from '../common/components/Strip';
import Button from '../common/components/Button';
import axios from 'axios'
import api from '../api';

const Login = styled.div`
    direction: ltr;
`

const LoginButton = styled(Button)`
    cursor: pointer;
    padding: 0.25rem;
    border: none;
    background: ${colors.accent};
    color: ${colors.textOnAccent};
    font-size: ${fontSize.fontSize3};
    border-radius: 3px;
    height: 40px;
    line-height: 28px;
    transition: all 400ms;
    width: 100%;
    height: 55px;
    :hover {
        opacity: 80%;
    }
`

const Admin = () => {

    const [username, setUsername] = useState()
    const [password, setPassword] = useState()
    const [isLoggedIn, setIsLoggedIn] = useState()

    if (localStorage.getItem('token')) {
        const data = new FormData()
        data.append('token', localStorage.getItem('token'))
        return axios({
            method: 'post',
            url: api.validateToken,
            data: data,
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        .then(function (response) {
            if (response.valid) {
                setIsLoggedIn(true)
            } else {
                localStorage.removeItem('token')
            }
        })
        .catch(function (response) {
            return response
        });
    }

    const login = () => {
        const data = new FormData()
        data.append('username', username)
        data.append('password', password)
        return axios({
            method: 'post',
            url: api.login,
            data: data,
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        .then(function (response) {
            localStorage.setItem('token', response.token)
            setIsLoggedIn(true)
        })
        .catch(function (response) {
            return response
        });
    }

    return (
        <Strip backgroundColor={colors.lightGrey}>
            <Page nerrow>
                {!isLoggedIn && (
                    <Login>
                        <InputBox left placeholder='Username' onChange={e => setUsername(e.target.value)}/>
                        <Spacer height={spacing.spacing12}/>
                        <InputBox left placeholder='Password' onChange={e => setPassword(e.target.value)}/>
                        <Spacer height={spacing.spacing12}/>
                        <LoginButton onClick={login}>
                            Login
                        </LoginButton>
                    </Login>
                )}
                {isLoggedIn && (
                    <span>You are logged in</span>
                )}                
            </Page>
        </Strip>
    )
}

export default Admin;