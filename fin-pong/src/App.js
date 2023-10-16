import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import MainPage from './pages/MainPage';
import NotFoundPage from './pages/404';
import ChatApp from './pages/ChatApp/ChatApp';
import GamePage from './pages/GamePage';
import React, { useContext } from 'react';
import Context, { myContext } from './context/Context';

function App() {
  // AuthProvider'ın içindeki context'i almak için doğrudan useAuth hook'unu kullanın

  return (
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/LoginPage" element={<LoginPage />} />
          <Route path="/MainPage" element={<MainPage />} />
          <Route path="/404" element={<NotFoundPage />} />
          <Route path="/chat" element={<ChatApp />} />
          <Route path="/GamePage" element={<GamePage />} />
        </Routes>
      </Router>
  );
}

export default App;
