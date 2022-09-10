import styled from "styled-components/macro"
import { fontSize, colors, spacing } from '../style';

const SectionTitle = styled.div`
    font-size: ${fontSize.fontSize5};
    font-weight: 500;
    text-align: ${props => props.right ? 'right' : 'center'};
`;

export default SectionTitle;