import styled from "styled-components/macro";
import { device } from '../style'

export default styled.div`
    display: none;
    @media ${device.mobileL} {
        display: unset;
    }
`