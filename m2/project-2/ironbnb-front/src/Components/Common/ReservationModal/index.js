import React, { Component } from "react";
import InputField from "../InputField";
import { createReservation } from "../../../services/reservationServices";
import { buildNotification } from "../../../utils/notification";
import AppContext from "../../../AppContext";
import UIkit from "uikit";

class ReservationModal extends Component {
  static contextType = AppContext;
  state = {
    reservation: {},
  };

  handleChange = (e) => {
    let { reservation } = this.state;
    reservation = { ...reservation, [e.target.name]: e.target.value };
    this.setState({ reservation });
  };

  handleSubmit = () => {
    const { reservation } = this.state;
    const { property } = this.props;
    createReservation({ ...reservation, property })
      .then(() => {
        buildNotification("Reservation confirmed!", "success");
        UIkit.modal(`#reservate-${property}`).hide();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    const { title, property, isEditing } = this.props;
    const { reservation } = this.state;
    return (
      <div
        id={`reservate-${isEditing ? this.props.reservation : property}`}
        uk-modal="true"
      >
        <div className="uk-modal-dialog uk-modal-body">
          <h2 className="uk-modal-title">Reservate {title}</h2>
          <form>
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
              value={reservation.checkin}
              placeholder="Checkin Date"
            />
            <InputField
              name="checkout"
              type="date"
              value={reservation.checkout}
              handleChange={this.handleChange}
              placeholder="Checkout Date"
            />
          </form>
          <p className="uk-text-right">
            <button
              className="uk-button uk-button-default uk-modal-close"
              type="button"
            >
              Cancel
            </button>
            <button
              onClick={this.handleSubmit}
              className="uk-button uk-button-primary"
              type="button"
            >
              Save
            </button>
          </p>
        </div>
      </div>
    );
  }
}

export default ReservationModal;
