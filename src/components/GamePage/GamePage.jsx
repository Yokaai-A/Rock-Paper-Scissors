import './GamePage.css';
import { useState } from 'react';
import rock from '../../assets/Rock.png'
import paper from '../../assets/Paper.png'
import scissors from '../../assets/Scissors.png'

function GamePage({ onBack }) {
    const [playerChoose, setPlayerChoose] = useState('rock');
    const [botChoose, setBotChoose] = useState('rock');
    const [result, setResult] = useState('');

    function HandlePlay() {
        const options = ['rock', 'paper', 'scissors']
        setBotChoose(options[Math.floor(Math.random() * options.length)]);
    }

    const hands = {
        'rock' : rock,
        'paper' : paper,
        'scissors' : scissors
    }

    return (
        <div className="gamepage">
            <button className="back-button" onClick={onBack}>Back</button>

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
                    <button onClick={() => setPlayerChoose('rock')}>Rock</button>
                    <button onClick={() => setPlayerChoose('paper')}>Paper</button>
                    <button onClick={() => setPlayerChoose('scissors')}>Scissors</button>
                </div>

                <button className="play-button" onClick={HandlePlay}>PLAY!</button>
            </div>

        </div>
    )
}

export default GamePage;