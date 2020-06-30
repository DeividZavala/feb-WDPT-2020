import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { denormalizeData } from "../../utils/formatters";

const BadgeStyled = styled.span`
  box-sizing: border-box;
  position: absolute;
  top: 22px;
  right: 0;
  min-width: 12px;
  height: 17px;
  padding: 0 5px;
  border-radius: 500px;
  vertical-align: middle;
  background: #1e87f0;
  color: #fff;
  font-size: 0.7rem;
  display: inline-flex;
  justify-content: center;
  align-items: center;
`;

const Navbar = () => {
  const user = useSelector((state) => state.user.data);
  const items = useSelector((state) => state.cart.items);
  const count = denormalizeData(items).reduce(
    (acc, item) => (acc += item.quantity),
    0
  );
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
          {!user && (
            <li className="">
              <Link to="/login">Login</Link>
            </li>
          )}
          {!user && (
            <li>
              <Link to="/signup">Signup</Link>
            </li>
          )}
          <li uk-toggle="target: #cart">
            <span className="uk-inline" uk-icon="cart">
              <BadgeStyled>{count}</BadgeStyled>
            </span>
          </li>
          <li>
            <Link to="/create-product">New product</Link>
          </li>
          {user && (
            <li>
              <Link to="/profile">Username</Link>
              <div className="uk-navbar-dropdown">
                <ul className="uk-nav uk-navbar-dropdown-nav">
                  <li>
                    <button className="uk-button uk-button-default">
                      Logout
                    </button>
                  </li>
                </ul>
              </div>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
