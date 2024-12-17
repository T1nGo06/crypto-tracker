import React, { useState } from "react";
import MarketCapTooltip from "./MarketCapTooltip";

const CryptoAccordion = ({ coin }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div onClick={() => setIsOpen(!isOpen)}>
        <h2>{coin.name} ({coin.symbol}) {isOpen ? "-" : "+"}</h2>
      </div>
      {isOpen && (
        <div>
          <p>Price USD: {coin.price_usd}</p>
          <p>Price BTC: {coin.price_btc}</p>
          <MarketCapTooltip marketCap={coin.market_cap_usd} />
          <p style={{ color: coin.percent_change_24h < 0 ? "red" : "green" }}>
            Percent Change 24H: {coin.percent_change_24h}%
          </p>
        </div>
      )}
    </div>
  );
};

export default CryptoAccordion;
