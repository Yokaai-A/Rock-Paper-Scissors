import './GamePage.css';
import { useState } from 'react';
import rock from '../../assets/Rock.png'
import paper from '../../assets/Paper.png'
import scissors from '../../assets/Scissors.png'
import { getResult } from '../../../utils/GameLogic.js';

const hands = {
    'rock': rock,
    'paper': paper,
    'scissors': scissors
}

const WINNING_SCORE = 3;

function GamePage({ onBack, onFinish }) {
    const [playerChoose, setPlayerChoose] = useState('rock');
    const [botChoose, setBotChoose] = useState('rock');
    const [playerScore, setPlayerScore] = useState(0)
    const [botScore, setBotScore] = useState(0)
    const [result, setResult] = useState('');
    const [isFinish, setIsFinish] = useState(false);
    const [isShaking, setIsShaking] = useState(false);

    function handlePlay() {
        if (isFinish || isShaking) {
            return;
        }

        setResult('');
        setIsShaking(true);
        setTimeout(showResult, 1000);
    }

    function showResult() {
        setIsShaking(false);

        const options = ['rock', 'paper', 'scissors']
        const random = options[Math.floor(Math.random() * options.length)];
        setBotChoose(random);

        const outputPerRound = getResult(playerChoose, random);

        let newPlayerScore = playerScore;
        let newBotScore = botScore;

        if (outputPerRound === 'tie') {
            setResult('TIE!');
        } else if (outputPerRound === 'win') {
            newPlayerScore = playerScore + 1;
            setPlayerScore(prev => prev + 1);
            setResult('You Win!');
        } else {
            newBotScore = botScore + 1
            setBotScore(prev => prev + 1);
            setResult('You lose!');
        }

        if (newPlayerScore === WINNING_SCORE || newBotScore === WINNING_SCORE) {
            setIsFinish(true);
            setTimeout(() => onFinish(newPlayerScore, newBotScore), 1000);
        }
    }

    return (
        <div className="gamepage">
            <button className="back-button" disabled={isFinish || isShaking} onClick={onBack}>Back</button>

            <div className="score">
                <p> BOT {botScore} : YOU {playerScore}</p>
                <p>{result}</p>
            </div>

            <h1>Game Arena</h1>
            
            <div className="gamearea">
                <div className="play-area bot">
                    <h2>BOT</h2>
                    <div className={isShaking ? 'handbox shake' : 'handbox'}>
                        <img src={isShaking ? hands.rock : hands[botChoose]} alt={botChoose} />
                    </div>
                </div>

                <div className="play-area player">
                    <h2>YOU</h2>
                    <div className={isShaking ? 'handbox shake' : 'handbox'}>
                        <img src={isShaking ? hands.rock : hands[playerChoose]} alt={playerChoose} />
                    </div>
                </div>
            </div>

            <div className="choice">
                <p>Choose your hand!</p>

                <div className="choice-button">
                    <button disabled={isFinish || isShaking} onClick={() => setPlayerChoose('rock')}>Rock</button>
                    <button disabled={isFinish || isShaking} onClick={() => setPlayerChoose('paper')}>Paper</button>
                    <button disabled={isFinish || isShaking} onClick={() => setPlayerChoose('scissors')}>Scissors</button>
                </div>

                <button disabled={isFinish || isShaking} className="play-button" onClick={handlePlay}>PLAY!</button>
            </div>

        </div>
    )
}

export default GamePage;