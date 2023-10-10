import React from 'react';
import styled from 'styled-components';
import './Button.css';
import { useNavigate } from 'react-router-dom';

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
`;

const Container = styled.div`
    display: flex;
    padding 20px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Menu = () => {
    
    const navigate = useNavigate();
    
    const handleClick = (address) => {
        navigate(address);
    }

    return (
        <Container>
            <Button className='mainmenu' onClick={() => handleClick("/404")}> Play </Button>
            <Button className='mainmenu' onClick={() => handleClick("/404")}> Chats </Button>
            <Button className='mainmenu' onClick={() => handleClick("/LoginPage")}> Log Out </Button>
        </Container>
    )
};

export default Menu;