import React, { Component } from "react";
import PropertyCard from "../Common/PropertyCard";
import { getProperties } from "../../services/propertyServices";
import AppContext from "../../AppContext";

class Home extends Component {
  static contextType = AppContext;
  componentDidMount() {
    const { properties } = this.context.state;
    if (properties.length < 1) {
      getProperties().then((res) => {
        const { result } = res.data;
        const { setProperties } = this.context;
        setProperties(result);
      });
    }
  }

  render() {
    const { properties, user } = this.context.state;
    return (
      <div className="uk-section">
        <div className="uk-container">
          <div className="uk-grid uk-grid-small uk-grid-match uk-child-width-1-3@l  uk-child-width-1-3@m uk-child-width-1-1@s">
            {properties.map((property, index) => (
              <PropertyCard key={index} {...property} userId={user._id} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
