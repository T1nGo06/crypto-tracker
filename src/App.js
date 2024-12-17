import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchBar from "./components/SearchBar";
import CryptoList from "./components/CryptoList";
import UpdateButton from "./components/UpdateButton";
import "./styles.css";

const App = () => {
  const [cryptoData, setCryptoData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  // Загрузка данных из CoinLore API
  const fetchData = async () => {
    try {
      const response = await axios.get("https://api.coinlore.net/api/tickers/");
      setCryptoData(response.data.data);
      setFilteredData(response.data.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Обновление данных
  const handleUpdate = () => {
    fetchData();
  };

  // Поиск по данным
  const handleSearch = (query) => {
    const filtered = cryptoData.filter((coin) =>
      coin.name.toLowerCase().includes(query.toLowerCase()) ||
      coin.symbol.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredData(filtered);
  };

  return (
    <div className="app-container">
      <h1>Cryptocurrency Prices</h1>
      <UpdateButton onUpdate={handleUpdate} />
      <SearchBar onSearch={handleSearch} />
      <CryptoList data={filteredData} />
    </div>
  );
};

export default App;
