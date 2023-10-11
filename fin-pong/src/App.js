//import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import './App.css';
import LoginPage from './pages/LoginPage';
import MainPage from './pages/MainPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NotFoundPage from './pages/404';
import ChatApp from "./pages/ChatApp/ChatApp";
import { useContext } from "react";
import Context, { myContext } from './Context';

function App() {
  const userObject = useContext(myContext);
  console.log("user",userObject);
  return (
    <Context>
    <Router>
      <Routes>
        <Route path="/" element={userObject ? <MainPage/> : <LoginPage />} />
        <Route path="/LoginPage" element={<LoginPage />} />
        <Route path="/MainPage" element={userObject ? <MainPage /> : <LoginPage/>} />
        <Route path="/404" element={<NotFoundPage />} />
        <Route path='/chat' element={userObject ? <ChatApp /> : <LoginPage/>} />
      </Routes>
    </Router>
    </Context>
  );
}

export default App;
