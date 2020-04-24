import React, { Component } from "react";

class ProductForm extends Component {
  state = {
    product: {},
  };

  handleChange = (e) => {
    let { product } = this.state;
    product = { ...product, [e.target.name]: e.target.value };
    this.setState({ product });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.product);
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

export default ProductForm;
