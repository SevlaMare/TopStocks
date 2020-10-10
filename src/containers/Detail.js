import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from 'react-redux';

let renderDetail = (data) => {
  return (
    data[0].map( (data, symbol) => (
      <>
        <p>Company: {data.symbol}</p>
        { data.historical.map(item => {
          return <p>{item.date}Serie x</p>
        }) }

        <p>Open {data.historical[0].open}</p>
        <p>Close {data.historical[0].close}</p>

        <p>Change {data.historical[0].changePercent}</p>
        <hr></hr>
      </>
    ))
  )
}

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
