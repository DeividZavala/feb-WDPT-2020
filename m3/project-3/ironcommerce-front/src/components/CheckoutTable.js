import React from "react";
import styled from "styled-components";

const ActionBtn = styled.button`
  width: 30px;
  height: 30px;
  font-size: 1.3rem;
  background-color: white;
  border: 1px solid black;
  transition: all 0.3s;
  font-weight: bold;
  &:hover {
    cursor: pointer;
    background-color: black;
    color: white;
  }
`;

const TotalContainer = styled.div`
  border-top: 1px solid #e5e5e5;
  display: flex;
  justify-content: flex-end;
  padding-top: 20px;
  font-size: 1.3rem;
  color: black;
`;

const BuyBtn = styled.a`
  background-color: white;
  border: 1px solid black;
  color: black;
  transition: all 0.3s;
  &:hover {
    background-color: black;
    color: white;
  }
`;

const TableItem = ({ title, images, quantity, price, handleClick }) => (
  <tr>
    <td>
      <img class="uk-preserve-width" src={images[0]} width="150" alt="" />
    </td>
    <td class="uk-text-truncate">{title}</td>
    <td class="">${price}.00</td>
    <td>
      <div class="uk-flex uk-flex-middle uk-flex-around">
        <ActionBtn>-</ActionBtn>
        {quantity}
        <ActionBtn onClick={handleClick}>+</ActionBtn>
      </div>
    </td>
    <td class="">${quantity * price}.00</td>
    <td class="">
      <span className="remove-icon" uk-icon="icon:trash;ratio:1.2"></span>
    </td>
  </tr>
);

const CheckoutTable = ({ products, total, handleClick, handleCreateOrder }) => {
  return (
    <div>
      <div class="uk-overflow-auto">
        <table class="uk-table uk-table-middle uk-table-divider uk-table-justify">
          <thead>
            <tr>
              <th class="uk-table-shrink"></th>
              <th class="uk-table-expand">Product</th>
              <th class="uk-text-center">Price</th>
              <th class="uk-width-small uk-text-center">Qty</th>
              <th class="uk-width-small uk-text-center">Total</th>
              <th class="uk-width-small"></th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <TableItem
                {...product.info}
                quantity={product.quantity}
                handleClick={() => handleClick(product.info)}
              />
            ))}
          </tbody>
        </table>
      </div>
      <TotalContainer>
        <div className="uk-flex uk-width-1-3 uk-flex-around uk-flex-middle uk-text-bold">
          Total: ${total}.00
          <BuyBtn className="uk-button" onClick={handleCreateOrder}>
            Place Order
          </BuyBtn>
        </div>
      </TotalContainer>
    </div>
  );
};

export default CheckoutTable;
