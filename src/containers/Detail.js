import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from 'react-redux';

let renderDetail = (data) => (
  data[0].map( (data, symbol) => (
    <>
      <p>Company: {data.symbol}</p>
      { data.historical.map(item => {
        return (
          <>
            <p>{item.date}</p>
            <p>{item.changePercent.toFixed(2)}% {item.open.toFixed(2)} {item.close.toFixed(2)}</p>
            <hr></hr>
          </>
        )
      }) }
      <hr></hr>
    </>
  ))
)

function Detail() {
  let { stockId } = useParams(); // get end of url
  const data = useSelector(state => state.data); // map state

  return (
    <div className="detail">
      <h3>{stockId}</h3>
      { renderDetail(data) }
    </div>
  );
}

export default Detail;
