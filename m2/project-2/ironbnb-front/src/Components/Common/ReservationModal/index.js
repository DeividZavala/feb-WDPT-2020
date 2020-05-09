import React, { Component } from "react";
import InputField from "../InputField";
import { createReservation } from "../../../services/reservationServices";
import { buildNotification } from "../../../utils/notification";

class ReservationModal extends Component {
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
      .then((res) => {
        console.log(res.data);
        buildNotification("Reservation confirmed!", "success");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    const { title, property } = this.props;
    return (
      <div id={`reservate-${property}`} uk-modal="true">
        <div className="uk-modal-dialog uk-modal-body">
          <h2 className="uk-modal-title">Reservate {title}</h2>
          <form>
            <InputField
              name="guest_number"
              type="number"
              min="1"
              handleChange={this.handleChange}
              placeholder="Guest number"
            />
            <InputField
              name="checkin"
              handleChange={this.handleChange}
              type="date"
              placeholder="Checkin Date"
            />
            <InputField
              name="checkout"
              type="date"
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
