import React, { Component } from "react";
import InputField from "../Common/InputField";
import TextAreaField from "../Common/TextAreaField";
import { createProperty } from "../../services/propertyServices";
import UIkit from "uikit";
import AppContext from "../../AppContext";

class PropertyForm extends Component {
  static contextType = AppContext;
  state = {
    property: {},
  };
  handleChange = (e) => {
    let { property } = this.state;
    property = { ...property, [e.target.name]: e.target.value };
    this.setState({ property });
  };
  handleImagesChange = (e) => {
    let { property } = this.state;
    property = { ...property, [e.target.name]: e.target.value.split(",") };
    this.setState({ property });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const { property } = this.state;
    const { addProperty } = this.context;
    const { history } = this.props;
    createProperty(property)
      .then((res) => {
        const { result } = res.data;
        addProperty(result);
        history.push("/");
      })
      .catch((err) => {
        const errors = Object.values(err.response.data.errors);
        errors.map((error) =>
          UIkit.notification({
            message: `<span uk-icon='icon: close'></span> ${error.message}`,
            status: "danger",
            pos: "top-right",
          })
        );
      });
  };
  render() {
    console.log(this.state.property);
    const { description = "" } = this.state.property;
    return (
      <section className="uk-section">
        <div className="uk-container uk-flex uk-flex-center">
          <div className="uk-width-1-2">
            <form className="uk-width-1-1" onSubmit={this.handleSubmit}>
              <InputField
                name="title"
                placeholder="property name"
                handleChange={this.handleChange}
              />
              <InputField
                name="price"
                placeholder="price per night"
                handleChange={this.handleChange}
              />
              <InputField
                name="address"
                placeholder="property address"
                handleChange={this.handleChange}
              />
              <InputField
                name="capacity"
                placeholder="property capacity"
                handleChange={this.handleChange}
              />
              <TextAreaField
                name="description"
                hint={`${description.length}/50`}
                handleChange={this.handleChange}
              />
              <TextAreaField
                name="images"
                handleChange={this.handleImagesChange}
                hint="separate multiple images by commas"
              />
              <button type="submit" className="uk-button uk-button-primary">
                Create property
              </button>
            </form>
          </div>
        </div>
      </section>
    );
  }
}

export default PropertyForm;
