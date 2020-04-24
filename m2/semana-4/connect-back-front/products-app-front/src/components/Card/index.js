import React from "react";

const currencyFormat = (num = 0) => {
  let format = /[$]/;
  if (format.test(num)) {
    num = num.replace("$", "");
  }
  num = parseFloat(num).toFixed(2);
  let str = num.toString().split(".");
  if (str[0].length >= 4) {
    str[0] = str[0].replace(/(\d)(?=(\d{3})+$)/g, "$1,");
  }
  if (str[1] && str[1].length >= 5) {
    str[1] = str[1].replace(/(\d{3})/g, "$1 ");
  }
  let result = str.join(".");
  result = `$ ${result}`;
  return result;
};

const Card = ({ name, price, image, description }) => (
  <div>
    <div className="uk-card uk-card-default">
      <div className="uk-card-media-top">
        <img src={image} alt="" />
      </div>
      <div className="uk-card-body">
        <h3 className="uk-card-title">{name}</h3>
        <h6>Precio: {currencyFormat(price)}</h6>
        <p>{description}</p>
      </div>
    </div>
  </div>
);

export default Card;
