import React from 'react';
import Square from './Square';

interface BoardProps {
  squares: ('X'|'O'|null)[],
  handleSquareClick: (i: number) => void
}

function Board(props: BoardProps) {
  const {
    squares,
    handleSquareClick,
  } = props;

  return (
    <div className="board">
      {squares.map((square, index) => (
        <Square
          key={`square-${index}`}
          value={square}
          onClick={() => handleSquareClick(index)}
        />
      ))}
    </div>
  );
}

export default Board;
