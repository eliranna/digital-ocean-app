import styled from "styled-components/macro";
import { device } from '../style'

export default styled.div`
    @media ${device.mobileL} {
        display: none;
    }
`