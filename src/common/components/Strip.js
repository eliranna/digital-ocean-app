import styled from "styled-components/macro";
import { colors, fonts, fontSize, spacing } from '../style'

const Strip = styled.div`
    width: 100%;
    background-color: ${props => props.backgroundColor};
    color: ${props => props.color};
    padding: ${spacing.spacing32} 0px;
`;

export default Strip;