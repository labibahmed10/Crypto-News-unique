import React from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "./Components/Homepage/Homepage";
import Navbar from "./Components/Navbar/Navbar";

const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Homepage></Homepage>}></Route>
        <Route path="/home"></Route>
        <Route path="/coins"></Route>
        <Route path="/about"></Route>
        <Route path="contact"></Route>
      </Routes>
    </div>
  );
};

export default App;
