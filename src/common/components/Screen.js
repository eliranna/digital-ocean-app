import styled from "styled-components/macro"
import { fontSize, colors, spacing } from '../style';

const Screen = styled.div`
    position: fixed;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    top: 20%;
    max-width: 450px;
    max-height: 80%;
    background-color: white;
    z-index: 9999999;
`;

export default Screen;