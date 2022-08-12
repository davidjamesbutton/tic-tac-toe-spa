import React from 'react';
import PropTypes from 'prop-types';

function Square(props) {
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

Square.defaultProps = {
  value: null,
  onClick: () => null,
};

Square.propTypes = {
  value: PropTypes.string,
  onClick: PropTypes.func,
};

export default Square;
