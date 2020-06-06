import React from "react";
import Routes from "./Routes";
import { Link } from "react-router-dom";

const App = () => {
  return (
    <section className="">
      <nav className="uk-navbar-container" uk-navbar="true">
        <div className="uk-navbar-left">
          <ul className="uk-navbar-nav">
            <li>
              <Link to="/">TODOS</Link>
            </li>
            <li>
              <Link to="/rickandmorty">Rick and Morty</Link>
            </li>
          </ul>
        </div>
      </nav>
      <Routes />
    </section>
  );
};

export default App;
