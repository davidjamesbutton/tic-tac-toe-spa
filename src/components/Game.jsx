import React, { useState } from 'react';
import Board from './Board';
import calculateWinner from '../utils/gameUtils';

const Game = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  const resetGame = () => {
    setSquares(Array(9).fill(null));
    setXIsNext(true);
  };

  const handleSquareClick = (i) => {
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    const newSquares = squares.slice();
    newSquares[i] = xIsNext ? 'X' : 'O';
    setSquares(newSquares);
    setXIsNext(!xIsNext);
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

  return (
    <>
      <h1>Tic Tac Toe</h1>
      {gameBoard}
      <div className="info-wrapper">
        <h3>{gameFeedback}</h3>
        {resetGameButton}
      </div>
    </>
  );
};

export default Game;
