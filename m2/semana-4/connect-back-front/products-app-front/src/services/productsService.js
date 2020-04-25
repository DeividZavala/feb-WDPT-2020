import axios from "axios";

export const getProducts = () => {
  return axios.get("http://localhost:3000/products");
};

export const createProduct = (product) => {
  return axios.post("http://localhost:3000/products", product, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};
