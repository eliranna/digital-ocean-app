import styled from "styled-components/macro";
import { fontSize, color, fontWeight, spacing } from '../style';

export const Button = styled.button`
    font-size: ${fontSize.small};
    letter-spacing: 0.1em;
    font-weight: ${fontWeight.extraLight};
    height: 35px;
    line-height: 0;
    width: fit-content;
    text-align: center;
    color: ${props => props.darkMode ? color.white : color.black};
    background: none;
    border: 1px solid ${props => props.darkMode ? color.white : color.black};
    outline: none;
    padding: 0px 27px;
    cursor: pointer;
`

export const RoundButton = styled(Button)`
    border-radius: 40px;
`