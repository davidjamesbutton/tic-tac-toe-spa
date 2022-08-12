import React from 'react';

interface SquareProps {
  value: 'X'|'O'|null,
  onClick: () => void
}

function Square(props: SquareProps) {
  const { value, onClick } = props;

  const className = value
    ? `square square-${value.toLowerCase()}`
    : 'square square-empty';

  return (
    <button
      type="button"
      className={className}
      onClick={onClick}
    >
      {value}
    </button>
  );
}

export default Square;
