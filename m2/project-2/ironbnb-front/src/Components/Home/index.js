import React, { Component } from "react";
import PropertyCard from "../Common/PropertyCard";
import { getProperties } from "../../services/propertyServices";
import AppContext from "../../AppContext";
import { normalizeData, denormalizeData } from "../../utils/dataUtils";

class Home extends Component {
  static contextType = AppContext;
  componentDidMount() {
    const { properties, user } = this.context.state;
    const { setProperties } = this.context;
    const { history } = this.props;
    if (!user._id) {
      history.push("/login");
    } else {
      if (denormalizeData(properties).length < 1) {
        getProperties().then((res) => {
          const { result } = res.data;
          const properties = normalizeData(result);
          setProperties(properties);
        });
      }
    }
  }

  render() {
    const { properties, user } = this.context.state;
    return (
      <div className="uk-section">
        <div className="uk-container">
          <div className="uk-grid uk-grid-small uk-grid-match uk-child-width-1-3@l  uk-child-width-1-3@m uk-child-width-1-1@s">
            {denormalizeData(properties).map((property, index) => (
              <PropertyCard key={index} {...property} userId={user._id} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
