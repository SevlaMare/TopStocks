// mock data in case API reach free limit use
const fetchedData = [
  {
    "symbol" : "GOOG",
    "historical" : [ {
      "date" : "2020-10-08",
      "open" : 1465.09,
      "high" : 1490.0,
      "low" : 1465.09,
      "close" : 1485.93,
      "adjClose" : 1485.93,
      "volume" : 1187831.0,
      "unadjustedVolume" : 1187831.0,
      "change" : 20.84,
      "changePercent" : 1.422,
      "vwap" : 1480.34,
      "label" : "October 08, 20",
      "changeOverTime" : 0.01422
    }, {
      "date" : "2020-10-07",
      "open" : 1464.290039,
      "high" : 1468.959961,
      "low" : 1436.0,
      "close" : 1460.290039,
      "adjClose" : 1460.290039,
      "volume" : 1745000.0,
      "unadjustedVolume" : 1745000.0,
      "change" : -4.0,
      "changePercent" : -0.273,
      "vwap" : 1455.08333,
      "label" : "October 07, 20",
      "changeOverTime" : -0.00273
    }, {
      "date" : "2020-10-06",
      "open" : 1475.579956,
      "high" : 1486.76001,
      "low" : 1448.589966,
      "close" : 1453.439941,
      "adjClose" : 1453.439941,
      "volume" : 1245400.0,
      "unadjustedVolume" : 1245400.0,
      "change" : -22.14001,
      "changePercent" : -1.5,
      "vwap" : 1462.92997,
      "label" : "October 06, 20",
      "changeOverTime" : -0.015
    }, {
      "date" : "2020-10-05",
      "open" : 1466.209961,
      "high" : 1488.209961,
      "low" : 1464.27002,
      "close" : 1486.02002,
      "adjClose" : 1486.02002,
      "volume" : 1113300.0,
      "unadjustedVolume" : 1113300.0,
      "change" : 19.81006,
      "changePercent" : 1.351,
      "vwap" : 1479.5,
      "label" : "October 05, 20",
      "changeOverTime" : 0.01351
    }, {
      "date" : "2020-10-02",
      "open" : 1462.030029,
      "high" : 1483.199951,
      "low" : 1450.920044,
      "close" : 1458.420044,
      "adjClose" : 1458.420044,
      "volume" : 1284100.0,
      "unadjustedVolume" : 1284100.0,
      "change" : -3.60999,
      "changePercent" : -0.247,
      "vwap" : 1464.18001,
      "label" : "October 02, 20",
      "changeOverTime" : -0.00247
    } ]
  }, {
    "symbol" : "AAPL",
    "historical" : [ {
      "date" : "2020-10-08",
      "open" : 116.25,
      "high" : 116.4,
      "low" : 114.59,
      "close" : 114.97,
      "adjClose" : 114.97,
      "volume" : 8.3477153E7,
      "unadjustedVolume" : 8.3477153E7,
      "change" : -1.28,
      "changePercent" : -1.101,
      "vwap" : 115.32,
      "label" : "October 08, 20",
      "changeOverTime" : -0.01101
    }, {
      "date" : "2020-10-07",
      "open" : 114.620003,
      "high" : 115.550003,
      "low" : 114.129997,
      "close" : 115.080002,
      "adjClose" : 115.080002,
      "volume" : 9.6575E7,
      "unadjustedVolume" : 9.6575E7,
      "change" : 0.46,
      "changePercent" : 0.401,
      "vwap" : 114.92,
      "label" : "October 07, 20",
      "changeOverTime" : 0.00401
    }, {
      "date" : "2020-10-06",
      "open" : 115.699997,
      "high" : 116.120003,
      "low" : 112.25,
      "close" : 113.160004,
      "adjClose" : 113.160004,
      "volume" : 1.614982E8,
      "unadjustedVolume" : 1.614982E8,
      "change" : -2.53999,
      "changePercent" : -2.195,
      "vwap" : 113.84334,
      "label" : "October 06, 20",
      "changeOverTime" : -0.02195
    }, {
      "date" : "2020-10-05",
      "open" : 113.910004,
      "high" : 116.650002,
      "low" : 113.550003,
      "close" : 116.5,
      "adjClose" : 116.5,
      "volume" : 1.062438E8,
      "unadjustedVolume" : 1.062438E8,
      "change" : 2.59,
      "changePercent" : 2.274,
      "vwap" : 115.56667,
      "label" : "October 05, 20",
      "changeOverTime" : 0.02274
    } ]
  }, {
    "symbol" : "FB",
    "historical" : [ {
      "date" : "2020-10-09",
      "open" : 264.519989,
      "high" : 264.630005,
      "low" : 262.170013,
      "close" : 263.045013,
      "adjClose" : 263.045013,
      "volume" : 3278271.0,
      "unadjustedVolume" : 3278271.0,
      "change" : -1.47498,
      "changePercent" : -0.558,
      "vwap" : 263.28168,
      "label" : "October 09, 20",
      "changeOverTime" : -0.00558
    }, {
      "date" : "2020-10-08",
      "open" : 259.75,
      "high" : 264.619995,
      "low" : 259.149994,
      "close" : 263.76001,
      "adjClose" : 263.76001,
      "volume" : 1.62886E7,
      "unadjustedVolume" : 1.62886E7,
      "change" : 4.01001,
      "changePercent" : 1.544,
      "vwap" : 262.51,
      "label" : "October 08, 20",
      "changeOverTime" : 0.01544
    }, {
      "date" : "2020-10-07",
      "open" : 259.209991,
      "high" : 260.179993,
      "low" : 254.820007,
      "close" : 258.119995,
      "adjClose" : 258.119995,
      "volume" : 2.31334E7,
      "unadjustedVolume" : 2.31334E7,
      "change" : -1.09,
      "changePercent" : -0.421,
      "vwap" : 257.70667,
      "label" : "October 07, 20",
      "changeOverTime" : -0.00421
    }, {
      "date" : "2020-10-06",
      "open" : 261.779999,
      "high" : 265.690002,
      "low" : 258.23999,
      "close" : 258.660004,
      "adjClose" : 258.660004,
      "volume" : 1.86969E7,
      "unadjustedVolume" : 1.86969E7,
      "change" : -3.11999,
      "changePercent" : -1.192,
      "vwap" : 260.86333,
      "label" : "October 06, 20",
      "changeOverTime" : -0.01192
    }, {
      "date" : "2020-10-05",
      "open" : 262.200012,
      "high" : 264.869995,
      "low" : 260.839996,
      "close" : 264.649994,
      "adjClose" : 264.649994,
      "volume" : 1.28223E7,
      "unadjustedVolume" : 1.28223E7,
      "change" : 2.44998,
      "changePercent" : 0.934,
      "vwap" : 263.45333,
      "label" : "October 05, 20",
      "changeOverTime" : 0.00934
    }, {
      "date" : "2020-10-02",
      "open" : 261.209991,
      "high" : 265.149994,
      "low" : 259.179993,
      "close" : 259.940002,
      "adjClose" : 259.940002,
      "volume" : 1.63676E7,
      "unadjustedVolume" : 1.63676E7,
      "change" : -1.26999,
      "changePercent" : -0.486,
      "vwap" : 261.42333,
      "label" : "October 02, 20",
      "changeOverTime" : -0.00486
    } ]
  }
]

const fetchDataReducer = (state = [fetchedData], action) => {
  if (action.type === 'STORE_DATA') {
    return [...state, action.data];
  }

  return state;
};

export default fetchDataReducer;
