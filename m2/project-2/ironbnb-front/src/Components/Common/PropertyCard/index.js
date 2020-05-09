import React from "react";
import Slider from "../Slider";

const PropertyCard = ({ images, title, description, price, capacity }) => (
  <div>
    <div className="uk-card uk-card-default">
      <div className="uk-card-media-top">
        <Slider images={images} />
      </div>
      <div className="uk-card-body uk-padding-small">
        <h3 className="uk-card-title uk-text-center">{title}</h3>
        <div>Precio por noche: {price}</div>
        <div>Capacidad: {capacity} personas</div>
        <p>{description}</p>
      </div>
    </div>
  </div>
);

export default PropertyCard;
