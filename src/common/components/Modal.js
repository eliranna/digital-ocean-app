import React from 'react'
import styled from "styled-components/macro"
import { fontSize, colors, spacing } from '../style';
import Button from './Button';
import Spacer from './Spacer';

const Screen = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    margin-left: auto;
    margin-right: auto;
    width: 100%;
    height: 100%;
    background-color: black;
    opacity: 70%;
    z-index: 9999;
`;

const Pane = styled.div`
    display: flex;
    flex-direction: column;
    z-index: 9999999;
    width: 60%;
    height: 80%;
    background-color: white;
    position: fixed;
    top: 5%;
    right: 0;
    left: 0;
    margin-left: auto;
    margin-right: auto;
    border: 1px solid black;
    z-index: 999999;
    border-radius: 5px;
    border: none;
`;

const Content = styled.div`
    display: flex;
    flex-direction: column;
    overflow: scroll;
    padding: ${spacing.spacing20};
    padding-bottom: 0px;
    padding-top: 0px;
`;

const ButtonsBar = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    border-top: 1px solid rgba(0,0,5,.1);
    height: 150px;
    flex-shrink: 0;
    flex-grow: 0;
`;

const CloseButton = styled(Button)`
    border: 1px solid ${colors.text};
    background: white;
    color: ${colors.text};
    height: 45px;
    max-width: 225px;
    width: 90px;
    font-size: ${fontSize.fontSize2};
    font-weight: 500;
    transition: all 400ms;
    align-text: center;
    :hover {
        opacity: 80%;
    }
    align-self: center;
`;

const CloseButtonX = styled.div`
    img {
        width: 30px;
        cursor: pointer;
    }
    display: flex;
    justify-content: flex-end;
    padding: ${spacing.spacing8};

`;

const Modal = ({children, show, onClose}) => {
    return show && (
        <>
        <Screen onClick={onClose}/>
        <Pane>
            <CloseButtonX onClick={onClose}>
                <img src={"/assets/close.svg"}/>
            </CloseButtonX>
            <Content>
                {children}
            </Content>
            <ButtonsBar>
                <CloseButton onClick={onClose}>סגור</CloseButton>
            </ButtonsBar>            
        </Pane> 
        </>                   
    )
}

export default Modal;