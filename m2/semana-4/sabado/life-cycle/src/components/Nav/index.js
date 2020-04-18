import React, { Component } from "react";
import { getCharacters } from "../../services/characterService";
import "./navbar.css";

class Nav extends Component {
  state = {
    results: [],
  };

  componentDidMount() {
    getCharacters().then((res) => {
      const { results } = res.data;
      this.setState({ results });
    });
  }

  render() {
    return (
      <nav className="uk-navbar-container navbar" uk-navbar="true">
        <div className="uk-navbar-left">
          <ul className="uk-navbar-nav">
            <li className="uk-active">
              <a href="#">Active</a>
            </li>
            <li>
              <a href="#">Parent</a>
              <div className="uk-navbar-dropdown">
                <ul className="uk-nav uk-navbar-dropdown-nav">
                  {this.state.results.map((item, index) => (
                    <li key={index} className="uk-active">
                      <a href="#">{item.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
            <li>
              <a href="#">Item</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Nav;
