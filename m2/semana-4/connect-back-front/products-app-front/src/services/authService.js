import axios from "axios";

axios.defaults.withCredentials = true;

export const login = (credentials) => {
  return axios.post("http://localhost:3000/login", credentials);
};

export const signup = (credentials) => {
  return axios.post("http://localhost:3000/signup", credentials);
};
