import React from "react";

const Navbar = () => (
  <header>
    <nav className="uk-navbar-container" uk-navbar="true">
      <div className="uk-navbar-left">
        <ul className="uk-navbar-nav">
          <li className="uk-active">
            <a href="#">Active</a>
          </li>
          <li>
            <a href="#">Item</a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
);

export default Navbar;
