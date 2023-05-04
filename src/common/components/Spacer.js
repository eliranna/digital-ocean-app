import styled from "styled-components/macro";

const Spacer = styled.div`
    height: ${props => props.height};
    width: ${props => props.width ? props.width : 0};
`;

export default Spacer;