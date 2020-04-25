import axios from "axios";

export const getProducts = () => {
  return axios.get("http://localhost:3000/products", { withCredentials: true });
};

export const login = () => {
  console.log("login");
  return axios.post("http://localhost:3000/login", {
    email: "crusedmoss@gmail.com",
    password: "perro",
  });
};
