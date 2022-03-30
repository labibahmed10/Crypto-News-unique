import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "./Components/About/About";
import Coins from "./Components/Coins/Coins";
import Contact from "./Components/Contacts/Contact";
import Homepage from "./Components/Homepage/Homepage";
import Navbar from "./Components/Navbar/Navbar";

const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Homepage></Homepage>}></Route>
        <Route path="/home" element={<Homepage></Homepage>}></Route>
        <Route path="/coins" element={<Coins></Coins>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="contact" element={<Contact></Contact>}></Route>
      </Routes>
    </div>
  );
};

export default App;
