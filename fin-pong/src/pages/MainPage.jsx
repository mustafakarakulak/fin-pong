import React from "react";
import styled from "styled-components";
import Menu from "../components/Menu";
import Footer from "../components/Footer";

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

const BlurDiv = styled.div`
    display: flex;
    align-items: center;
    padding: 90px 120px;
    gap: 160px;
    justify-content: center;
    background-color: rgba(0,0,0,0.5);
    backdrop-filter: blur(5px);
`;

const LeftBar = styled.div`
    padding: 20px;
    background-color: transparent;
`;

const RightBar = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 130px;
    background-color: transparent;
    @media (min-width: 768px) {
        padding: 40px;
    }
`;

const ProfileAccount = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 13px;
    background-color: transparent;
`;

const ProfileImage = styled.img`
    cursor: pointer;
    width: 150px;
    height: 150px;
    owerflow: hidden;
    border-radius: 50%;
    color: black;
`;

const ProfileName = styled.h1`
    cursor: pointer;
    font-size: 24px;
    font-weight: 900;
    color: black;
`;

const ProfileRank = styled.h1`
    font-size: 20px;
    font-weight: 900;
    color: black;
    padding: 2px;
`;

const ProfileInfo = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 13px;
    background-color: transparent;
`;

const ProfileInfoText = styled.h1`
    font-size: 20px;
    font-weight: 900;
    color: black;
`;

const MainPage = (Username, Ranked, ProfilePhoto, Wins, Lose) => {

    Username = "mkarakul";
    Ranked = 600;
    ProfilePhoto = 'https://cdn.intra.42.fr/users/986bbaa1233d95ebdc27dd5682fbb85d/mkarakul.jpg';
    Wins = 10;
    Lose = 0;

    const handleSettings = () => {
        console.log("Setting pop-up Clicked");
    };

    return (
        <Container>
            <BlurDiv>  
                <LeftBar> <Menu /> </LeftBar>
                <RightBar>
                    <ProfileAccount onClick={handleSettings}>
                        <ProfileImage src={ProfilePhoto} alt="profile-photo"/>
                        <ProfileName>{Username}</ProfileName>
                    </ProfileAccount>
                    <ProfileInfo>
                        <ProfileRank>Rank: {Ranked}</ProfileRank>
                        <ProfileInfoText>Wins: {Wins}</ProfileInfoText>
                        <ProfileInfoText>Lose: {Lose}</ProfileInfoText>
                    </ProfileInfo>
                </RightBar> 
            </BlurDiv>
            <Footer />
        </Container>        
    );
};

export default MainPage;