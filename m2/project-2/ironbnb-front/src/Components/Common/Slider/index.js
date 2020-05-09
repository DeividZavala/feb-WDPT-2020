import React from "react";

const Slider = ({ images }) => (
  <div
    className="uk-position-relative uk-visible-toggle uk-light"
    uk-slideshow="animation: fade;ratio: 2:2;max-height: 500"
  >
    <ul className="uk-slideshow-items">
      {images.map((image, index) => (
        <li>
          <img key={index} src={image} alt="" uk-cover="true" />
        </li>
      ))}
    </ul>

    <a
      className="uk-position-center-left uk-position-small uk-hidden-hover"
      href="#"
      uk-slidenav-previous="true"
      uk-slideshow-item="previous"
    ></a>
    <a
      className="uk-position-center-right uk-position-small uk-hidden-hover"
      href="#"
      uk-slidenav-next="true"
      uk-slideshow-item="next"
    ></a>

    <div className="uk-position-bottom-center uk-position-small">
      <ul className="uk-dotnav">
        {images.map((image, index) => (
          <li uk-slideshow-item={index}>
            <a href="#">Item 1</a>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default Slider;
