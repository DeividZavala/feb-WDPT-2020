import React from "react";
import logo from "./logo.svg";
import Navbar from "~commons/NavBar";
import "./App.css";
import Product from "~commons/Product";
import Cart from "~components/Cart";
import CheckoutTable from "~components/CheckoutTable";
import Section from "~commons/Section";

function App() {
  return (
    <div className="App">
      <Cart />
      <Navbar />
      <Section>
        <div className="uk-grid uk-child-width-1-4">
          <Product />
        </div>
      </Section>
      <Section>
        <CheckoutTable />
      </Section>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
