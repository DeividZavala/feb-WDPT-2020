import React, { Component } from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import Routes from "./Routes";
import AppContext from "./AppContext";

class App extends Component {
  state = {
    user: {},
  };

  setUser = (user) => {
    this.setState({ user });
  };

  render() {
    const { state, setUser } = this;
    return (
      <AppContext.Provider value={{ state, setUser }}>
        <div className="App">
          <Navbar />
          <Routes />
        </div>
      </AppContext.Provider>
    );
  }
}

export default App;
