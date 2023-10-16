import React from "react";
import './LoginPage.css'
import AuthorizeButton from '../components/AuthorizeButton';
import styled from "styled-components";
import Footer from "../components/Footer";
import SqauareArray from "../components/SquareArray";

const Banner = styled.img`
    display: block;
    top: 0;
    left: 0;
    width: 50%;
`;

const LoginPage = () => {
    return (
    <section>
        <SqauareArray/><SqauareArray/><SqauareArray/><SqauareArray/><SqauareArray/><SqauareArray/><SqauareArray/><SqauareArray/><SqauareArray/><SqauareArray/><SqauareArray/><SqauareArray/><SqauareArray/><SqauareArray/><SqauareArray/><SqauareArray/><SqauareArray/><SqauareArray/><SqauareArray/>
        <div className="signin"> 
            <div className="content"> 
            <Banner src={require('../assets/logo.png')} alt="banner"/>
                    <div className="form"> 
                        <div className="inputBox"> 
                            <AuthorizeButton/>
                            <Footer/>
                        </div> 
                    </div> 
            </div> 
        </div>
   </section>
    );
}

export default LoginPage;