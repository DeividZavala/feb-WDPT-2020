import React, { Component } from "react";
import {
  getPropertiesByUser,
  deleteProperty,
} from "../../services/propertyServices";
import {
  getUserReservations,
  deleteReservation,
} from "../../services/reservationServices";
import AppContext from "../../AppContext";
import {
  normalizeData,
  denormalizeData,
  filterItem,
} from "../../utils/dataUtils";
import SimpleCard from "../Common/SimpleCard";
import dayjs from "dayjs";
import LocalizedFormat from "dayjs/plugin/localizedFormat";
import UIkit from "uikit";
dayjs.extend(LocalizedFormat);

class UserProfile extends Component {
  static contextType = AppContext;
  componentWillMount() {
    const {
      user: { _id },
      userProperties,
    } = this.context.state;
    if (denormalizeData(userProperties).length < 1) {
      const { setUserProperties, setUserReservations } = this.context;
      getPropertiesByUser(_id).then((res) => {
        const { result } = res.data;
        const properties = normalizeData(result);
        setUserProperties(properties);
      });
      getUserReservations().then((res) => {
        const { result } = res.data;
        const reservations = normalizeData(result);
        setUserReservations(reservations);
      });
    }
  }

  removeProperty = (id) => {
    const { properties, userProperties } = this.context.state;
    const { setProperties, setUserProperties } = this.context;
    deleteProperty(id).then((res) => {
      const { result } = res.data;
      const filteredProperties = filterItem(properties, result._id);
      const filteredUserProperties = filterItem(userProperties, result._id);
      setProperties(filteredProperties);
      setUserProperties(filteredUserProperties);
      UIkit.modal(`#remove-${result._id}`).hide();
    });
  };

  removeReservation = (id) => {
    const { userReservations } = this.context.state;
    const { setUserReservations } = this.context;
    deleteReservation(id).then((res) => {
      const { result } = res.data;
      const filteredUserReservations = filterItem(userReservations, result._id);
      setUserReservations(filteredUserReservations);
      UIkit.modal(`#remove-${result._id}`).hide();
    });
  };

  render() {
    const { user, userProperties, userReservations } = this.context.state;
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
                  className="uk-tab uk-child-width-expand"
                  uk-switcher="connect:#menu"
                >
                  <li>
                    <a href="#">Mis propiedades</a>
                  </li>
                  <li>
                    <a href="#">Mis Reservaciones</a>
                  </li>
                </ul>

                <ul
                  id="menu"
                  className="uk-switcher uk-margin uk-height-large"
                  uk-overflow-auto="true"
                >
                  <li className="">
                    {denormalizeData(userProperties).map((property, index) => (
                      <SimpleCard
                        key={index}
                        deleteItem={this.removeProperty}
                        {...property}
                      />
                    ))}
                  </li>
                  <li>
                    {denormalizeData(userReservations).map(
                      (reservation, index) => (
                        <SimpleCard
                          key={index}
                          isReservation
                          deleteItem={this.removeReservation}
                          {...reservation}
                        />
                      )
                    )}
                  </li>
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
