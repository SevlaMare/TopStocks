import React from "react";

const fetchedData = [
  {
    "symbol" : "GOOG",
    "historical" : [
      {
        "date" : "2020-10-06",
        "close" : 1453.44,
        "volume" : 1245423.0,
        "changePercent" : -1.5,
      },
      {
        "date" : "2020-10-05",
        "close" : 1486.02002,
        "volume" : 1111500.0,
        "changePercent" : 1.351,
      }
    ],
  },
  {
    "symbol" : "AAPL",
    "historical" : [
      {
        "date" : "2020-10-06",
        "close" : 113.16,
        "volume" : 1.61498212E8,
        "changePercent" : -2.195,
      },
      {
        "date" : "2020-10-05",
        "close" : 116.5,
        "volume" : 1.057208E8,
        "changePercent" : 2.274,
      }
    ]
  },
]

const Detail = props => {
  const { company } = props

  return (
    <div className="stock">
      { fetchedData.map(data => {
        return (
          <div className='detail'>
            <p>{data.symbol}</p>
            <hr></hr>

            {
              data.historical.map(item => {
                return (
                  <div>
                    <p>Date {item.date}</p>
                    <p>{item.close} </p>
                    <p>{item.changePercent} </p>
                  </div>
                )
              })
            }
          </div>
         )})
        }
    </div>
  );
}

export default Detail;