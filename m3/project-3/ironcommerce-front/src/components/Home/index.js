import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Section from "~commons/Section";
import Product from "~commons/Product";
import { fetchProducts } from "~redux/ProductDuck";
import { denormalizeData } from "../../utils/formatters";
import { addProduct } from "~redux/CartDuck";

const Home = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.items);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleClick = (product) => {
    dispatch(addProduct(product));
  };

  return (
    <Section>
      <div className="uk-grid uk-child-width-1-4">
        {denormalizeData(products).map((item, index) => (
          <Product
            key={index}
            {...item}
            handleClick={() => handleClick(item)}
          />
        ))}
      </div>
    </Section>
  );
};

export default Home;
