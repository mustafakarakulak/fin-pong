import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    width: 100vw;
    justify-content: center;
    background: rgb(0,0,0);
    background: linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,255,0,1) 50%, rgba(0,0,0,1) 100%);
`;

export const BlurDiv = styled.div`
    display: flex;
    align-items: center;
    padding: 90px 120px;
    gap: 160px;
    justify-content: center;
    background-color: rgba(0,0,0,0.5);
    backdrop-filter: blur(5px);
`;

export const LeftBar = styled.div`
    padding: 20px;
    background-color: transparent;
`;

export const RightBar = styled.div`
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

export const ProfileAccount = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 13px;
    background-color: transparent;
`;

export const ProfileImage = styled.img`
    cursor: pointer;
    width: 150px;
    height: 150px;
    owerflow: hidden;
    border-radius: 50%;
    color: black;
    object-fit: cover;
`;

export const ProfileName = styled.h1`
    cursor: pointer;
    font-size: 24px;
    font-weight: 900;
    color: black;
`;

export const ProfileRank = styled.h1`
    font-size: 20px;
    font-weight: 900;
    color: black;
    padding: 2px;
`;

export const ProfileInfo = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 13px;
    background-color: transparent;
`;

export const ProfileInfoText = styled.h1`
    font-size: 20px;
    font-weight: 900;
    color: black;
`;