import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "./Components/About/About";
import CoinDetail from "./Components/Coin-Details/CoinDetail";

import Coins from "./Components/Coins/Coins";
import BdAddress from "./Components/Contact/BdAddress";
import UkAddress from "./Components/Contact/UkAddress";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Homepage from "./Components/Homepage/Homepage";
import Navbar from "./Components/Navbar/Navbar";
import NotFound from "./Components/NotFound/NotFound";
import SignUp from "./Components/SignUp/SignUp";

const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Homepage></Homepage>}></Route>
        <Route path="/home" element={<Homepage></Homepage>}></Route>
        <Route path="/coins" element={<Coins></Coins>}></Route>
        <Route path="/details/:name" element={<CoinDetail></CoinDetail>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/contact" element={<Contact></Contact>}>
          <Route path="BdAddress" element={<BdAddress></BdAddress>}></Route>
          <Route path="UkAddress" element={<UkAddress></UkAddress>}></Route>
        </Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
};

export default App;
