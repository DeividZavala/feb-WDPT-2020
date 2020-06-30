import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { denormalizeData } from "../utils/formatters";
import { Link } from "react-router-dom";

const CartItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 100%;
  width: 100%;
  margin-bottom: 10px;
`;

const ProductImg = styled.img`
  width: 100px;
  max-width: 100px;
  height: 100px;
`;

const TotalContainer = styled.div`
  border-top: 1px solid #e5e5e5;
  margin-top: auto;
  font-size: 20px;
  font-weight: bold;
  width: 100%;
  align-items: center;
  padding: 20px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ItemsContainer = styled.div`
  max-height: 80vh;
  overflow: scroll;
`;

const CheckoutBtn = styled.a`
  background-color: white;
  border: 1px solid black;
  color: black;
  transition: all 0.3s;
  &:hover {
    background-color: black;
    color: white;
  }
`;

const CartItem = ({ images, title, price, quantity }) => {
  return (
    <CartItemContainer className="uk-child-width-auto">
      <ProductImg src={images[0]} alt="" />
      <div className="uk-flex uk-flex-column">
        <span className="uk-text-truncate uk-padding-small">{title}</span>
        <span>
          ${price}.00 x{quantity}
        </span>
      </div>
      <span className="uk-width-1-4 pointed remove-icon" uk-icon="trash" />
    </CartItemContainer>
  );
};

const Cart = () => {
  const items = useSelector((state) => state.cart.items);
  const products = denormalizeData(items);
  const total = products.reduce(
    (acc, item) => (acc += item.info.price * item.quantity),
    0
  );
  return (
    <div id="cart" uk-offcanvas="mode: push; overlay: true; flip:true">
      <div className="uk-offcanvas-bar uk-padding-small">
        <button
          className="uk-offcanvas-close"
          type="button"
          uk-close="true"
        ></button>

        <h3>Your Cart</h3>

        <ItemsContainer>
          {products.map((product) => (
            <CartItem {...product.info} quantity={product.quantity} />
          ))}
        </ItemsContainer>
        <TotalContainer>
          Total: ${total}.00
          <Link to="/checkout">
            <CheckoutBtn className="uk-button">Checkout</CheckoutBtn>
          </Link>
        </TotalContainer>
      </div>
    </div>
  );
};

export default Cart;
