import React from "react";

const Stock = props => {
  const { title, close, change } = props;

  return (
    <div className="stock">
      <h2>{title}</h2>
      <p>{change.toFixed(2)}%</p>
      <p>{close.toFixed(2)} USD</p>
    </div>
  );
}

export default Stock;