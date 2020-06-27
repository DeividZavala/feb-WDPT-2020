import React from "react";
import Routes from "./Routes";
import Navbar from "~commons/NavBar";
import Cart from "~components/Cart";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Cart />
      <Navbar />
      <Routes />
    </div>
  );
}

export default App;
