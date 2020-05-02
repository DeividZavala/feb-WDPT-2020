import React from "react";
import { Link } from "react-router-dom";
import AppContext from "../../AppContext";

const Navbar = () => (
  <AppContext.Consumer>
    {(value) => {
      console.log(value);
      const { user } = value.state;
      const { logout } = value;
      const isAdmin = user.role === "ADMIN";
      return (
        <header>
          <nav className="uk-navbar-container" uk-navbar="true">
            {user._id ? (
              <div className="uk-navbar-left">
                <ul className="uk-navbar-nav">
                  <li className="uk-active">
                    <Link to="/">Home</Link>
                  </li>
                  {isAdmin ? (
                    <li>
                      <Link to="/new">New Product</Link>
                    </li>
                  ) : null}
                </ul>
              </div>
            ) : null}
            <div className="uk-navbar-right">
              <ul className="uk-navbar-nav">
                {user._id ? (
                  <li>
                    <Link to="/profile">{user.email}</Link>
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
    }}
  </AppContext.Consumer>
);

export default Navbar;
