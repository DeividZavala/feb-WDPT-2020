import React from "react";
import styled from "styled-components";

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

const CartItem = () => {
  return (
    <CartItemContainer className="uk-child-width-auto">
      <ProductImg src="https://getuikit.com/docs/images/dark.jpg" alt="" />
      <div className="uk-flex uk-flex-column">
        <span className="uk-text-truncate uk-padding-small">
          asdasdadadadasd
        </span>
        <span>$120.00 x1</span>
      </div>
      <span className="uk-width-1-4 pointed" uk-icon="trash" />
    </CartItemContainer>
  );
};

const Cart = () => {
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
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
        </ItemsContainer>
        <TotalContainer>
          Total: $1213.00
          <CheckoutBtn className="uk-button">Checkout</CheckoutBtn>
        </TotalContainer>
      </div>
    </div>
  );
};

export default Cart;
