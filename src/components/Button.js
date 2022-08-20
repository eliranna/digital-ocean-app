import styled from "styled-components";
import { colors, fonts } from '../common/style'

const Button = styled.button`
    color: ${props => (props.full ? colors.background : colors.accent)};
    background-color: ${props => (props.full ? colors.accent : colors.background)};
    text-align: center;
    padding: 4px 15px;
    font-weight: 600;
    white-space: nowrap;
    outline: none;
    border: none; 
    border-radius: 3px;
    font-family: ${fonts.main}, sans-serif;
    cursor: pointer;
`;

export default Button;