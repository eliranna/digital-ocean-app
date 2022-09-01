import styled from "styled-components/macro";
import { colors, fonts, fontSize, pageWidth } from '../style'
import Centered from "./Centered";

const Page = styled(Centered)`
    max-width: ${props => (props.nerrow ? pageWidth.maxWidthXL : (props.wide ? pageWidth.maxWidth5XL : pageWidth.maxWidth4XL))};
`;

export default Page;