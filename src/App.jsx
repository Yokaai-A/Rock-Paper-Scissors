import { useState } from 'react';
import MainMenu from './components/MainMenu/MainMenu.jsx';
import GamePage from './components/GamePage/GamePage.jsx';
import './App.css';

function App() {
  const [currPage, setCurrPage] = useState('menu');

  return (
    <>
      {currPage === 'menu' && (
        <MainMenu onPlay={() => setCurrPage('game')} />
      )}

      {currPage === 'game' && (
        <GamePage onBack={() => setCurrPage('menu')} />
      )}
    </>
  )
}

export default App
