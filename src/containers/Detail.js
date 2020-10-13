import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const renderDetail = (data, stockId) => {
  const find = data.base.filter(element => element.symbol === stockId);

  return (
    // console.log(sliced[0].historical)
    // { sliced[0].historical.map(item => {
    //   console.log('find', item)
    // })}

    find.map(data => (
      <>
        <p> Company: {data.symbol} </p>

        { data.historical.map(item => (
          <>
            <p> Day {item.date} </p>
            <p> Change {item.changePercent.toFixed(2)} % </p>
            <p> Open  {item.open.toFixed(2)} </p>
            <p> Close {item.close.toFixed(2)} </p>
          </>
        )) }
      </>
    ))
  );
};

function Detail() {
  const { stockId } = useParams(); // get end of url
  const data = useSelector(state => state.dataR); // map state

  return (
    <div className="detail">
      <h3 className="title">{stockId}</h3>
      { renderDetail(data, stockId) }
    </div>
  );
}

export default Detail;
