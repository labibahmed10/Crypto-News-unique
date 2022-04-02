import React, { useEffect, useState } from "react";
import CoinCard from "../CoinCard/CoinCard";
import Spinner from "../Spinner/Spinner2";

const Coins = () => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState([]);

  useEffect(() => {
    setLoading(false);
    fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false"
    )
      .then((res) => res.json())
      .then((data) => setCoins(data));
    setLoading(true);
  }, []);

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <section>
          <h1 className="text-center font-semibold md:text-4xl text-xl font-mono mt-5">
            Top 50 Crypto Currencies
          </h1>
          <p className="text-center py-3 md:text-2xl">Available Now: {coins.length} </p>

          <section className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 my-5">
            {coins.map((coin) => (
              <CoinCard key={coin.id} coin={coin}></CoinCard>
            ))}
          </section>
        </section>
      )}
    </>
  );
};

export default Coins;
