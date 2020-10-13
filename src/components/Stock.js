import React from 'react';
import PropTypes from 'prop-types';

const Stock = props => {
  const { title, close, change } = props;

  return (
    <div className="stock">
      <h2>{title}</h2>
      <p>
        {change.toFixed(2)}
        %
      </p>
      <p>
        {close.toFixed(2)}
        USD
      </p>
    </div>
  );
};

Stock.propTypes = {
  title: PropTypes.string.isRequired,
  close: PropTypes.number.isRequired,
  change: PropTypes.number.isRequired,
};

export default Stock;
