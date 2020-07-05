/* eslint-disable no-param-reassign */
import calculateWinner from './gameUtils';

const getPossibleMoves = (squares) => {
  const moveIndexes = [];
  squares.forEach((value, index) => {
    if (value === null) {
      moveIndexes.push(index);
    }
  });
  return moveIndexes;
};

const minimax = (squares, maximizingPlayer, currentPlayer) => {
  const winner = calculateWinner(squares);
  if (winner !== null) {
    return winner === maximizingPlayer
      ? [null, 1]
      : [null, -1];
  }

  const possibleMoves = getPossibleMoves(squares);
  if (possibleMoves.length === 0) {
    return [null, 0];
  }

  const nextPlayer = currentPlayer === 'X'
    ? 'O'
    : 'X';

  let bestMove = null;
  let bestScore = currentPlayer === maximizingPlayer
    ? -Infinity
    : Infinity;

  possibleMoves.forEach((move) => {
    squares[move] = currentPlayer;
    const [returnMove, returnScore] = minimax(squares, maximizingPlayer, nextPlayer);
    squares[move] = null;
    if (currentPlayer === maximizingPlayer) {
      if (returnScore > bestScore) {
        bestScore = returnScore;
        bestMove = move;
      }
    } else if (returnScore < bestScore) {
      bestScore = returnScore;
      bestMove = move;
    }
  });

  return [bestMove, bestScore];
};

const getAiMove = (squares, player) => {
  const [move, score] = minimax(squares, player, player);
  return move;
};

export default getAiMove;
