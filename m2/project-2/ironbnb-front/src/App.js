import React, { Component } from "react";
import Navbar from "./Components/Navbar";
import "./App.css";
import Routes from "./Routes";
import AppContext from "./AppContext";
import { withRouter } from "react-router";
import { logout } from "./services/authServices";

class App extends Component {
  state = {
    user: JSON.parse(localStorage.getItem("user")) || {},
    properties: [],
  };

  setUser = (user) => {
    this.setState({ user });
  };

  setProperties = (properties) => {
    this.setState({ properties });
  };

  addProperty = (property) => {
    let { properties } = this.state;
    properties = [property, ...properties];
    this.setState({ properties });
  };

  logout = () => {
    const { history } = this.props;
    logout().then(() => {
      localStorage.removeItem("user");
      this.setState({ user: {} });
      history.push("/login");
    });
  };

  render() {
    const { state, setUser, logout, setProperties, addProperty } = this;
    return (
      <AppContext.Provider
        value={{ state, setUser, logout, setProperties, addProperty }}
      >
        <div className="App">
          <Navbar user={state.user} logout={logout} />
          <Routes />
        </div>
      </AppContext.Provider>
    );
  }
}

const AppWithRouter = withRouter(App);

export default AppWithRouter;
