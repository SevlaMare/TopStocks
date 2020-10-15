import React from 'react';
import PropTypes from 'prop-types';

const Stock = props => {
  const { close, change, link } = props;

  return (
    <div className="stock">
      <h2>
        {' '}
        {change.toFixed(2)}
        {' '}
        %
        {' '}
      </h2>
      <p>
        {' '}
        {close.toFixed(2)}
        {' '}
        USD
        {' '}
      </p>
      {link}
    </div>
  );
};

Stock.propTypes = {
  close: PropTypes.number.isRequired,
  change: PropTypes.number.isRequired,
  link: PropTypes.node.isRequired,
};

export default Stock;
