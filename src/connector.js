import regeneratorRuntime from "regenerator-runtime";

const getData = async (url) => {
  const response = await fetch(url, {
    method: 'GET',
    mode: 'cors',
    headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
  });

  return response.json();
};

// getData(url).then((data) => { console.log(data)}).catch(err => displayError(err));

export default getData;