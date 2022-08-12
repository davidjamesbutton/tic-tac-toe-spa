/* eslint-disable no-param-reassign */
import calculateWinner from './gameUtils';
import randomChoice from './randomUtils';

const getPossibleMoves = (squares: ('X'|'O'|null)[]): number[] => {
  const moves: number[] = [];
  squares.forEach((value, index) => {
    if (value === null) {
      moves.push(index);
    }
  });
  return moves;
};

const minimax = (squares: ('X'|'O'|null)[], maximizingPlayer: 'X'|'O', currentPlayer: 'X'|'O'): { score: number, moves: number[] } => {
  const winner = calculateWinner(squares);
  if (winner !== null) {
    const score = winner === maximizingPlayer ? 1 : -1;
    return { score, moves: [] };
  }

  const possibleMoves = getPossibleMoves(squares);
  if (possibleMoves.length === 0) {
    return { score: 0, moves: [] };
  }

  const nextPlayer = currentPlayer === 'X' ? 'O' : 'X';

  const isMaximizing = currentPlayer === maximizingPlayer;
  const initialScore = isMaximizing ? -Infinity : Infinity;
  const result: { score: number, moves: number[] } = { score: initialScore, moves: [] };

  possibleMoves.forEach((move) => {
    squares[move] = currentPlayer;
    const { score: childScore } = minimax(squares, maximizingPlayer, nextPlayer);
    squares[move] = null;

    if (childScore > result.score) {
      if (isMaximizing) {
        result.score = childScore;
        result.moves = [move];
      }
    } else if (childScore < result.score) {
      if (!isMaximizing) {
        result.score = childScore;
        result.moves = [move];
      }
    } else { // childScore === result.score
      result.moves.push(move);
    }
  });

  return result;
};

const getAiMove = (squares: ('X'|'O'|null)[], player: 'X'|'O'): number => {
  const { moves } = minimax(squares, player, player);
  return randomChoice(moves);
};

export default getAiMove;
