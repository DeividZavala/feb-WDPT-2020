import React, { Component } from "react";
import Navbar from "./Components/Navbar";
import "./App.css";
import Routes from "./Routes";
import AppContext from "./AppContext";
import { withRouter } from "react-router";
import { logout } from "./services/authServices";
import { denormalizeData, normalizeData } from "./utils/dataUtils";
import { getProperties } from "./services/propertyServices";

class App extends Component {
  state = {
    user: JSON.parse(localStorage.getItem("user")) || {},
    properties: {},
    userProperties: {},
    userReservations: {},
  };

  setUser = (user) => {
    this.setState({ user });
  };

  setProperties = (properties) => {
    this.setState({ properties });
  };

  setUserProperties = (userProperties) => {
    this.setState({ userProperties });
  };

  setUserReservations = (userReservations) => {
    this.setState({ userReservations });
  };

  addProperty = (property) => {
    let { properties } = this.state;
    properties = { [property._id]: property, ...properties };
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
    const {
      state,
      setUser,
      logout,
      setProperties,
      addProperty,
      setUserProperties,
      setUserReservations,
    } = this;
    return (
      <AppContext.Provider
        value={{
          state,
          setUser,
          logout,
          setProperties,
          addProperty,
          setUserProperties,
          setUserReservations,
        }}
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
