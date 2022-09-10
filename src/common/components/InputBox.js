import styled from "styled-components/macro";
import { colors, fonts, fontSize } from '../style'

const InputBox = styled.input`
    width: 100%;
    height: 50px;
    padding: 4px 15px;
    font-weight: 600;
    white-space: nowrap;
    outline: 2px blue;
    border-radius: 8px;
    background: white;
    border: 1px solid gray;
    font-size: ${fontSize.fontSize2};
    font-color: ${colors.text}; 
    padding: 16.5px 14px;
    font-family: ${fonts.main}, sans-serif;
    color: ${colors.text}; 
    text-align: ${props => (props.left ? "left" : "right")};
    direction: ${props => (props.left ? "ltr" : "rtl")};
    transition: all 200ms;
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
        outline: none;
        border-color: ${colors.accent};
    }
    &:hover {
        opacity: 1;
        transition: all 500ms;
        background: white;
        border: 1px solid gray;
        box-shadow: 0 0 10px ${colors.accent};
    }
`;

export default InputBox;