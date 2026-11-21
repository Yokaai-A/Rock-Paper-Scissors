import './GamePage.css';

function ScoreBoard({ playerScore, botScore, onBack}) {
    const playerWin = playerScore > botScore;

    return (
        <div className="gamepage">
            <button className="back-button" onClick={onBack}>Back</button>

            <h1>{playerWin ? 'YOU WIN!' : 'YOU LOSE'}</h1>

            <div className="gamearea">
                <div className="play-area bot">
                    <h2>BOT</h2>
                    <h1>{botScore}</h1>
                </div>

                <div className="play-area player">
                    <h2>YOU</h2>
                    <h1>{playerScore}</h1>
                </div>
            </div>
        </div>
    );
}

export default ScoreBoard;