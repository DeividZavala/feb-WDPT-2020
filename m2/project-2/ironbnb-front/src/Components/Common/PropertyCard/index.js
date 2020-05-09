import React from "react";
import Slider from "../Slider";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { Link } from "react-router-dom";
import "dayjs/locale/es";
dayjs.extend(relativeTime);

const PropertyCard = ({
  _id,
  images,
  title,
  description,
  price,
  capacity,
  createdAt,
  owner,
  userId,
}) => {
  const isOwner = userId === owner._id;
  return (
    <div>
      <div className="uk-card uk-card-default">
        <div className="uk-card-header uk-padding-small">
          <div className="uk-grid-small uk-flex-middle" uk-grid="true">
            <div className="uk-width-auto">
              <img
                className="uk-border-circle"
                width="40"
                height="40"
                alt={owner.name}
                src={owner.profile_picture}
              />
            </div>
            <div className="uk-width-expand">
              <h3 className="uk-card-title uk-margin-remove-bottom">
                {owner.name}
              </h3>
              <p className="uk-text-meta uk-margin-remove-top">Propietario</p>
            </div>
            {isOwner ? (
              <div>
                <Link href="#" class="uk-button uk-button-text">
                  Editar
                </Link>
              </div>
            ) : null}
          </div>
        </div>
        <div className="uk-card-media-top">
          <Slider images={images} />
        </div>
        <div className="uk-card-body uk-padding-small">
          <h3 className="uk-card-title uk-text-center">
            <Link
              to={`/property/${_id}`}
              className="uk-button uk-button-text uk-text-lead"
            >
              {title}
            </Link>
          </h3>
          <div>Precio por noche: {price}</div>
          <div>Capacidad: {capacity} personas</div>
          <div>Creada {dayjs(createdAt).locale("es").fromNow()}</div>
          <p>{description}</p>
          <div className="uk-text-center">
            <button className="uk-button uk-button-primary">Reservar</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
