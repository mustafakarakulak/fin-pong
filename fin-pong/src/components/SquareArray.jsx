import Section1 from "./SquareSpan";
import styled from "styled-components";


const Container = styled.div`
    display: flex;
    padding 20px;
    flex-direction: column;
    gap: 2px;
`;

const SqauareArray = () => {
    return (
        <Container>
        <Section1/><Section1/><Section1/><Section1/><Section1/><Section1/><Section1/><Section1/><Section1/><Section1/><Section1/><Section1/><Section1/><Section1/><Section1/><Section1/><Section1/><Section1/><Section1/><Section1/><Section1/><Section1/><Section1/><Section1/><Section1/><Section1/><Section1/><Section1/>
        </Container>
    );
    }

export default SqauareArray;