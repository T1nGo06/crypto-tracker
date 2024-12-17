import React from "react";
import CryptoAccordion from "./CryptoAccordion";

const CryptoList = ({ data }) => {
  return (
    <div>
      {data.map((coin) => (
        <CryptoAccordion key={coin.id} coin={coin} />
      ))}
    </div>
  );
};

export default CryptoList;
