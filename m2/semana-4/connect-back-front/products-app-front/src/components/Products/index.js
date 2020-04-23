import React, { Component } from "react";
import AppContext from "../../AppContext";

class Products extends Component {
  render() {
    return (
      <AppContext.Consumer>
        {(value) => {
          console.log(value);
          return <h1>Products</h1>;
        }}
      </AppContext.Consumer>
    );
  }
}

export default Products;
