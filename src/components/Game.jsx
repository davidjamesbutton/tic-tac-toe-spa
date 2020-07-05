import React, { useState } from 'react';
import Board from './Board';
import calculateWinner from '../utils/gameUtils';
import getAiMove from '../utils/aiUtil';

const Game = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  const resetGame = () => {
    setSquares(Array(9).fill(null));
    setXIsNext(true);
  };

  const playMove = (player, moveIndex) => {
    const newSquares = squares.slice();
    newSquares[moveIndex] = player;
    setSquares(newSquares);
    setXIsNext(!xIsNext);
  };

  const handleSquareClick = (i) => {
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    const player = xIsNext ? 'X' : 'O';
    playMove(player, i);
  };

  const playAiMove = () => {
    const player = xIsNext ? 'X' : 'O';
    const move = getAiMove(squares, player);
    playMove(player, move);
  };

  const winner = calculateWinner(squares);

  const gameFeedback = winner
    ? `Winner: ${winner}`
    : `Next player: ${xIsNext ? 'X' : 'O'}`;

  const gameBoard = (
    <Board
      squares={squares}
      handleSquareClick={handleSquareClick}
    />
  );

  const resetGameButton = (
    <button type="button" onClick={resetGame}>Reset</button>
  );

  const playAiMoveButton = (
    <button type="button" onClick={playAiMove}>
      Play AI Move
    </button>
  );

  return (
    <>
      <h1>Tic Tac Toe</h1>
      {gameBoard}
      <div className="info-wrapper">
        <h3>{gameFeedback}</h3>
        {resetGameButton}
        {playAiMoveButton}
      </div>
    </>
  );
};

export default Game;
