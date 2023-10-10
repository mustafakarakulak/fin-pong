import React from "react";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    width: 100vw;
    justify-content: center;
    background: rgb(0,0,0);
    background: linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,255,0,1) 50%, rgba(0,0,0,1) 100%);
`;

const Header1 = styled.h1`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 13px;
    font-size: 200px;
    font-weight: 900;
    color: black;
    font-family: 'Quicksand', sans-serif;
`;
const NotFoundPage = () => {
    return (
        <Container>
            <Header1>404</Header1>
            <br/>
            <Header1>Not Found</Header1>
        </Container>
    );
}

export default NotFoundPage;