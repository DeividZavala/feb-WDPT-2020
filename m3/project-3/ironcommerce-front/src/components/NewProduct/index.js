import React, { useState } from "react";
import Section from "~commons/Section";
import InputField from "~commons/form/InputField";
import TextAreaField from "~commons/form/TextAreaField";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { createProduct } from "~redux/ProductDuck";

const CreateBtn = styled.button`
  background-color: white;
  border: 1px solid black;
  color: black;
  transition: all 0.3s;
  &:hover {
    background-color: black;
    color: white;
  }
`;

const CreateProduct = () => {
  const [product, setProduct] = useState({});
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    for (let key in product) {
      if (key === "images") {
        for (let file of Array.from(product[key])) {
          formData.append(key, file);
        }
      } else {
        formData.append(key, product[key]);
      }
    }
    dispatch(createProduct(formData));
  };

  const handleChange = (e) => {
    const key = e.target.name;
    const value = e.target.files || e.target.value;
    setProduct((prevState) => ({ ...prevState, [key]: value }));
  };
  return (
    <Section>
      <div className="uk-flex uk-flex-center uk-child-width-1-2">
        <form onSubmit={handleSubmit}>
          <InputField
            name="title"
            placeholder="Product title"
            value={product.title || ""}
            handleChange={handleChange}
          />
          <InputField
            name="price"
            placeholder="Product price"
            value={product.price || ""}
            handleChange={handleChange}
          />
          <TextAreaField
            name="description"
            handleChange={handleChange}
            value={product.description || ""}
          />
          <InputField
            name="images"
            placeholder="Product images"
            type="file"
            handleChange={handleChange}
            multiple
          />
          <CreateBtn className="uk-button">Create</CreateBtn>
        </form>
      </div>
    </Section>
  );
};

export default CreateProduct;
