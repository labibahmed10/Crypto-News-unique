import React from "react";
import { useNavigate } from "react-router-dom";

const Homepage = () => {
  const navigate = useNavigate();
  const takeToPage = () => {
    navigate("/coins");
  };

  return (
    <div className="md:px-16">
      <div className="flex flex-col justify-center h-[80vh] items-center">
        <h1 className="font-mono text-xl md:text-5xl ">
          Welcome to CRYPTO NEWS<span className="md:text-5xl text-3xl">💸⏳</span>
        </h1>
        <button onClick={() => takeToPage()} className="py-2 px-3 text-white mt-3 rounded-full bg-cyan-700">
          Explore Coins Around Globe
        </button>
      </div>
    </div>
  );
};

export default Homepage;
