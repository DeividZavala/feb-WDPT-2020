import React from "react";
import Slider from "../Slider";
import ConfirmationModal from "../ConfirmationModal";
import { Link } from "react-router-dom";
import dayjs from "dayjs";

const SimpleCard = ({
  _id,
  images,
  title,
  price,
  capacity,
  deleteItem,
  isReservation,
  guest_number,
  property,
  checkin,
  checkout,
}) => (
  <div className="uk-margin-medium-bottom uk-card uk-card-default">
    <ConfirmationModal
      handleClick={deleteItem}
      id={_id}
      message={
        isReservation
          ? `Delete reservation in ${property.title}`
          : `Delete ${title}?`
      }
    />
    <div className="uk-grid">
      <div className="uk-width-1-3">
        <Slider images={isReservation ? property.images : images} />
      </div>
      <div className="uk-width-expand uk-padding uk-padding-remove-top uk-padding-remove-bottom uk-flex uk-flex-column uk-flex-around">
        <div className="simple-card-title uk-text-lead uk-margin-small-top uk-margin-small-bottom">
          {isReservation ? property.title : title}
        </div>
        {isReservation ? (
          <div>
            <div>Guest number: {guest_number}</div>
            <div>Checkin date: {dayjs(checkin).locale("es").format("LL")}</div>
            <div>
              Checkout date: {dayjs(checkout).locale("es").format("LL")}
            </div>
          </div>
        ) : (
          <div>
            <div>Precio por noche: {price}</div>
            <div>Capacidad de la propiedad: {capacity}</div>
          </div>
        )}
        <div className="uk-flex uk-flex-around">
          <Link to={`/property/${_id}`} className="uk-button uk-button-default">
            <span uk-icon="icon:pencil"></span> Editar
          </Link>
          <button
            className="uk-button uk-button-danger"
            uk-toggle={`target: #remove-${_id}`}
          >
            <span uk-icon="icon:trash"></span> Borrar
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default SimpleCard;
