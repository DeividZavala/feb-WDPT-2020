import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Discount = styled.div`
  text-decoration-line: line-through;
`;

const BuyBtn = styled.button`
  background-color: white;
  border: 1px solid black;
  transition: all 0.3s;
  font-weight: bold;
  &:hover {
    background-color: black;
    color: white;
  }
`;

const getDiscount = (price, discount) => {
  return price * (1 - discount / 100);
};

const Product = ({ _id, title, images, price, discount, handleClick }) => {
  return (
    <div>
      <div className="uk-card uk-card-default">
        <div className="uk-card-body uk-padding-remove">
          <div>
            <Link to={`/products/${_id}`}>
              <div
                className="uk-inline uk-background-cover uk-height-medium uk-panel uk-flex uk-flex-center uk-flex-middle"
                style={{
                  backgroundImage: `url(${images[0]})`,
                }}
              ></div>
            </Link>
          </div>
          <div className="uk-text-center uk-flex uk-flex-center uk-flex-column">
            <h4 className="uk-margin-small-top uk-margin-small-bottom">
              {title}
            </h4>
            <div className="uk-flex uk-flex-center uk-margin-small-bottom">
              {discount && (
                <Discount className="uk-text-bold uk-margin-small-right">
                  ${price}.00
                </Discount>
              )}
              <div className="uk-text-bold">
                ${discount ? getDiscount(price, discount) : price}.00
              </div>
            </div>
          </div>
        </div>
        <div className="uk-card-footer">
          <BuyBtn className="uk-button" onClick={handleClick}>
            Comprar
          </BuyBtn>
        </div>
      </div>
    </div>
  );
};

export default Product;
