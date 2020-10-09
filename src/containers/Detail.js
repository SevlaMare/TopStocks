import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from 'react-redux';

let renderDetail = () => {
  if (data.length > 0)
    return (
      data[0].map( (data, symbol) => (
        <>
          <Stock key={data.id}
            title={data.symbol}
            close={data.historical[0].close}
            change={data.historical[0].changePercent}
          />

          <li key={data.id}>
            <Link to={`${url}/${data.symbol}`}>{data.symbol}</Link>
          </li>
        </>
      ))
    )

  return null;
}

function Detail() {
  let { stockId } = useParams(); // get end of url
  const data = useSelector(state => state.data); // map state

  console.log('state from detail', data)

  return (
    <div className="detail">
      <h3>{stockId}</h3>
    </div>
  );
}

export default Detail;
