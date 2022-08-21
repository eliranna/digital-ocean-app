import styled from "styled-components/macro";
import { colors, fonts, fontSize } from '../style'

const Button = styled.button`
    text-align: center;
    padding: 4px 15px;
    font-weight: 600;
    white-space: nowrap;
    outline: none;
    border-radius: 3px;
    font-family: ${fonts.main}, sans-serif;
    cursor: pointer;
`;

export default Button;