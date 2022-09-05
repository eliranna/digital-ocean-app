import styled from "styled-components/macro";
import Spacer from "./Spacer";
import { device } from '../style'

export default styled(Spacer)`
    display: none;
    @media ${device.mobileL} {
        display: block;
    }
`