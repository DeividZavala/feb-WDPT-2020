import React, { Component } from "react";
import { createProperty } from "../../services/propertyServices";
import AppContext from "../../AppContext";
import PropertyCard from "../Common/PropertyCard";
import Form from "./Form";
import { buildNotification } from "../../utils/notification";

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
        errors.map((error) => buildNotification(error, "danger", "close"));
      });
  };
  render() {
    const { property } = this.state;
    return (
      <section className="uk-section">
        <div className="uk-container">
          <h3>Create property</h3>
          <div className="uk-grid uk-child-width-1-2">
            <Form
              property={property}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              handleImagesChange={this.handleImagesChange}
            />
            <div>
              <PropertyCard {...property} isDemo={true} />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default PropertyForm;
