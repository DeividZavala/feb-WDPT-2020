import React, { Component } from "react";
import { createProduct } from "../../services/productsService";
import AppContext from "../../AppContext";

class ProductForm extends Component {
  state = {
    product: {},
  };

  componentWillMount() {
    const { _id, role } = this.context.state.user;
    const { history } = this.props;
    const hasPermission = ["ADMIN"].includes(role);
    if (!_id) return history.push("/login");
    if (!hasPermission) return history.push("/");
  }

  handleChange = (e) => {
    let { product } = this.state;
    product = { ...product, [e.target.name]: e.target.value };
    this.setState({ product });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { product } = this.state;
    createProduct(product)
      .then((res) => {
        console.log(res);
      })
      .catch((res) => console.error(res.response));
  };

  render() {
    return (
      <section className="uk-section">
        <div className="uk-container uk-flex uk-flex-center">
          <div className="uk-width-1-2">
            <form className="uk-width-1-1" onSubmit={this.handleSubmit}>
              <div className="uk-margin">
                <label className="uk-form-label" htmlFor="name">
                  Name:
                </label>
                <div className="uk-form-controls">
                  <input
                    onChange={this.handleChange}
                    className="uk-input"
                    id="name"
                    type="text"
                    name="name"
                    placeholder="Name"
                  />
                </div>
              </div>

              <div className="uk-margin">
                <label className="uk-form-label" htmlFor="price">
                  Price:
                </label>
                <div className="uk-form-controls">
                  <input
                    onChange={this.handleChange}
                    name="price"
                    className="uk-input"
                    id="price"
                    type="text"
                    placeholder="Price"
                  />
                </div>
              </div>

              <div className="uk-margin">
                <label className="uk-form-label" htmlFor="image">
                  Image:
                </label>
                <div className="uk-form-controls">
                  <input
                    onChange={this.handleChange}
                    name="image"
                    className="uk-input"
                    id="image"
                    type="text"
                    placeholder="Image"
                  />
                </div>
              </div>

              <div className="uk-margin">
                <label className="uk-form-label" htmlFor="description">
                  Description:
                </label>
                <div className="uk-form-controls">
                  <textarea
                    onChange={this.handleChange}
                    className="uk-textarea"
                    name="description"
                    id="description"
                    cols="30"
                    rows="5"
                  ></textarea>
                </div>
              </div>
              <button className="uk-button uk-button-primary">
                Create product
              </button>
            </form>
          </div>
        </div>
      </section>
    );
  }
}

ProductForm.contextType = AppContext;

export default ProductForm;
