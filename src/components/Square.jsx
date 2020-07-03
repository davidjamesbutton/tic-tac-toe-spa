import React from 'react';
import PropTypes from 'prop-types';

const Square = (props) => {
  const { value } = props;

  return (
    <button
      type="button"
      className="square"
      onClick={() => props.onClick()}
    >
      {value}
    </button>
  );
};

Square.propTypes = {
  value: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Square;
