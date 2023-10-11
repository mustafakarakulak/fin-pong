import React from 'react';
import styled from 'styled-components';
import './Button.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Button = styled.button`
    background-color: #222;
    border: 3px solid black;
    border-radius: 10px;
    width: 250px;
    color: #0f0;
    cursor: pointer;
    font-size: 27px;
    line-height: 10px;
    margin: 6px;
    padding: 30px;
    
    text-align: center;
    text-transform: uppercase;
    font-family: 'Montserrat', sans-serif;
    font-weight: 900;

    @media (min-width: 768px) {
        padding: 30px;
    }
`;

const Container = styled.div`
    display: flex;
    padding 20px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Menu = () => {

    const handleLogout = () => {
        console.log("anan");
        axios.get("http://localhost:5001/api/logout").then(res => {
            if(res.data){
                console.log("anan");
                window.location.href = "/";
                console.log("logout success");
            }
        })
    }
    
    const navigate = useNavigate();
    
    const handleClick = (address) => {
        navigate(address);
    }

    return (
        <Container>
            <Button className='mainmenu' onClick={() => handleClick("/404")}> Play </Button>
            <Button className='mainmenu' onClick={() => handleClick("/chat")}> Chats </Button>
            <Button className='mainmenu' onClick={handleLogout}> Log Out </Button>
        </Container>
    )
};

export default Menu;