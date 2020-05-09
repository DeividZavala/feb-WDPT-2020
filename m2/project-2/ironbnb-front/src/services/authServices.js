import axios from "axios";
import { base_url } from "./variables";

axios.defaults.withCredentials = true;

export const login = (credential) => {
  return axios.post(`${base_url}/users/login`, credential);
};

export const signup = (credential) => {
  return axios.post(`${base_url}/users/signup`, credential);
};

export const logout = () => {
  return axios.post(`${base_url}/users/logout`);
};
