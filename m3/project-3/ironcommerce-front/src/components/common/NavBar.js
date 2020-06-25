import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="uk-navbar-container" uk-navbar="true">
      <div className="uk-navbar-left">
        <ul className="uk-navbar-nav">
          <li className="uk-active">
            <Link to="/">Ironcommerce</Link>
          </li>
        </ul>
      </div>

      <div className="uk-navbar-right">
        <ul className="uk-navbar-nav">
          <li className="">
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/signup">Signup</Link>
          </li>
          <li uk-toggle="target: #cart">
            <span uk-icon="cart" />
          </li>
          <li>
            <Link to="/profile">Username</Link>
            <div className="uk-navbar-dropdown">
              <ul className="uk-nav uk-navbar-dropdown-nav">
                <li>
                  <a href="#">Logout</a>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
