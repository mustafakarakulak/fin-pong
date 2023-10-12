import React, { useContext } from "react";
import Menu from "../components/Menu";
import Footer from "../components/Footer";
import { myContext } from "../context/Context";
import { Container, BlurDiv, LeftBar, RightBar, ProfileAccount, ProfileImage, ProfileName, ProfileInfo, ProfileRank, ProfileInfoText } from "../components/MainPageComp";

const MainPage = (Ranked, Wins, Lose) => {
    Ranked = 600;
    Wins = 10;
    Lose = 0;

    const userObject = useContext(myContext);

    const handleSettings = () => {
        console.log("Setting pop-up Clicked");
    };

    return (
        <Container>
            <BlurDiv>
                <LeftBar> <Menu /> </LeftBar>
                <RightBar>
                    <ProfileAccount onClick={handleSettings}>
                        <ProfileImage src={userObject._json.image.link} alt="profile-photo" />
                        <ProfileName>{userObject.displayName}</ProfileName>
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