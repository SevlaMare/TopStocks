import React from 'react';
import PropTypes from 'prop-types';

const Stock = props => {
  const { title, close, change, link } = props;

  return (
    <div className="stock">
      <h2>{title}</h2>
      <p> {change.toFixed(2)} % </p>
      <p> {close.toFixed(2)} USD </p>
      {link}
    </div>
  );
};

Stock.propTypes = {
  title: PropTypes.string.isRequired,
  close: PropTypes.number.isRequired,
  change: PropTypes.number.isRequired,
  link: PropTypes.string.isRequired,
};

export default Stock;
