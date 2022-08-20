import styled from "styled-components";
import { colors, fonts, fontSize, pageWidth } from '../style'
import Centered from "./Centered";

const Page = styled(Centered)`
    max-width: ${props => (props.nerrow ? pageWidth.maxWidth2XL : pageWidth.maxWidth4XL)};
`;

export default Page;