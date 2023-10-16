//import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import './App.css';
import LoginPage from './pages/LoginPage';
import MainPage from './pages/MainPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NotFoundPage from './pages/404';
import ChatApp from "./pages/ChatApp/ChatApp";
import { useContext } from "react";
import Context, { myContext } from './context/Context';
import GamePage from "./pages/GamePage";

function App() {
  const userObject = useContext(myContext);
  return (
    <Context>
    <Router>
      <Routes>
        <Route path="/" element={userObject ? <MainPage/> : <LoginPage />} />
        <Route path="/LoginPage" element={<LoginPage />} />
        <Route path="/MainPage" element={userObject ? <MainPage /> : <LoginPage/>} />
        <Route path="/404" element={<NotFoundPage />} />
        <Route path='/chat' element={userObject ? <ChatApp /> : <LoginPage/>} />
        <Route path='/GamePage' element={userObject ? <GamePage /> : <LoginPage/>} />
      </Routes>
    </Router>
    </Context>
  );
}

export default App;
