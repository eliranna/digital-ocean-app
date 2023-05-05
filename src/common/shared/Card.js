import { minWidth } from "@mui/system";
import styled from "styled-components/macro";
import { fontSize, color, fontWeight, spacing } from '../style';

const Card = styled.div`
    position: relative;
    background-color: ${color.white};
    padding: ${spacing.spacing12};
    box-shadow: ${color.lightGrayGradient};
`

export default Card