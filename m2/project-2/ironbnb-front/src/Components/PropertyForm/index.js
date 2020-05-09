import React, { Component } from "react";
import {
  createProperty,
  getPropertyDetail,
  updateProperty,
} from "../../services/propertyServices";
import AppContext from "../../AppContext";
import PropertyCard from "../Common/PropertyCard";
import Form from "./Form";
import { buildNotification } from "../../utils/notification";

class PropertyForm extends Component {
  static contextType = AppContext;
  state = {
    property: {},
  };

  componentWillMount() {
    const { id } = this.props.match.params;
    if (id) {
      getPropertyDetail(id).then((res) => {
        const { result } = res.data;
        this.setState({ property: result });
      });
    }
  }

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
    const { id } = this.props.match.params;
    const action = id ? updateProperty : createProperty;
    const params = id ? { property, id } : { property };
    action(params)
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
