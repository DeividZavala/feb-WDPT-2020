import axios from "axios";
import { base_url } from "./variables";

axios.defaults.withCredentials = true;

export const getProperties = () => {
  return axios.get(`${base_url}/properties`);
};

export const createProperty = (property) => {
  return axios.post(`${base_url}/properties`, property);
};
