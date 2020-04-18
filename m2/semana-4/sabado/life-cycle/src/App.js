import React from "react";
import "./App.css";
import Nav from "./components/Nav";
import Routes from "./routes";

function App() {
  return (
    <div className="App">
      <header>
        <Nav />
      </header>
      <Routes />
    </div>
  );
}

export default App;
