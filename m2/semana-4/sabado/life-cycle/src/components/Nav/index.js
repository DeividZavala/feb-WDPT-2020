import React, { Component } from "react";

class Nav extends Component {
  render() {
    return (
      <nav class="uk-navbar-container" uk-navbar>
        <div class="uk-navbar-left">
          <ul class="uk-navbar-nav">
            <li class="uk-active">
              <a href="#">Active</a>
            </li>
            <li>
              <a href="#">Parent</a>
              <div class="uk-navbar-dropdown">
                <ul class="uk-nav uk-navbar-dropdown-nav">
                  <li class="uk-active">
                    <a href="#">Active</a>
                  </li>
                  <li>
                    <a href="#">Item</a>
                  </li>
                  <li>
                    <a href="#">Item</a>
                  </li>
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
