import styled from "styled-components/macro";
import { colors, fonts, fontSize } from '../style'

const InputBox = styled.input`
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
`;

export default InputBox;