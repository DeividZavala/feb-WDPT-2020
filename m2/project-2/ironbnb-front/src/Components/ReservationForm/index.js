import React, { Component } from "react";
import InputField from "../Common/InputField";
import {
  createReservation,
  updateReservation,
} from "../../services/reservationServices";
import { buildNotification } from "../../utils/notification";
import AppContext from "../../AppContext";
import dayjs from "dayjs";
import LocalizedFormat from "dayjs/plugin/localizedFormat";
dayjs.extend(LocalizedFormat);

class ReservationForm extends Component {
  static contextType = AppContext;
  state = {
    reservation: {},
    propertyInfo: {},
  };

  componentDidMount() {
    const { property_id, id } = this.props.match.params;
    if (id) {
      const {
        property: propertyInfo,
        ...reservation
      } = this.context.state.userReservations[id];
      this.setState({ propertyInfo, reservation });
    } else {
      const propertyInfo = this.context.state.properties[property_id];
      this.setState({ propertyInfo });
    }
  }

  handleChange = (e) => {
    let { reservation } = this.state;
    reservation = { ...reservation, [e.target.name]: e.target.value };
    this.setState({ reservation });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { history } = this.props;
    const isEditing = this.props.location.pathname.includes("edit");
    const {
      reservation,
      propertyInfo: { _id },
    } = this.state;
    const action = isEditing ? updateReservation : createReservation;
    action({ ...reservation, property: _id })
      .then(() => {
        buildNotification("Reservation confirmed!", "success");
        history.push("/profile");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    const { reservation, propertyInfo } = this.state;
    return (
      <section className="uk-section">
        <div className="uk-container">
          <h2 className="">Reservate {propertyInfo.title}</h2>
          <form onSubmit={this.handleSubmit}>
            <InputField
              name="guest_number"
              type="number"
              min="1"
              value={reservation.guest_number}
              handleChange={this.handleChange}
              placeholder="Guest number"
            />
            <InputField
              name="checkin"
              handleChange={this.handleChange}
              type="date"
              value={dayjs(reservation.checkin).format("YYYY-MM-DD")}
              placeholder="Checkin Date"
            />
            <InputField
              name="checkout"
              type="date"
              value={dayjs(reservation.checkout).format("YYYY-MM-DD")}
              handleChange={this.handleChange}
              placeholder="Checkout Date"
            />
            <button type="submit" className="uk-button uk-button-primary">
              Reservate
            </button>
          </form>
        </div>
      </section>
    );
  }
}

export default ReservationForm;
