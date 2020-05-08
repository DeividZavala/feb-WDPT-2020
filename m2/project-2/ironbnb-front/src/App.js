import React from "react";
import Navbar from "./Components/Navbar";
import "./App.css";
import Routes from "./Routes";
import AppContext from "./AppContext";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes />
    </div>
  );
}

export default App;
