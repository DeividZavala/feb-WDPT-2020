import React from "react";
import Section from "~commons/Section";
import CheckoutTable from "~components/CheckoutTable";
import { useSelector, useDispatch } from "react-redux";
import { denormalizeData } from "../../utils/formatters";
import { addProduct, createOrder } from "~redux/CartDuck";

const Checkout = () => {
  const items = useSelector((state) => state.cart.items);
  const message = useSelector((state) => state.cart.message);
  const dispatch = useDispatch();
  const products = denormalizeData(items);
  const total = products.reduce(
    (acc, item) => (acc += item.info.price * item.quantity),
    0
  );
  const handleCreateOrder = () => {
    const items = products.map((item) => ({
      quantity: item.quantity,
      product: item.info._id,
    }));
    const order = { items, total };
    console.log(items);
    dispatch(createOrder(order));
  };
  const handleClick = (product) => {
    dispatch(addProduct(product));
  };
  return (
    <Section>
      <CheckoutTable
        products={products}
        total={total}
        handleClick={handleClick}
        handleCreateOrder={handleCreateOrder}
      />
      {message && (
        <div class="uk-alert-success" uk-alert>
          <p>{message}</p>
        </div>
      )}
    </Section>
  );
};

export default Checkout;
