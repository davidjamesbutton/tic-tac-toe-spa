import React, { useState } from 'react';
import Board from './Board';
import calculateWinner from '../utils/gameUtils';
import getAiMove from '../utils/aiUtil';
import randomChoice from '../utils/randomUtils';

function Game() {
  const [squares, setSquares] = useState<('X'|'O'|null)[]>(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const [oIsHuman, setOIsHuman] = useState(true);

  const resetGame = () => {
    setSquares(Array(9).fill(null));
    setXIsNext(randomChoice([true, false]));
  };

  const playMove = (player: 'X' | 'O', moveIndex: number) => {
    const newSquares = squares.slice();
    newSquares[moveIndex] = player;
    setSquares(newSquares);
    setXIsNext(!xIsNext);
  };

  const handleSquareClick = (i: number) => {
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

  if (!xIsNext && !oIsHuman) {
    playAiMove();
  }

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
    <button type="button" className="mr-1" onClick={resetGame}>
      Reset
    </button>
  );

  const playerOChangeButton = (
    <button type="button" onClick={() => setOIsHuman(!oIsHuman)}>
      Player O:
      {' '}
      {oIsHuman ? 'Human' : 'AI'}
    </button>
  );

  return (
    <>
      <h1>Tic Tac Toe</h1>
      {gameBoard}
      <div className="info-wrapper">
        <h3>{gameFeedback}</h3>
        {resetGameButton}
        {playerOChangeButton}
      </div>
    </>
  );
}

export default Game;
