import React from "react";
import './LoginPage.css'
//import {useNavigate} from 'react-router-dom';
import AuthorizeButton from '../components/AuthorizeButton';
import styled from "styled-components";
import Footer from "../components/Footer";

const Banner = styled.img`
    display: block;
    top: 0;
    left: 0;
    width: 50%;
`;

const LoginPage = () => {
    return (
    <section>
        <span/><span/><span/><span/><span/><span/><span/><span/><span/><span/><span/><span/><span/><span/><span/><span/><span/><span/><span/><span/><span/><span/><span/><span/><span/><span/><span/><span/><span/><span/><span/><span/><span/><span/><span/><span/><span/><span/><span/><span/><span/><span/><span/><span/><span/><span/><span/><span/><span/><span/><span/><span/><span/><span/><span/><span/><span/><span/><span/><span/><span/><span/><span/><span/><span/><span/><span/><span/><span/><span/><span/><span/><span/><span/><span/><span/><span/><span/><span/><span/><span/><span/><span/><span/><span/><span/><span/><span/><span/><span/><span/><span/><span/><span/><span/><span/><span/><span/><span/><span/><span/><span/><span/><span/><span/><span/><span/><span/><span/><span/><span/><span/><span/><span/><span/><span/><span/><span/><span/><span/><span/><span/><span/><span/><span/><span/><span/><span/>
        <div className="signin"> 
            <div className="content"> 
            <Banner src={require('./logo.png')} alt="banner"/>
                    <div className="form"> 
                        <div className="inputBox"> 
                            <AuthorizeButton address='/MainPage' />
                            <Footer style={{ color: 'white' }}/>
                        </div> 
                    </div> 
            </div> 
        </div>
   </section>
    );
}

export default LoginPage;