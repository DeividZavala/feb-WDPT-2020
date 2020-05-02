import React, { Component } from "react";
import Card from "../Card";
import { getProducts } from "../../services/productsService";
import AppContext from "../../AppContext";

class Products extends Component {
  state = {
    products: [],
  };

  componentWillMount() {
    const { _id } = this.context.state.user;
    const { history } = this.props;
    if (!_id) return history.push("/login");
  }

  componentDidMount() {
    getProducts().then((res) => {
      const { result: products } = res.data;
      this.setState({ products });
    });
  }

  render() {
    return (
      <section className="uk-section">
        <div className="uk-container">
          {this.state.products.length > 0 ? (
            <div className="uk-grid uk-grid-small uk-grid-match uk-child-width-1-3">
              {this.state.products.map((product, index) => (
                <Card key={index} {...product} />
              ))}
            </div>
          ) : (
            <div className="uk-alert-primary" uk-alert="true">
              <p>No hay productos por el momento</p>
            </div>
          )}
        </div>
      </section>
    );
  }
}

Products.contextType = AppContext;

export default Products;
