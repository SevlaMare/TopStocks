import React from "react";
import { useParams } from "react-router-dom";

function Detail() {
  let { stockId } = useParams(); // get end of url

  return (
    <h3>{stockId}</h3>
  );
}

export default Detail;
