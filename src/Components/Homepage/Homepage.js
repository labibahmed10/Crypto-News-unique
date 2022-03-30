import React from "react";

const Homepage = () => {
  return (
    <div className="md:px-16">
      <div className="flex flex-col justify-center h-screen items-center">
        <h1 className="font-mono text-xl md:text-5xl ">
          Welcome to CRYPTO NEWS<span className="md:text-5xl text-3xl">💸⏳</span>
        </h1>
        <button className="py-2 px-3 text-white mt-3 rounded-full bg-cyan-700">Explore Coins</button>
      </div>
    </div>
  );
};

export default Homepage;
