import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const user = {};
  const logout = () => {};
  return (
    <header>
      <nav className="uk-navbar-container" uk-navbar="true">
        {user._id ? (
          <div className="uk-navbar-left">
            <ul className="uk-navbar-nav">
              <li className="uk-active">
                <Link to="/">Ironbnb</Link>
              </li>

              <li>
                <Link to="/new">New Property</Link>
              </li>
            </ul>
          </div>
        ) : null}
        <div className="uk-navbar-right">
          <ul className="uk-navbar-nav">
            {user._id ? (
              <li>
                <Link to="/profile">
                  <div className="uk-grid-small uk-flex-middle" uk-grid="true">
                    <div className="uk-width-auto">
                      <img
                        className="uk-border-circle"
                        width="40"
                        height="40"
                        src="images/avatar.jpg"
                      />
                    </div>
                    <div className="uk-width-expand">
                      <div className="uk-card-title uk-margin-remove-bottom">
                        {user.name}
                      </div>
                    </div>
                  </div>
                </Link>
                <div className="uk-navbar-dropdown">
                  <ul className="uk-nav uk-navbar-dropdown-nav">
                    <li onClick={logout}>Logout</li>
                  </ul>
                </div>
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
};

export default Navbar;
