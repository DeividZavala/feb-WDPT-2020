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

const Product = () => {
  return (
    <div>
      <div className="uk-card uk-card-default">
        <div className="uk-card-body uk-padding-remove">
          <div>
            <Link to={"/products/:id"}>
              <div
                className="uk-inline uk-background-cover uk-height-medium uk-panel uk-flex uk-flex-center uk-flex-middle"
                style={{
                  backgroundImage:
                    "url(https://getuikit.com/docs/images/dark.jpg)",
                }}
              ></div>
            </Link>
          </div>
          <div className="uk-text-center uk-flex uk-flex-center uk-flex-column">
            <h4 className="uk-margin-small-top uk-margin-small-bottom">
              Nombre
            </h4>
            <div className="uk-flex uk-flex-center uk-margin-small-bottom">
              <Discount className="uk-text-bold uk-margin-small-right">
                $123.00
              </Discount>
              <div className="uk-text-bold">$123.00</div>
            </div>
          </div>
        </div>
        <div className="uk-card-footer">
          <BuyBtn className="uk-button">Comprar</BuyBtn>
        </div>
      </div>
    </div>
  );
};

export default Product;
