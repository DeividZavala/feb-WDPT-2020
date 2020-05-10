import React from "react";
import Slider from "../Slider";
import { Link } from "react-router-dom";

const SimplePropertyCard = ({
  _id,
  images,
  title,
  price,
  capacity,
  description,
}) => (
  <div className="uk-margin-medium-bottom uk-card uk-card-default">
    <div className="uk-grid">
      <div className="uk-width-1-3">
        <Slider images={images} />
      </div>
      <div className="uk-width-expand uk-padding uk-padding-remove-top uk-padding-remove-bottom uk-flex uk-flex-column uk-flex-around">
        <div className="simple-card-title uk-text-lead uk-margin-small-top uk-margin-small-bottom">
          {title}
        </div>
        <div className="">
          <div>Precio por noche: {price}</div>
          <div>Capacidad de la propiedad: {capacity}</div>
        </div>
        <div className="uk-flex uk-flex-around">
          <Link to={`/property/${_id}`} className="uk-button uk-button-default">
            <span uk-icon="icon:pencil"></span> Editar
          </Link>
          <button className="uk-button uk-button-danger">
            <span uk-icon="icon:trash"></span> Borrar
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default SimplePropertyCard;
