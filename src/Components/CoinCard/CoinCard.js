import React from "react";
import { useNavigate } from "react-router-dom";

const CoinCard = ({ coin }) => {
  const { image, name, symbol } = coin;

  const navigate = useNavigate();

  const takeTo = () => {
    navigate(`/details/${coin.id}`);
  };

  return (
    <div
      onClick={takeTo}
      className="cursor-pointer flex items-center justify-between w-72 mx-auto shadow-xl bg-slate-50 p-5 rounded-full text-stone-700 font-medium"
    >
      <img className="w-20 p-1" src={image} alt="" />
      <div className="pr-3">
        <h1>{name}</h1>
        <p>{symbol}</p>
      </div>
    </div>
  );
};

export default CoinCard;
