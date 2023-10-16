import React, { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import MainPage from './pages/MainPage';
import NotFoundPage from './pages/404';
import ChatApp from './pages/ChatApp/ChatApp';
import Context, { myContext } from './context/Context';
import GamePage from './pages/GamePage';

function App() {
  const userObject = useContext(myContext);

  return (
    <Context>
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/LoginPage" element={<LoginPage />} />
          <Route path="/MainPage" element={<MainPage />} />
          <Route path="/404" element={<NotFoundPage />} />
          <Route path="/chat" element={userObject ? <ChatApp /> : <LoginPage />} />
          <Route path="/GamePage" element={userObject ? <GamePage /> : <LoginPage />}/>
        </Routes>
      </Router>
    </Context>
  );
}

export default App;
