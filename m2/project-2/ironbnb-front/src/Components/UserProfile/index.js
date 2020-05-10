import React, { Component } from "react";
import { getPropertiesByUser } from "../../services/propertyServices";
import AppContext from "../../AppContext";
import { normalizeData, denormalizeData } from "../../utils/dataUtils";
import SimplePropertyCard from "../Common/SimplePropertyCard";
import dayjs from "dayjs";
import LocalizedFormat from "dayjs/plugin/localizedFormat";
dayjs.extend(LocalizedFormat);

class UserProfile extends Component {
  static contextType = AppContext;
  componentWillMount() {
    const {
      user: { _id },
      userProperties,
    } = this.context.state;
    if (denormalizeData(userProperties).length < 1) {
      const { setUserProperties } = this.context;
      getPropertiesByUser(_id).then((res) => {
        const { result } = res.data;
        const properties = normalizeData(result);
        setUserProperties(properties);
      });
    }
  }
  render() {
    const { user, userProperties } = this.context.state;
    return (
      <div className="uk-section">
        <div className="uk-container">
          <div className="uk-grid uk-grid-small uk-grid-match">
            <div className="uk-width-1-4">
              <div>
                <div>
                  <img
                    className="uk-border-circle"
                    src={user.profile_picture}
                  />
                </div>
                <p className="uk-text-center uk-text-lead">{user.name}</p>
                <p className="uk-text-center">
                  Miembro desde el{" "}
                  {dayjs(user.createdAt).locale("es").format("LL")}
                </p>
              </div>
            </div>
            <div className="uk-width-expand">
              <div className="uk-padding-large uk-padding-remove-top uk-padding-remove-bottom">
                <ul
                  class="uk-tab uk-child-width-expand"
                  uk-switcher="connect:#menu"
                >
                  <li>
                    <a href="#">Mis propiedades</a>
                  </li>
                  <li>
                    <a href="#">Mis Reservaciones</a>
                  </li>
                </ul>

                <ul id="menu" class="uk-switcher uk-margin">
                  <li>
                    {denormalizeData(userProperties).map((property) => (
                      <SimplePropertyCard {...property} />
                    ))}
                  </li>
                  <li>Reservaciones</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UserProfile;
