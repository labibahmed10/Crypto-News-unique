import React from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "./Components/Homepage/Homepage";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage></Homepage>}></Route>
      </Routes>
    </div>
  );
};

export default App;
