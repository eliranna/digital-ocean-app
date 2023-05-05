import { minWidth } from "@mui/system";
import styled from "styled-components/macro";
import { fontSize, color, fontWeight, spacing } from '../style';

const Card = styled.div`
    position: relative;
    background-color: ${color.white};
    padding: ${spacing.spacing12};
    :before {
        position: absolute;
        top: 0px;
        left: -11.5px;
        width: 100%;
        height: 100%;
        -webkit-filter: blur(19px);
        filter: blur(25px);
        opacity: 0.4;
        z-index: -1;
        background: ${color.coloredBackdrop};
        content: '';
    }
`

export default Card