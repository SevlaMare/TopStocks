import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Detail() {
  const { stockId } = useParams(); // get end of url
  const data = useSelector(state => state.dataR); // map state
  const find = data.base.filter(element => element.symbol === stockId);

  return (
    <div>
      { find.map(data => (
        <div className="detail" key={data.id}>
          <h3 className="title">{stockId}</h3>

          { data.historical.map(item => (
            <div className="stock-day" key={item.id}>
              <p>
                {' '}
                Date
                {item.date}
              </p>
              <p>
                {' '}
                Change
                {item.changePercent.toFixed(2)}
                {' '}
                %
                {' '}
              </p>
              <p>
                {' '}
                Open
                {item.open.toFixed(2)}
                {' '}
                USD
              </p>
              <p>
                {' '}
                Close
                {item.close.toFixed(2)}
                {' '}
                USD
              </p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Detail;
