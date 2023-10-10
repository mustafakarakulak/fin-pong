//import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import './App.css';
import LoginPage from './pages/LoginPage';
import MainPage from './pages/MainPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NotFoundPage from './pages/404';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/LoginPage" element={<LoginPage />} />
        <Route path="/MainPage" element={<MainPage />} />
        <Route path="/404" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;
