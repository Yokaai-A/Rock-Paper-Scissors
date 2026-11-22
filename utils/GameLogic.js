export function getResult(player, bot) {
    if(player === bot) {
        return 'tie';
    }

    const playerWin =
        (player === 'rock' && bot === 'scissors') ||
        (player === 'paper' && bot === 'rock') ||
        (player === 'scissors' && bot === 'paper');

    return playerWin ? 'win' : 'lose';
}