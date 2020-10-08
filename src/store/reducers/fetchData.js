import getData from '../../connector';

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

const INITIAL_STATE = {
  books: [
    { id: 1, title: 'Book 1', category: 'Action' },
    { id: 2, title: 'Book 2', category: 'Biography' },
    { id: 3, title: 'Book 3', category: 'Learning' },
  ],
};

let FETCH_STATE;
getData().then(data => FETCH_STATE = data);

const fetchDataReducer = (state = INITIAL_STATE, action) => {
  // if (action.type === 'FETCH_STOCKS') {
  //   const id = Math.random();
  //   const bookWithId = { ...action.book, id };

  //   return {
  //     books: [...state.books, bookWithId],
  //   };
  // }

  // if (action.type === 'CHANGE_FILTER') {
  //   const index = state.books.findIndex(b => b.id === action.book.id);

  //   return { books: [...state.books.slice(0, index), ...state.books.slice(index + 1)] };
  // }

  console.log('fetch ready?', state)

  return state;
};

export default fetchDataReducer;
