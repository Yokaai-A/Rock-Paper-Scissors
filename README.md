# Rock Paper Scissors

A simple Rock Paper Scissors game built with React and Vite. Play against a bot and be the first to reach 3 points to win the match!

## How to Play

1. Start the game by clicking the **Play!** button on the main menu.
2. Choose one of the three options: Rock, Paper, or Scissors.
3. Press **PLAY!** to begin the round. Both hands will shake three times before revealing the player's and bot's choices.
4. Points are awarded based on the result:
   - Win: You get 1 point.
   - Lose: The bot gets 1 point.
   - Draw: No points are awarded.
5. The first player to reach 3 points wins the game and proceeds to the final scoreboard.

## Getting Started

Make sure you have Node.js installed before running the project.

Clone the repository and install its dependencies:

```bash
git clone https://github.com/Yokaai-A/Rock-Paper-Scissors.git
cd Rock-Paper-Scissors
npm install
```

Start the development server:

```bash
npm run dev
```

Open the local URL displayed in your terminal.

## Technical Overview

This project uses React state to manage navigation between screens instead of using React Router.

The `currPage` state in `App.jsx` determines which screen is currently displayed. This approach keeps the application simple and works well for a game with only a few screens.

## Credits & Notes

- The hand illustrations for Rock, Paper, and Scissors were recreated by me using as a visual reference. The game title artwork was independently designed and illustrated by me.

Illustration Reference: [https://www.shutterstock.com/image-vector/hands-making-rock-paper-scissors-gestures-2545616509](https://www.shutterstock.com/image-vector/hands-making-rock-paper-scissors-gestures-2545616509)
