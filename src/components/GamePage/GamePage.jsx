import './GamePage.css';
import { useState, useEffect, useRef } from 'react';
import rock from '../../assets/Rock.png'
import paper from '../../assets/Paper.png'
import scissors from '../../assets/Scissors.png'

function GamePage({ onBack, onFinish }) {
    const [playerChoose, setPlayerChoose] = useState('rock');
    const [botChoose, setBotChoose] = useState('rock');
    const [playerScore, setPlayerScore] = useState(0)
    const [botScore, setBotScore] = useState(0)
    const [result, setResult] = useState('');
    const [isFinish, setisFinish] = useState(false);

    function HandlePlay() {
        if (isFinish) {
            return;
        }

        const options = ['rock', 'paper', 'scissors']
        const random = options[Math.floor(Math.random() * options.length)];
        setBotChoose(random);

        let newPlayerScore = playerScore;
        let newBotScore = botScore;

        if(random === playerChoose) {
            setResult('TIE!');
        } else if((playerChoose === 'rock' && random === 'scissors') || (playerChoose === 'paper' && random === 'rock') || (playerChoose === 'scissors' && random === 'paper')) {
            newPlayerScore = playerScore + 1;
            setPlayerScore(prev => prev + 1);
            setResult('You Win!');
        } else {
            newBotScore = botScore + 1
            setBotScore(prev => prev + 1);
            setResult('You lose!');
        }

        if(newPlayerScore === 3 || newBotScore === 3) {
            setisFinish(true);
            setTimeout(() => onFinish(newPlayerScore, newBotScore), 1000);
        }
    }

    const hands = {
        'rock' : rock,
        'paper' : paper,
        'scissors' : scissors
    }

    return (
        <div className="gamepage">
            <button className="back-button" disabled={isFinish} onClick={onBack}>Back</button>

            <div className="score">
                <p>YOU {playerScore} : {botScore} BOT</p>
                <p>{result}</p>
            </div>

            <h1>Game Arena</h1>
            
            <div className="gamearea">
                <div className="play-area bot">
                    <h2>BOT</h2>
                    <div className="handbox">
                        <img src={hands[botChoose]} alt={botChoose} />
                    </div>
                </div>

                <div className="play-area player">
                    <h2>YOU</h2>
                    <div className="handbox">
                        <img src={hands[playerChoose]} alt={playerChoose} />
                    </div>
                </div>
            </div>

            <div className="choice">
                <p>Choose your hand!</p>

                <div className="choice-button">
                    <button disabled={isFinish} onClick={() => setPlayerChoose('rock')}>Rock</button>
                    <button disabled={isFinish} onClick={() => setPlayerChoose('paper')}>Paper</button>
                    <button disabled={isFinish} onClick={() => setPlayerChoose('scissors')}>Scissors</button>
                </div>

                <button disabled={isFinish} className="play-button" onClick={HandlePlay}>PLAY!</button>
            </div>

        </div>
    )
}

export default GamePage;