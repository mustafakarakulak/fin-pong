import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ScoreDiv = styled.div`
  display: flex;
  flex-direction: row;
  background: #181818;
  align-items: center;
  justify-content: space-around;
  width: 100%;
`;

const PlayerName = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  color: black;
  margin: 0;
`;

const ScoreNum = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  color: black;
  margin: 0;
`;

const Canvas = styled.canvas`
  border-top: solid 5px black;
  border-bottom: solid 5px black;
  border-left: dotted 5px black;
  border-right: dotted 5px black;
  cursor: none;
`;

const Paddle = styled.div`
  width: 20px;
  height: 100px;
  background: black;
`;

const Ball = styled.div`
  width: 20px;
  height: 20px;
  background: black;
  border-radius: 50%;
`;

const GamePage = () => {
  const [player1Score, setPlayer1Score] = useState(0);
  const [player2Score, setPlayer2Score] = useState(0);

  const [ball, setBall] = useState({
    x: 495,
    y: 245,
    size: 20,
    xMove: 1,
    yMove: 1,
    speed: 2,
  });

  const [paddle1, setPaddle1] = useState({ x: 10, y: 50 });
  const [paddle2, setPaddle2] = useState({ x: 980, y: 50 });

  useEffect(() => {
    const handleKeyPress = (e) => {
      // Oyuncu 1 kontrolleri
      if (e.code === 'KeyW' && paddle1.y > 0) {
        setPaddle1((prev) => ({ ...prev, y: prev.y - 10 }));
      } else if (e.code === 'KeyS' && paddle1.y + 100 < 500) {
        setPaddle1((prev) => ({ ...prev, y: prev.y + 10 }));
      }

      // Oyuncu 2 kontrolleri
      if (e.code === 'ArrowUp' && paddle2.y > 0) {
        setPaddle2((prev) => ({ ...prev, y: prev.y - 10 }));
      } else if (e.code === 'ArrowDown' && paddle2.y + 100 < 500) {
        setPaddle2((prev) => ({ ...prev, y: prev.y + 10 }));
      }
    };

    document.addEventListener('keydown', handleKeyPress);

    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [paddle1, paddle2]);

  useEffect(() => {
    const updateGame = () => {
      setBall((prev) => ({
        ...prev,
        x: prev.x + prev.xMove * prev.speed,
        y: prev.y + prev.yMove * prev.speed,
      }));

      // Topun çarpmalarını kontrol et
      if (ball.x < 0 || ball.x > 980) {
        // Sağ veya sol sınıra çarptıysa
        setBall((prev) => ({ ...prev, xMove: -prev.xMove }));
      }

      if (ball.y < 0 || ball.y > 480) {
        // Üst veya alt sınıra çarptıysa
        setBall((prev) => ({ ...prev, yMove: -prev.yMove }));
      }

      // Palet çarpmalarını kontrol et
      if (
        ball.x < paddle1.x + 10 &&
        ball.y > paddle1.y &&
        ball.y < paddle1.y + 100
      ) {
        setBall((prev) => ({ ...prev, xMove: -prev.xMove }));
      }

      if (
        ball.x > paddle2.x - 20 &&
        ball.y > paddle2.y &&
        ball.y < paddle2.y + 100
      ) {
        setBall((prev) => ({ ...prev, xMove: -prev.xMove }));
      }

      // Skor kontrolü
      if (ball.x < 0) {
        setPlayer2Score((prev) => prev + 1);
        resetGame();
      }

      if (ball.x > 980) {
        setPlayer1Score((prev) => prev + 1);
        resetGame();
      }
    };

    const gameLoop = setInterval(updateGame, 16);

    return () => clearInterval(gameLoop);
  }, [ball, paddle1, paddle2, player1Score, player2Score]);

  const resetGame = () => {
    setBall({
      x: 495,
      y: 245,
      size: 20,
      xMove: Math.random() > 0.5 ? 1 : -1,
      yMove: Math.random() > 0.5 ? 1 : -1,
      speed: 2,
    });

    setPaddle1({ x: 10, y: 50 });
    setPaddle2({ x: 980, y: 50 });
  };

  return (
    <Container>
      <ScoreDiv>
        <PlayerName>Player 1</PlayerName>
        <PlayerName>Player 2</PlayerName>
      </ScoreDiv>
      <ScoreDiv>
        <ScoreNum>{player1Score}</ScoreNum>
        <ScoreNum>{player2Score}</ScoreNum>
      </ScoreDiv>
      <Canvas>
        <Paddle style={{ left: `${paddle1.x}px`, top: `${paddle1.y}px` }} />
        <Paddle style={{ left: `${paddle2.x}px`, top: `${paddle2.y}px` }} />
        <Ball style={{ left: `${ball.x}px`, top: `${ball.y}px` }} />
      </Canvas>
    </Container>
  );
};

export default GamePage;
