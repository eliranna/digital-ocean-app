import styled from "styled-components/macro";
import { fontSize, color, fontWeight, spacing } from '../style';

const CardsBoard = styled.div`
    margin: 0 auto;
    display: grid;
    grid-gap: ${spacing.spacing20};
    grid-template-columns: auto auto auto;
`

export default CardsBoard