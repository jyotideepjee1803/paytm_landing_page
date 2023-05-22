import React from "react";
import './App.css';
import { BrowserRouter, Routes, Route, } from "react-router-dom";

import Home from "./Components/Home";
import Error from "./Components/Error";

function App() {
  return (
    <div id="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="*" element={<Error />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
