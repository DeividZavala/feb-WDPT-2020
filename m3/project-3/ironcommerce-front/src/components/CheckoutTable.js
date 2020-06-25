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

const CheckoutTable = () => {
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
            <tr>
              <td>
                <img
                  class="uk-preserve-width"
                  src="https://getuikit.com/docs/images/dark.jpg"
                  width="150"
                  alt=""
                />
              </td>
              <td class="uk-text-truncate">
                title asdasdasdadsasd asdadsasd asdad
              </td>
              <td class="">$12314.00</td>
              <td>
                <div class="uk-flex uk-flex-middle uk-flex-around">
                  <ActionBtn>-</ActionBtn>1<ActionBtn>+</ActionBtn>
                </div>
              </td>
              <td class="">$12314.00</td>
              <td class="">
                <span uk-icon="icon:trash;ratio:1.2"></span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <TotalContainer>
        <div className="uk-flex uk-width-1-3 uk-flex-around uk-flex-middle uk-text-bold">
          Total: $1213.00
          <BuyBtn className="uk-button">Place Order</BuyBtn>
        </div>
      </TotalContainer>
    </div>
  );
};

export default CheckoutTable;
