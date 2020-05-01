import React from "react";
import { Link } from "react-router-dom";
import AppContext from "../../AppContext";

const Navbar = () => (
  <AppContext.Consumer>
    {(value) => {
      console.log(value);
      const { user } = value.state;
      return (
        <header>
          <nav className="uk-navbar-container" uk-navbar="true">
            <div className="uk-navbar-left">
              <ul className="uk-navbar-nav">
                <li className="uk-active">
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/new">New Product</Link>
                </li>
              </ul>
            </div>
            <div className="uk-navbar-right">
              <ul className="uk-navbar-nav">
                {user._id ? (
                  <li>
                    <Link to="/profile">{user.email}</Link>
                  </li>
                ) : (
                  <li>
                    <Link to="/login">Login</Link>
                  </li>
                )}
              </ul>
            </div>
          </nav>
        </header>
      );
    }}
  </AppContext.Consumer>
);

export default Navbar;
