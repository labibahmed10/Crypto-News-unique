import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const CoinDetail = () => {
  const { name } = useParams();

  const [singleCoin, setSingleCoin] = useState([]);

  useEffect(() => {
    fetch(`https://api.coingecko.com/api/v3/coins/${name}`)
      .then((res) => res.json())
      .then((data) => setSingleCoin(data));
  }, [name]);

  console.log(singleCoin);

  return (
    <div className="flex items-center md:justify-evenly md:flex-row flex-col-reverse md:py-16 py-10  text-gray-600 text-justify">
      <div className="md:w-7/12 px-5 md:px-0">
        <h1 className="text-3xl">General Information:</h1>
        <hr className="border-1 w-2/3 pb-5" />

        <p className="text-xl">Market Cap Rank: {singleCoin?.market_cap_rank}</p>
        <p className="text-xl">
          {" "}
          Conract Origin: {singleCoin.contract_address ? singleCoin.contract_address : "Not Available"}
        </p>
        <p className="text-xl">
          Home Page: <a href={singleCoin.links?.homepage[0]}>{singleCoin.links?.homepage[0]}</a>
        </p>
        <p className="text-xl">Total Volume: ${singleCoin.market_data?.total_volume?.usd}</p>
        <p className="text-xl">Total Volume in BDT: ৳{singleCoin.market_data?.total_volume?.bdt}</p>
        <p className="text-xl">Hashing Algorith: {singleCoin?.hashing_algorithm}</p>
        <p className="text-xl ">Last Updated: {singleCoin?.last_updated?.slice(0, 10)}</p>
        <p className=" pb-5">
          <span className="text-xl">Descrption:</span>{" "}
          {singleCoin?.description?.en
            ? singleCoin?.description?.en.slice(0, 500)
            : "Not Available Right Now"}
        </p>

        <h1 className="text-3xl">Scores: </h1>
        <hr className="border-1 pb-5 w-2/3" />
        <p className="text-xl">Public Interest: {singleCoin?.public_interest_stats?.alexa_rank}</p>
        <p className="text-xl">Liquidity Score: {singleCoin.liquidity_score}</p>
        <p className="text-xl">Twitter Follower: {singleCoin?.community_data?.twitter_followers}</p>
        <p className="text-xl">Developer stars:{singleCoin?.developer_data?.stars} </p>
        <p className="text-xl">Developer Score: {singleCoin?.developer_score}</p>
      </div>
      <div className="flex justify-center items-center  flex-col ">
        <img className="object-contain" src={singleCoin?.image?.large} alt="" />
        <p className="text-3xl text-center py-5">{singleCoin.name}</p>
      </div>
    </div>
  );
};

export default CoinDetail;
