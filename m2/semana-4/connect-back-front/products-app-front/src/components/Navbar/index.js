import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => (
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
    </nav>
  </header>
);

export default Navbar;
