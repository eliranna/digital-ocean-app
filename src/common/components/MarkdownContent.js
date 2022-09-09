import styled from "styled-components/macro";
import { device, fontSize, spacing } from '../style'

export default styled.div`
    display: flex;
    flex-direction: column;
    font-size: ${fontSize.fontSize21};
    ol li {
        margin-bottom: ${spacing.spacing6};
    }
    ol li:last-child {
        margin-botton: 0px;
    }
`