import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import HomeEvent from "./components/HomeEvent";

function App() {
  return (
    <BrowserRouter>
      <div className="App-header">
        <HomeEvent />
      </div>
    </BrowserRouter>
  );
}

export default App;
