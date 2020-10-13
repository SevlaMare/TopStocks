import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from 'react-redux';

let renderDetail = (data, stockId) => {
  console.log('DATA IS', data)
  const find = data.base.filter(element => element.symbol === stockId);

  return (
    find.map( data => (
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
  );
};

function Detail() {
  let { stockId } = useParams(); // get end of url
  const data = useSelector(state => state.dataR); // map state

  return (
    <div className="detail">
      <h3>{stockId}</h3>
      { renderDetail(data, stockId) }
    </div>
  );
}

export default Detail;
