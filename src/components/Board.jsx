import React from 'react';
import PropTypes from 'prop-types';
import Square from './Square';

const Board = (props) => {
  const {
    squares,
    handleSquareClick,
  } = props;

  return (
    <div className="board">
      {squares.map((square, index) => (
        <Square
          // eslint-disable-next-line react/no-array-index-key
          key={`square-${index}`}
          value={square}
          onClick={() => handleSquareClick(index)}
        />
      ))}
    </div>
  );
};

Board.propTypes = {
  squares: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleSquareClick: PropTypes.func.isRequired,
};

export default Board;
