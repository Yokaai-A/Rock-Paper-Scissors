import './ScoreBoard.css';

function ScoreBoard({ playerScore, botScore, onBack, onPlayAgain }) {
    const playerWin = playerScore > botScore;

    return (
        <div className="scoreboard">
            <button className="back-button" onClick={onBack}>Back</button>

            <h1>{playerWin ? 'YOU WIN!' : 'YOU LOSE'}</h1>

            <div className="scoreboard-area">
                <div className="scoreboard-side bot">
                    <h2>BOT</h2>
                    <p>{botScore}</p>
                </div>

                <div className="scoreboard-side player">
                    <h2>YOU</h2>
                    <p>{playerScore}</p>
                </div>
            </div>

            <button className="play-again-button" onClick={onPlayAgain}>Play Again</button>
        </div>
    );
}

export default ScoreBoard;