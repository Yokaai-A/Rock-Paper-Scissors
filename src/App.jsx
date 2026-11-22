import { useState } from 'react';
import MainMenu from './components/MainMenu/MainMenu.jsx';
import GamePage from './components/GamePage/GamePage.jsx';
import ScoreBoard from './components/ScoreBoard/ScoreBoard.jsx';

function App() {
  const [currPage, setCurrPage] = useState('menu');
  const [finalScore, setFinalScore] = useState({player: 0, bot: 0});

  return (
    <>
      {currPage === 'menu' && (
        <MainMenu onPlay={() => setCurrPage('game')} />
      )}

      {currPage === 'game' && (
        <GamePage onBack={() => setCurrPage('menu')} onFinish={(p, b) => { 
          setFinalScore({ player: p, bot: b}); 
          setCurrPage('scoreboard');
        }} />
      )}
      
      {currPage === 'scoreboard' && (
        <ScoreBoard playerScore={finalScore.player} botScore={finalScore.bot} onBack={() => setCurrPage('menu')} onPlayAgain={() => setCurrPage('game')} />
      )}
    </>
  )
}

export default App
