import React, { Component } from "react";
import Card from "../Card";

class Products extends Component {
  state = {
    products: [],
  };

  render() {
    return (
      <section className="uk-section">
        <div className="uk-container">
          <div className="uk-grid">
            {this.state.products.length > 0 ? (
              this.state.products.map((product, index) => (
                <Card key={index} {...product} />
              ))
            ) : (
              <div class="uk-alert-primary" uk-alert="true">
                <p>No hay productos por el momento</p>
              </div>
            )}
          </div>
        </div>
      </section>
    );
  }
}
