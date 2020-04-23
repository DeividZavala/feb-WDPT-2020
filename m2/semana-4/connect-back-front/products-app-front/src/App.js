import React, { Component } from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import Routes from "./Routes";
import AppContext from "./AppContext";

class App extends Component {
  state = {
    products: [{ name: "Tele", price: 30000 }],
  };
  render() {
    return (
      <AppContext.Provider value={this.state}>
        <div className="App">
          <Navbar />
          <Routes />
        </div>
      </AppContext.Provider>
    );
  }
}

export default App;
